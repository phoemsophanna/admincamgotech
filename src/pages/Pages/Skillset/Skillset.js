import React from "react";
import { Button, Card, CardHeader, Col, Container, Form, FormFeedback, Input, Label, Modal, ModalBody, ModalHeader, Row, Spinner } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import TableList from "./TableList";
import { useState } from "react";
import withRouter from "../../../Components/Common/withRouter";

import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
	createSkillset,
	deleteSkillset,
	fetchSkillsetDetail,
	refreshSkillsetList,
	resetCreateSkillsetFlag,
	resetSkillsetShowDetail,
} from "../../../store/actions";

// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

import { createSelector } from "reselect";
import { useEffect } from "react";
import DeleteModal from "../../../Components/Common/DeleteModal";
import { api } from "../../../config";
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const Skillset = () => {
	document.title = "Skillset | Admin & Dashboards";
	const dispatch = useDispatch();
	const [UID, setUID] = useState(null);

	const createSkillsetSelector = createSelector(
		(state) => state.CreateSkillsetReducer,
		(layout) => layout
	);
	const createSkillsetDetailSelector = createSelector(
		(state) => state.SkillsetDetailReducer,
		(layout) => layout
	);

	const useCreateSkillsetSelect = useSelector(createSkillsetSelector);
	const skillsetDetail = useSelector(createSkillsetDetailSelector);

	const skillsetValidation = useFormik({
		enableReinitialize: true,

		initialValues: {
			id: skillsetDetail.skillset?.id || "",
			title: skillsetDetail.skillset?.title || "",
			percentage: skillsetDetail.skillset?.percentage || 0,
			barColor: skillsetDetail.skillset?.barColor || "",
			ordering: skillsetDetail.skillset?.ordering || 0,
			isActive: skillsetDetail.skillset ? (skillsetDetail.skillset.isActive ? true : false) : true,
		},
		onSubmit: (values) => {
			dispatch(createSkillset(values));
		},
	});

	const [modal_backdrop, setmodal_backdrop] = useState(false);
	const [deleteModal, setDeleteModal] = useState(false);

	function closeModal() {
		setmodal_backdrop(false);
		skillsetValidation.resetForm();
		dispatch(resetSkillsetShowDetail());
	}

	const handleRefresh = () => {
		dispatch(refreshSkillsetList());
	};

	const handleShowSkillsetDetail = (skillsetId) => {
		setmodal_backdrop(true);
		dispatch(fetchSkillsetDetail(skillsetId));
	};

	const handleDeleteSkillset = () => {
		if (UID) {
			dispatch(deleteSkillset(UID));
		}
	};

	useEffect(() => {
		if (useCreateSkillsetSelect.success && !useCreateSkillsetSelect.isLoading) {
			dispatch(resetCreateSkillsetFlag());
			setmodal_backdrop(false);
			skillsetValidation.resetForm();
			dispatch(resetSkillsetShowDetail());
			setDeleteModal(false);
			dispatch(refreshSkillsetList());
		}
	}, [dispatch, skillsetValidation, setDeleteModal, useCreateSkillsetSelect, skillsetDetail]);

	return (
		<React.Fragment>
			<div className="page-content">
				<Container fluid>
					<BreadCrumb title="Skillset Management" pageTitle="Dashboard" />
					<Row>
						<Col lg={12}>
							<Card>
								<CardHeader>
									<Row className="justify-content-between align-items-center gy-3">
										<Col lg={3}>
											<Button
												color="primary"
												className="btn add-btn"
												data-bs-toggle="modal"
												data-bs-target="#showModal"
												onClick={() => setmodal_backdrop(true)}
											>
												<i className="ri-add-fill me-1 align-bottom"></i> Create New
											</Button>
										</Col>
										<Col className="col-lg-auto">
											<div className="d-md-flex text-nowrap gap-2">
												<Button color="dark" className="btn" outline onClick={handleRefresh}>
													<i className="ri-refresh-line me-1 align-bottom"></i> Refresh
												</Button>
											</div>
										</Col>
									</Row>
								</CardHeader>
							</Card>
						</Col>
					</Row>

					<Row>
						<Col lg={12}>
							<TableList
								onShowDetail={handleShowSkillsetDetail}
								onDeleteSkillset={(id) => {
									setDeleteModal(true);
									setUID(id);
								}}
							/>
						</Col>
					</Row>
				</Container>
			</div>
			<DeleteModal
				show={deleteModal}
				onDeleteClick={handleDeleteSkillset}
				onCloseClick={() => setDeleteModal(false)}
				isLoading={useCreateSkillsetSelect.isLoading}
			/>
			<Modal
				isOpen={modal_backdrop}
				toggle={() => {
					closeModal();
				}}
				backdrop={"static"}
				id="staticBackdrop"
				centered
			>
				<ModalHeader className="bg-light p-3 text-light" toggle={closeModal}>
					{skillsetDetail.skillset ? "Update Skillset" : "Create Skillset"}
				</ModalHeader>

				<ModalBody>
					<Form
						onSubmit={(e) => {
							e.preventDefault();
							skillsetValidation.handleSubmit();
							return false;
						}}
						action="#"
						autoComplete="off"
					>
						<div className="mb-2">
							<Label htmlFor="title" className="form-label">
								Title
							</Label>
							<Input
								id="title"
								name="title"
								type="text"
								className="form-control"
								placeholder="Enter title"
								onChange={skillsetValidation.handleChange}
								onBlur={skillsetValidation.handleBlur}
								value={skillsetValidation.values.title || ""}
							/>
						</div>
						<div className="mb-2">
							<Label htmlFor="percentage" className="form-label">
								Percentage
							</Label>
							<Input
								id="percentage"
								name="percentage"
								type="number"
								className="form-control"
								placeholder="Enter percentage"
								onChange={skillsetValidation.handleChange}
								onBlur={skillsetValidation.handleBlur}
								value={skillsetValidation.values.percentage || ""}
							/>
						</div>
						<div className="mb-2">
							<Label htmlFor="barColor" className="form-label">
								Color
							</Label>
							<Input
								id="barColor"
								name="barColor"
								type="text"
								className="form-control"
								placeholder="Enter color"
								onChange={skillsetValidation.handleChange}
								onBlur={skillsetValidation.handleBlur}
								value={skillsetValidation.values.barColor || ""}
							/>
						</div>
						<div className="mb-2">
							<Label htmlFor="ordering" className="form-label">
								Ordering
							</Label>
							<Input
								id="ordering"
								name="ordering"
								type="number"
								className="form-control"
								placeholder="Enter ordering"
								onChange={skillsetValidation.handleChange}
								onBlur={skillsetValidation.handleBlur}
								value={skillsetValidation.values.ordering || ""}
							/>
						</div>

						<div className="form-check form-switch form-switch-md mb-2" dir="ltr">
							<Input
								type="checkbox"
								className="form-check-input"
								id="isActive"
								name="isActive"
								onChange={skillsetValidation.handleChange}
								onBlur={skillsetValidation.handleBlur}
								checked={skillsetValidation.values.isActive}
							/>
							<Label className="form-check-label" for="isActive">
								Status: <span className="fw-bolder">{skillsetValidation.values.isActive ? "Active" : "In-Active"}</span>
							</Label>
						</div>
						<div className="text-end">
							<Button type="button" color="light" className="btn-label" onClick={closeModal}>
								<i className="ri-close-line label-icon align-middle fs-16 me-2"></i> Discus
							</Button>{" "}
							{useCreateSkillsetSelect.isLoading ? (
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
									<i className="ri-save-3-line label-icon align-middle fs-16 me-2"></i> Save
								</Button>
							)}
						</div>
					</Form>
				</ModalBody>
			</Modal>
		</React.Fragment>
	);
};

export default withRouter(Skillset);
