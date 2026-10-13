import React, { useEffect, useRef, useState } from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Form, FormFeedback, Input, Label, Row, Spinner } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { Link, useParams } from "react-router-dom";

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
import { createWhyChoose, fetchWhyChooseDetail, resetWhyChooseShowDetail } from "../../../store/actions";
import withRouter from "../../../Components/Common/withRouter";
import { api } from "../../../config";
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const WhyChooseForm = (props) => {
	const { id } = useParams();
	document.title = `Why Choose: ${id ? "Edit" : "create"} | Admin & Dashboards`;
	const dispatch = useDispatch();
	const [file, setFile] = useState([]);

	const createWhyChooseSelector = createSelector(
		(state) => state.CreateWhyChooseReducer,
		(layout) => layout
	);
	const useWhyChooseSelect = useSelector(createWhyChooseSelector);
	const createWhyChooseDetailSelector = createSelector(
		(state) => state.WhyChooseDetailReducer,
		(layout) => ({
			whyChoose: layout.whyChoose,
			isLoading: layout.isLoading,
		})
	);
	const { whyChoose, isLoading } = useSelector(createWhyChooseDetailSelector);

	useEffect(() => {
		if (id) dispatch(fetchWhyChooseDetail(id));

		return () => {
			dispatch(resetWhyChooseShowDetail());
		};
	}, [id, dispatch]);

	useEffect(() => {
		if (whyChoose) {
			if (whyChoose.image) {
				setFile([
					{
						source: whyChoose.image,
						options: {
							type: "local",
						},
					},
				]);
			} else {
				setFile([]);
			}
		}
	}, [whyChoose]);

	const whyChooseValidation = useFormik({
		enableReinitialize: true,

		initialValues: {
			id: id || "",
			title: whyChoose ? whyChoose.title : "",
			description: whyChoose ? whyChoose.description : "",
			ordering: whyChoose ? whyChoose.ordering : 0,
			isActive: whyChoose ? (whyChoose.isActive === 1 ? true : false) : true,
			image: whyChoose ? whyChoose.image : "",
		},
		validationSchema: Yup.object({
			title: Yup.string().required("Please Enter Title"),
		}),
		onSubmit: (values) => {
			values.image = file?.length > 0 ? file[0]?.serverId : "";
			dispatch(createWhyChoose(values, props.router.navigate));
		},
	});

	return (
		<React.Fragment>
			<div className="page-content">
				<Container fluid>
					<BreadCrumb title="WhyChoose Menu" pageTitle="Dashboard" pageLink="/whyChoose-menu" />
					<Row>
						<Col lg={12}>
							<Card>
								<CardHeader>
									<Row className="justify-content-between align-items-center gy-3">
										<Col lg={3}>
											<h5 className="mt-2">{id ? "Edit" : "Create"} Why Choose</h5>
										</Col>
										<Col className="col-lg-auto">
											<div className="d-md-flex text-nowrap gap-2">
												<Link className="btn btn-outline-dark" to="/whyChoose-menu">
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
							whyChooseValidation.handleSubmit();
							return false;
						}}
						action="#"
					>
						<Row>
							<Col lg={8}>
								<Card>
									<CardBody>
										<div className="mb-3">
											<Label className="form-label" htmlFor="whyChoose-title-input">
												Why Choose Title <small className="text-danger">(Required)</small>
											</Label>
											<Input
												type="text"
												className="form-control"
												id="whyChoose-title-input"
												placeholder="Enter whyChoose title"
												name="title"
												onChange={whyChooseValidation.handleChange}
												onBlur={whyChooseValidation.handleBlur}
												value={whyChooseValidation.values.title}
												invalid={whyChooseValidation.touched.title && whyChooseValidation.errors.title ? true : false}
											/>
											{whyChooseValidation.touched.title && whyChooseValidation.errors.title ? (
												<FormFeedback type="invalid">{whyChooseValidation.errors.title}</FormFeedback>
											) : null}
										</div>
										<div className="mb-3">
											<Label className="form-label" htmlFor="description-input">
												Description
											</Label>
											<textarea
												className="form-control"
												id="description-input"
												rows="3"
												placeholder="Enter description"
												name="description"
												onChange={whyChooseValidation.handleChange}
												onBlur={whyChooseValidation.handleBlur}
												value={whyChooseValidation.values.description}
											></textarea>
										</div>
										<div className="mb-3">
											<Label className="form-label" htmlFor="thumbnail-input">
												Icon <small className="text-danger">(100 x 100 pixel)</small>
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
														server={`${api.BASE_URL}/save-image/whyChoose`}
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
									<CardBody>
										<div className="mb-3">
											<Label className="form-label" htmlFor="whyChoose-ordering-input">
												Ordering
											</Label>
											<Input
												type="number"
												className="form-control"
												id="whyChoose-ordering-input"
												placeholder="Enter whyChoose ordering"
												name="ordering"
												onChange={whyChooseValidation.handleChange}
												onBlur={whyChooseValidation.handleBlur}
												value={whyChooseValidation.values.ordering}
											/>
										</div>
									</CardBody>
								</Card>
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
												onChange={whyChooseValidation.handleChange}
												onBlur={whyChooseValidation.handleBlur}
												checked={whyChooseValidation.values.isActive}
											/>
											<Label className="form-check-label" for="isActive">
												Status: <span className="fw-bolder">{whyChooseValidation.values.isActive ? "Active" : "In-Active"}</span>
											</Label>
										</div>
									</CardBody>
								</Card>
							</Col>
							<Col lg={12}>
								<div className="text-start mb-4">
									{useWhyChooseSelect.isLoading ? (
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
											<i className="ri-save-3-line label-icon align-middle fs-16 me-2"></i> Save WhyChoose
										</Button>
									)}{" "}
									<Link className="btn btn-label btn-danger" to="/whyChoose-menu">
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

export default withRouter(WhyChooseForm);
