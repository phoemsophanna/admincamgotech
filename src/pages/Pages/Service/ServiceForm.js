import React, { useEffect, useRef, useState } from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Form, FormFeedback, Input, Label, Row, Spinner } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { Link, useParams } from "react-router-dom";
import TinymceEditor from "../../../Components/Common/TinymceEditor";

import * as Yup from "yup";
import { useFormik } from "formik";

// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { createSelector } from "reselect";
import { useDispatch, useSelector } from "react-redux";
import { createService, fetchServiceDetail, resetServiceShowDetail } from "../../../store/actions";
import withRouter from "../../../Components/Common/withRouter";
import { api } from "../../../config";
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const ServiceForm = (props) => {
	const { id } = useParams();
	document.title = `Service: ${id ? "Edit" : "create"} | Admin & Dashboards`;
	const dispatch = useDispatch();
	const [file, setFile] = useState([]);
	const [contentDesc, setContentDesc] = useState("");

	const createServiceSelector = createSelector(
		(state) => state.CreateServiceReducer,
		(layout) => layout
	);
	const useServiceSelect = useSelector(createServiceSelector);
	const createServiceDetailSelector = createSelector(
		(state) => state.ServiceDetailReducer,
		(layout) => ({
			service: layout.service,
			isLoading: layout.isLoading,
		})
	);
	const { service, isLoading } = useSelector(createServiceDetailSelector);

	const handleEditorChange = (e) => {
		setContentDesc(e.target.getContent());
	};

	useEffect(() => {
		if (id) dispatch(fetchServiceDetail(id));

		return () => {
			dispatch(resetServiceShowDetail());
		};
	}, [id, dispatch]);

	useEffect(() => {
		if (service) {
			setContentDesc(service.content);
			if (service.image) {
				setFile([
					{
						source: service.image,
						options: {
							type: "local",
						},
					},
				]);
			} else {
				setFile([]);
			}
		} else {
			setContentDesc("");
		}
	}, [service]);

	const serviceValidation = useFormik({
		enableReinitialize: true,

		initialValues: {
			id: id || "",
			title: service ? service.title : "",
			summary: service ? service.summary : "",
			content: service ? service.content : "",
			metaKeyword: service ? service.metaKeyword : "",
			metaDesc: service ? service.metaDesc : "",
			ordering: service ? service.ordering : 0,
			isActive: service ? (service.isActive === 1 ? true : false) : true,
			isDisplayHomepage: service ? (service.isDisplayHomepage === 1 ? true : false) : false,
			image: service ? service.image : "",
		},
		validationSchema: Yup.object({
			title: Yup.string().required("Please Enter Title"),
		}),
		onSubmit: (values) => {
			values.content = contentDesc;
			values.image = file?.length > 0 ? file[0]?.serverId : "";
			dispatch(createService(values, props.router.navigate));
		},
	});

	return (
		<React.Fragment>
			<div className="page-content">
				<Container fluid>
					<BreadCrumb title="Service Menu" pageTitle="Dashboard" pageLink="/service-menu" />
					<Row>
						<Col lg={12}>
							<Card>
								<CardHeader>
									<Row className="justify-content-between align-items-center gy-3">
										<Col lg={3}>
											<h5 className="mt-2">{id ? "Edit" : "Create"} Service</h5>
										</Col>
										<Col className="col-lg-auto">
											<div className="d-md-flex text-nowrap gap-2">
												<Link className="btn btn-outline-dark" to="/service-menu">
													<i className="ri-arrow-go-back-line me-1 align-bottom"></i> Back
												</Link>
											</div>
										</Col>
									</Row>
								</CardHeader>
							</Card>
						</Col>
					</Row>

					<Form
						onSubmit={(e) => {
							e.preventDefault();
							serviceValidation.handleSubmit();
							return false;
						}}
						action="#"
					>
						<Row>
							<Col lg={8}>
								<Card>
									<CardBody>
										<div className="mb-3">
											<Label className="form-label" htmlFor="service-title-input">
												Service Title <small className="text-danger">(Required)</small>
											</Label>
											<Input
												type="text"
												className="form-control"
												id="service-title-input"
												placeholder="Enter service title"
												name="title"
												onChange={serviceValidation.handleChange}
												onBlur={serviceValidation.handleBlur}
												value={serviceValidation.values.title}
												invalid={serviceValidation.touched.title && serviceValidation.errors.title ? true : false}
											/>
											{serviceValidation.touched.title && serviceValidation.errors.title ? (
												<FormFeedback type="invalid">{serviceValidation.errors.title}</FormFeedback>
											) : null}
										</div>
										<div className="mb-3">
											<Label className="form-label" htmlFor="summary-input">
												Summary
											</Label>
											<textarea
												className="form-control"
												id="summary-input"
												rows="3"
												placeholder="Enter summary"
												name="summary"
												onChange={serviceValidation.handleChange}
												onBlur={serviceValidation.handleBlur}
												value={serviceValidation.values.summary}
											></textarea>
										</div>
										<div className="mb-3">
											<Label>Content</Label>
											<TinymceEditor onUploadImage={handleEditorChange} initDataValue={contentDesc} />
										</div>
										<div className="mb-3">
											<Label className="form-label" htmlFor="thumbnail-input">
												Thumbnail
											</Label>
											<div className="position-relative d-block mx-auto">
												<div style={{ width: "100%" }}>
													<FilePond
														labelIdle='<span class="filepond--label-action">Choose Image</span>'
														files={file}
														onupdatefiles={setFile}
														allowMultiple={false}
														maxFiles={1}
														name="file"
														server={`${api.BASE_URL}/save-image/service`}
														className="filepond filepond-input-multiple"
														stylePanelLayout="compact"
													/>
												</div>
											</div>
										</div>
									</CardBody>
								</Card>
							</Col>
							<Col lg={4}>
								
								<Card>
									<CardHeader>
										<div className="fw-bold">Published</div>
									</CardHeader>
									<CardBody>
										<div className="form-check form-switch form-switch-md mb-3" dir="ltr">
											<Input
												type="checkbox"
												className="form-check-input"
												id="isActive"
												name="isActive"
												onChange={serviceValidation.handleChange}
												onBlur={serviceValidation.handleBlur}
												checked={serviceValidation.values.isActive}
											/>
											<Label className="form-check-label" for="isActive">
												Status: <span className="fw-bolder">{serviceValidation.values.isActive ? "Active" : "In-Active"}</span>
											</Label>
										</div>
										<div className="form-check form-switch form-switch-md" dir="ltr">
											<Input
												type="checkbox"
												className="form-check-input"
												id="isDisplayHomepage"
												name="isDisplayHomepage"
												onChange={serviceValidation.handleChange}
												onBlur={serviceValidation.handleBlur}
												checked={serviceValidation.values.isDisplayHomepage}
											/>
											<Label className="form-check-label" for="isDisplayHomepage">
												Display Homepage: <span className="fw-bolder">{serviceValidation.values.isDisplayHomepage ? "Show" : "Hide"}</span>
											</Label>
										</div>
									</CardBody>
								</Card>
								<Card>
									<CardBody>
										<div className="mb-3">
											<Label className="form-label" htmlFor="service-ordering-input">
												Ordering
											</Label>
											<Input
												type="number"
												className="form-control"
												id="service-ordering-input"
												placeholder="Enter service ordering"
												name="ordering"
												onChange={serviceValidation.handleChange}
												onBlur={serviceValidation.handleBlur}
												value={serviceValidation.values.ordering}
											/>
										</div>
										<div className="mb-2">
											<Label htmlFor="metaKeyword" className="form-label">
												Meta Keyword
											</Label>
											<Input
												id="metaKeyword"
												name="metaKeyword"
												type="textarea"
												className="form-control"
												placeholder="Enter text"
												onChange={serviceValidation.handleChange}
												onBlur={serviceValidation.handleBlur}
												value={serviceValidation.values.metaKeyword || ""}
											/>
										</div>
										<div className="mb-2">
											<Label htmlFor="metaDesc" className="form-label">
												Meta Description
											</Label>
											<Input
												id="metaDesc"
												name="metaDesc"
												type="textarea"
												className="form-control"
												placeholder="Enter text"
												onChange={serviceValidation.handleChange}
												onBlur={serviceValidation.handleBlur}
												value={serviceValidation.values.metaDesc || ""}
											/>
										</div>
									</CardBody>
								</Card>
							</Col>
							<Col lg={12}>
								<div className="text-start mb-4">
									{useServiceSelect.isLoading ? (
										<Button color="primary" className="btn-load">
											<span className="d-flex align-items-center">
												<Spinner size="sm" className="flex-shrink-0">
													Loading...
												</Spinner>
												<span className="flex-grow-1 ms-2">Loading...</span>
											</span>
										</Button>
									) : (
										<Button type="submit" color="primary" className="btn-label">
											<i className="ri-save-3-line label-icon align-middle fs-16 me-2"></i> Save Service
										</Button>
									)}{" "}
									<Link className="btn btn-label btn-danger" to="/service-menu">
										<i className="ri-close-line label-icon align-middle fs-16 me-2"></i> Discus
									</Link>
								</div>
							</Col>
						</Row>
					</Form>
				</Container>
			</div>
		</React.Fragment>
	);
};

export default withRouter(ServiceForm);
