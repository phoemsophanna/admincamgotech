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
import { createCareer, fetchCareerDetail, resetCareerShowDetail } from "../../../store/actions";
import withRouter from "../../../Components/Common/withRouter";
import { api } from "../../../config";
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const CareerForm = (props) => {
	const { id } = useParams();
	document.title = `Career: ${id ? "Edit" : "create"} | Admin & Dashboards`;
	const dispatch = useDispatch();
	const [file, setFile] = useState([]);
	const [contentDesc, setContentDesc] = useState("");

	const createCareerSelector = createSelector(
		(state) => state.CreateCareerReducer,
		(layout) => layout
	);
	const useCareerSelect = useSelector(createCareerSelector);
	const createCareerDetailSelector = createSelector(
		(state) => state.CareerDetailReducer,
		(layout) => ({
			career: layout.career,
			isLoading: layout.isLoading,
		})
	);
	const { career, isLoading } = useSelector(createCareerDetailSelector);

	const handleEditorChange = (e) => {
		setContentDesc(e.target.getContent());
	};

	useEffect(() => {
		if (id) dispatch(fetchCareerDetail(id));

		return () => {
			dispatch(resetCareerShowDetail());
		};
	}, [id, dispatch]);

	useEffect(() => {
		if (career) {
			setContentDesc(career.content);
			if (career.image) {
				setFile([
					{
						source: career.image,
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
	}, [career]);

	const careerValidation = useFormik({
		enableReinitialize: true,

		initialValues: {
			id: id || "",
			title: career ? career.title : "",
			summary: career ? career.summary : "",
			content: career ? career.content : "",
			location: career ? career.location : "",
			type: career ? career.type : "",
			ordering: career ? career.ordering : 0,
			isActive: career ? (career.isActive === 1 ? true : false) : true,
		},
		validationSchema: Yup.object({
			title: Yup.string().required("Please Enter Title"),
		}),
		onSubmit: (values) => {
			values.content = contentDesc;
			dispatch(createCareer(values, props.router.navigate));
		},
	});

	return (
		<React.Fragment>
			<div className="page-content">
				<Container fluid>
					<BreadCrumb title="Career Menu" pageTitle="Dashboard" pageLink="/career-menu" />
					<Row>
						<Col lg={12}>
							<Card>
								<CardHeader>
									<Row className="justify-content-between align-items-center gy-3">
										<Col lg={3}>
											<h5 className="mt-2">{id ? "Edit" : "Create"} Career</h5>
										</Col>
										<Col className="col-lg-auto">
											<div className="d-md-flex text-nowrap gap-2">
												<Link className="btn btn-outline-dark" to="/career-menu">
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
							careerValidation.handleSubmit();
							return false;
						}}
						action="#"
					>
						<Row>
							<Col lg={8}>
								<Card>
									<CardBody>
										<div className="mb-3">
											<Label className="form-label" htmlFor="career-title-input">
												Career Title <small className="text-danger">(Required)</small>
											</Label>
											<Input
												type="text"
												className="form-control"
												id="career-title-input"
												placeholder="Enter career title"
												name="title"
												onChange={careerValidation.handleChange}
												onBlur={careerValidation.handleBlur}
												value={careerValidation.values.title}
												invalid={careerValidation.touched.title && careerValidation.errors.title ? true : false}
											/>
											{careerValidation.touched.title && careerValidation.errors.title ? (
												<FormFeedback type="invalid">{careerValidation.errors.title}</FormFeedback>
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
												onChange={careerValidation.handleChange}
												onBlur={careerValidation.handleBlur}
												value={careerValidation.values.summary}
											></textarea>
										</div>
										<div className="mb-3">
											<Label>Content</Label>
											<TinymceEditor onUploadImage={handleEditorChange} initDataValue={contentDesc} />
										</div>
									</CardBody>
								</Card>
							</Col>
							<Col lg={4}>
								<Card>
									<CardBody>
										<div className="mb-3">
											<Label className="form-label" htmlFor="career-location-input">
												Location
											</Label>
											<Input
												type="text"
												className="form-control"
												id="career-location-input"
												placeholder="Enter career location"
												name="location"
												onChange={careerValidation.handleChange}
												onBlur={careerValidation.handleBlur}
												value={careerValidation.values.location}
											/>
										</div>
										<div className="mb-3">
											<Label className="form-label" htmlFor="career-type-input">
												Job Type
											</Label>
											<Input
												type="text"
												className="form-control"
												id="career-type-input"
												placeholder="Enter career type"
												name="type"
												onChange={careerValidation.handleChange}
												onBlur={careerValidation.handleBlur}
												value={careerValidation.values.type}
											/>
										</div>
										<div className="mb-3">
											<Label className="form-label" htmlFor="career-ordering-input">
												Ordering
											</Label>
											<Input
												type="number"
												className="form-control"
												id="career-ordering-input"
												placeholder="Enter career ordering"
												name="ordering"
												onChange={careerValidation.handleChange}
												onBlur={careerValidation.handleBlur}
												value={careerValidation.values.ordering}
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
												onChange={careerValidation.handleChange}
												onBlur={careerValidation.handleBlur}
												checked={careerValidation.values.isActive}
											/>
											<Label className="form-check-label" for="isActive">
												Status: <span className="fw-bolder">{careerValidation.values.isActive ? "Active" : "In-Active"}</span>
											</Label>
										</div>
									</CardBody>
								</Card>
							</Col>
							<Col lg={12}>
								<div className="text-start mb-4">
									{useCareerSelect.isLoading ? (
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
											<i className="ri-save-3-line label-icon align-middle fs-16 me-2"></i> Save Career
										</Button>
									)}{" "}
									<Link className="btn btn-label btn-danger" to="/career-menu">
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

export default withRouter(CareerForm);
