import React from "react";
import classnames from "classnames";
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Col,
	Container,
	Form,
	FormFeedback,
	Input,
	Label,
	Modal,
	ModalBody,
	ModalHeader,
	Nav,
	NavItem,
	NavLink,
	Row,
	Spinner,
} from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import TableList from "./TableList";
import { useState } from "react";
import withRouter from "../../../Components/Common/withRouter";

import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
	createPerformanceType,
	deletePerformanceType,
	fetchPerformanceTypeDetail,
	refreshPerformanceTypeList,
	resetCreatePerformanceTypeFlag,
	resetPerformanceTypeShowDetail,
} from "../../../store/actions";

import { createSelector } from "reselect";
import { useEffect } from "react";
import DeleteModal from "../../../Components/Common/DeleteModal";
import Header from "./Header";
import TableListPerformanceType from "./TableListPerformanceType";

const PerformanceType = () => {
	document.title = "Performance Type | Admin & Dashboards";
	const dispatch = useDispatch();
	const [UID, setUID] = useState(null);

	const createPerformanceTypeSelector = createSelector(
		(state) => state.CreatePerformanceTypeReducer,
		(layout) => layout
	);
	const createPerformanceTypeDetailSelector = createSelector(
		(state) => state.PerformanceTypeDetailReducer,
		(layout) => layout
	);

	const useCreatePerformanceTypeSelect = useSelector(createPerformanceTypeSelector);
	const performanceTypeDetail = useSelector(createPerformanceTypeDetailSelector);

	const performanceTypeValidation = useFormik({
		enableReinitialize: true,

		initialValues: {
			id: performanceTypeDetail.performanceType?.id || "",
			title: performanceTypeDetail.performanceType?.title || "",
			ordering: performanceTypeDetail.performanceType?.ordering || "",
			isActive: performanceTypeDetail.performanceType ? (performanceTypeDetail.performanceType.isActive ? true : false) : true,
		},
		onSubmit: (values) => {
			dispatch(createPerformanceType(values));
		},
	});

	const [modal_backdrop, setmodal_backdrop] = useState(false);
	const [deleteModal, setDeleteModal] = useState(false);

	function closeModal() {
		setmodal_backdrop(false);
		performanceTypeValidation.resetForm();
		dispatch(resetPerformanceTypeShowDetail());
	}

	const handleRefresh = () => {
		dispatch(refreshPerformanceTypeList());
	};

	const handleShowPerformanceTypeDetail = (performanceTypeId) => {
		setmodal_backdrop(true);
		dispatch(fetchPerformanceTypeDetail(performanceTypeId));
	};

	const handleDeletePerformanceType = () => {
		if (UID) {
			dispatch(deletePerformanceType(UID));
		}
	};

	useEffect(() => {
		if (useCreatePerformanceTypeSelect.success && !useCreatePerformanceTypeSelect.isLoading) {
			dispatch(resetCreatePerformanceTypeFlag());
			setmodal_backdrop(false);
			performanceTypeValidation.resetForm();
			dispatch(resetPerformanceTypeShowDetail());
			setDeleteModal(false);
			dispatch(refreshPerformanceTypeList());
		}
	}, [dispatch, performanceTypeValidation, setDeleteModal, useCreatePerformanceTypeSelect, performanceTypeDetail]);

	return (
		<React.Fragment>
			<div className="page-content">
				<Container fluid>
					<BreadCrumb title="Performance Type" pageTitle="Dashboard" />
					<Row>
						<Col lg={12}>
							<Card>
								<CardHeader>
									<Header />
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
							<TableListPerformanceType
								onShowDetail={handleShowPerformanceTypeDetail}
								onDeletePerformanceType={(id) => {
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
				onDeleteClick={handleDeletePerformanceType}
				onCloseClick={() => setDeleteModal(false)}
				isLoading={useCreatePerformanceTypeSelect.isLoading}
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
					{performanceTypeDetail.performanceType ? "Update Performance Type" : "Create Performance Type"}
				</ModalHeader>

				<ModalBody>
					<Form
						onSubmit={(e) => {
							e.preventDefault();
							performanceTypeValidation.handleSubmit();
							return false;
						}}
						action="#"
						autoComplete="off"
					>
						<Row>
							<Col lg={12}>
								<div className="mb-2">
									<Label htmlFor="title" className="form-label">
										Title
									</Label>
									<Input
										id="name"
										name="title"
										type="text"
										className="form-control"
										placeholder="Enter title"
										onChange={performanceTypeValidation.handleChange}
										onBlur={performanceTypeValidation.handleBlur}
										value={performanceTypeValidation.values.title || ""}
									/>
								</div>
								<div className="mb-2">
									<Label htmlFor="ordering" className="form-label">
										Ordering
									</Label>
									<Input
										id="ordering"
										name="ordering"
										type="text"
										className="form-control"
										placeholder="Enter ordering"
										onChange={performanceTypeValidation.handleChange}
										onBlur={performanceTypeValidation.handleBlur}
										value={performanceTypeValidation.values.ordering || ""}
									/>
								</div>
								<div className="my-3">
									<div className="form-check form-switch form-switch-md d-inline-block" dir="ltr">
										<Input
											type="checkbox"
											className="form-check-input"
											id="isActive"
											name="isActive"
											onChange={performanceTypeValidation.handleChange}
											onBlur={performanceTypeValidation.handleBlur}
											checked={performanceTypeValidation.values.isActive}
										/>
										<Label className="form-check-label" for="isActive">
											Status: <span className="fw-bolder">{performanceTypeValidation.values.isActive ? "Active" : "In-Active"}</span>
										</Label>
									</div>
								</div>
							</Col>
						</Row>

						<div className="text-end">
							<Button type="button" color="light" className="btn-label" onClick={closeModal}>
								<i className="ri-close-line label-icon align-middle fs-16 me-2"></i> Discus
							</Button>{" "}
							{useCreatePerformanceTypeSelect.isLoading ? (
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

export default withRouter(PerformanceType);
