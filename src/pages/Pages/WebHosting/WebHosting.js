import React from "react";

import { Button, Card, CardHeader, Col, Container, Form, Input, Label, Modal, ModalBody, ModalHeader, Row, Spinner } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import TableList from "./TableList";
import { useState } from "react";
import withRouter from "../../../Components/Common/withRouter";

import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
	createWebHosting,
	deleteWebHosting,
	fetchWebHostingDetail,
	fetchWebHostingDropdown,
	refreshWebHostingList,
	resetCreateWebHostingFlag,
	resetWebHostingShowDetail,
} from "../../../store/actions";

import { createSelector } from "reselect";
import { useEffect } from "react";
import DeleteModal from "../../../Components/Common/DeleteModal";
import Header from "./Header";

const WebHosting = (props) => {
	document.title = "Web Hosting | Admin & Dashboards";
	const dispatch = useDispatch();
	const [UID, setUID] = useState(null);

	const createWebHostingSelector = createSelector(
		(state) => state.CreateWebHostingReducer,
		(layout) => layout
	);
	const createWebHostingDetailSelector = createSelector(
		(state) => state.WebHostingDetailReducer,
		(layout) => layout
	);

	const useCreateWebHostingSelect = useSelector(createWebHostingSelector);
	const hostingDetail = useSelector(createWebHostingDetailSelector);

	const hostingValidation = useFormik({
		enableReinitialize: true,

		initialValues: {
			id: hostingDetail.hosting?.id || "",
			type: hostingDetail.hosting?.type || "",
			pricePerYear: hostingDetail.hosting?.pricePerYear || "",
			dataStorage: hostingDetail.hosting?.dataStorage || "",
			bandwidth: hostingDetail.hosting?.bandwidth || "",
			emailAccounts: hostingDetail.hosting?.emailAccounts || "",
			database: hostingDetail.hosting?.database || "",
			domainAddOn: hostingDetail.hosting?.domainAddOn || "",
			maxHourlyEmailSend: hostingDetail.hosting?.maxHourlyEmailSend || "",
			hostingGroup: hostingDetail.hosting?.hostingGroup ? JSON.parse(hostingDetail.hosting?.hostingGroup) : [],
			isFreeDomain: hostingDetail.hosting ? (hostingDetail.hosting.isFreeDomain ? true : false) : false,
			isMostPopular: hostingDetail.hosting ? (hostingDetail.hosting.isMostPopular ? true : false) : false,
			mostPopularColor: hostingDetail.hosting ? hostingDetail.hosting.mostPopularColor : "",
			isGoodSpeed: hostingDetail.hosting ? (hostingDetail.hosting.isGoodSpeed ? true : false) : false,
			goodSpeedColor: hostingDetail.hosting ? hostingDetail.hosting.goodSpeedColor : "",
			isDisplayHomepage: hostingDetail.hosting ? (hostingDetail.hosting.isDisplayHomepage ? true : false) : false,
			ordering: hostingDetail.hosting?.ordering || "",
			isActive: hostingDetail.hosting ? (hostingDetail.hosting.isActive ? true : false) : true,
		},
		onSubmit: (values) => {
			dispatch(createWebHosting(values));
		},
	});

	const [modal_backdrop, setmodal_backdrop] = useState(false);
	const [deleteModal, setDeleteModal] = useState(false);

	function closeModal() {
		setmodal_backdrop(false);
		hostingValidation.resetForm();
		dispatch(resetWebHostingShowDetail());
	}

	const handleRefresh = () => {
		dispatch(refreshWebHostingList());
		dispatch(fetchWebHostingDropdown());
	};

	const handleShowWebHostingDetail = (hostingId) => {
		setmodal_backdrop(true);
		dispatch(fetchWebHostingDetail(hostingId));
	};

	const handleDeleteWebHosting = () => {
		if (UID) {
			dispatch(deleteWebHosting(UID));
		}
	};

	useEffect(() => {
		dispatch(fetchWebHostingDropdown());
	}, [dispatch]);

	useEffect(() => {
		if (useCreateWebHostingSelect.success && !useCreateWebHostingSelect.isLoading) {
			dispatch(resetCreateWebHostingFlag());
			setmodal_backdrop(false);
			hostingValidation.resetForm();
			dispatch(resetWebHostingShowDetail());
			setDeleteModal(false);
			dispatch(refreshWebHostingList());
		}
	}, [dispatch, hostingValidation, setDeleteModal, useCreateWebHostingSelect, hostingDetail]);

	return (
		<React.Fragment>
			<div className="page-content">
				<Container fluid>
					<BreadCrumb title="Web Hosting" pageTitle="Dashboard" />
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
							<TableList
								onShowDetail={handleShowWebHostingDetail}
								onDeleteWebHosting={(id) => {
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
				onDeleteClick={handleDeleteWebHosting}
				onCloseClick={() => setDeleteModal(false)}
				isLoading={useCreateWebHostingSelect.isLoading}
			/>
			<Modal
				isOpen={modal_backdrop}
				toggle={() => {
					closeModal();
				}}
				backdrop={"static"}
				id="staticBackdrop"
				centered
				size="lg"
			>
				<ModalHeader className="bg-light p-3 text-light" toggle={closeModal}>
					{hostingDetail.hosting ? "Update Web Hosting" : "Create Web Hosting"}
				</ModalHeader>

				<ModalBody>
					<Form
						onSubmit={(e) => {
							e.preventDefault();
							hostingValidation.handleSubmit();
							return false;
						}}
						action="#"
						autoComplete="off"
					>
						<Row>
							<Col lg={6}>
								<div className="mb-2">
									<Label htmlFor="type" className="form-label">
										Type <small className="text-danger">(Required)</small>
									</Label>
									<Input
										id="name"
										name="type"
										type="text"
										className="form-control"
										placeholder="Enter type"
										onChange={hostingValidation.handleChange}
										onBlur={hostingValidation.handleBlur}
										value={hostingValidation.values.type || ""}
									/>
								</div>
							</Col>
							<Col lg={6}>
								<div className="mb-2">
									<Label htmlFor="type" className="form-label">
										Price Per Year
									</Label>
									<Input
										id="name"
										name="pricePerYear"
										type="text"
										className="form-control"
										placeholder="Enter price per year"
										onChange={hostingValidation.handleChange}
										onBlur={hostingValidation.handleBlur}
										value={hostingValidation.values.pricePerYear || ""}
									/>
								</div>
							</Col>
							<Col lg={6}>
								<div className="mb-2">
									<Label htmlFor="dataStorage" className="form-label">
										Data Storage
									</Label>
									<Input
										id="dataStorage"
										name="dataStorage"
										type="text"
										className="form-control"
										placeholder="Enter data storage"
										onChange={hostingValidation.handleChange}
										onBlur={hostingValidation.handleBlur}
										value={hostingValidation.values.dataStorage || ""}
									/>
								</div>
							</Col>
							<Col lg={6}>
								<div className="mb-2">
									<Label htmlFor="bandwidth" className="form-label">
										Bandwidth
									</Label>
									<Input
										id="bandwidth"
										name="bandwidth"
										type="text"
										className="form-control"
										placeholder="Enter bandwidth"
										onChange={hostingValidation.handleChange}
										onBlur={hostingValidation.handleBlur}
										value={hostingValidation.values.bandwidth || ""}
									/>
								</div>
							</Col>
							<Col lg={6}>
								<div className="mb-2">
									<Label htmlFor="emailAccounts" className="form-label">
										Email Accounts
									</Label>
									<Input
										id="emailAccounts"
										name="emailAccounts"
										type="text"
										className="form-control"
										placeholder="Enter Email Accounts"
										onChange={hostingValidation.handleChange}
										onBlur={hostingValidation.handleBlur}
										value={hostingValidation.values.emailAccounts || ""}
									/>
								</div>
							</Col>
							<Col lg={6}>
								<div className="mb-2">
									<Label htmlFor="database" className="form-label">
										Database
									</Label>
									<Input
										id="database"
										name="database"
										type="text"
										className="form-control"
										placeholder="Enter Database"
										onChange={hostingValidation.handleChange}
										onBlur={hostingValidation.handleBlur}
										value={hostingValidation.values.database || ""}
									/>
								</div>
							</Col>
							<Col lg={6}>
								<div className="mb-2">
									<Label htmlFor="domainAddOn" className="form-label">
										Domain Add On
									</Label>
									<Input
										id="domainAddOn"
										name="domainAddOn"
										type="text"
										className="form-control"
										placeholder="Enter Domain Add On"
										onChange={hostingValidation.handleChange}
										onBlur={hostingValidation.handleBlur}
										value={hostingValidation.values.domainAddOn || ""}
									/>
								</div>
							</Col>
							<Col lg={6}>
								<div className="mb-2">
									<Label htmlFor="maxHourlyEmailSend" className="form-label">
										Max Hourly Email Send
									</Label>
									<Input
										id="maxHourlyEmailSend"
										name="maxHourlyEmailSend"
										type="text"
										className="form-control"
										placeholder="Enter Max Hourly Email Send"
										onChange={hostingValidation.handleChange}
										onBlur={hostingValidation.handleBlur}
										value={hostingValidation.values.maxHourlyEmailSend || ""}
									/>
								</div>
							</Col>
							<Col lg={12}>
								<div className="my-3">
									<div className="form-check form-switch form-switch-md d-inline-block me-4" dir="ltr">
										<Input
											type="checkbox"
											className="form-check-input"
											id="isFreeDomain"
											name="isFreeDomain"
											onChange={hostingValidation.handleChange}
											onBlur={hostingValidation.handleBlur}
											checked={hostingValidation.values.isFreeDomain}
										/>
										<Label className="form-check-label" for="isFreeDomain">
											Free Domain: <span className="fw-bolder">{hostingValidation.values.isFreeDomain ? "Free" : "Charge"}</span>
										</Label>
									</div>
									<div className="form-check form-switch form-switch-md d-inline-block me-4" dir="ltr">
										<Input
											type="checkbox"
											className="form-check-input"
											id="isMostPopular"
											name="isMostPopular"
											onChange={hostingValidation.handleChange}
											onBlur={hostingValidation.handleBlur}
											checked={hostingValidation.values.isMostPopular}
										/>
										<Label className="form-check-label" for="isMostPopular">
											Most Popular: <span className="fw-bolder">{hostingValidation.values.isMostPopular ? "True" : "False"}</span>
										</Label>
									</div>
									<div className="form-check form-switch form-switch-md d-inline-block me-4" dir="ltr">
										<Input
											type="checkbox"
											className="form-check-input"
											id="isGoodSpeed"
											name="isGoodSpeed"
											onChange={hostingValidation.handleChange}
											onBlur={hostingValidation.handleBlur}
											checked={hostingValidation.values.isGoodSpeed}
										/>
										<Label className="form-check-label" for="isGoodSpeed">
											Good Speed: <span className="fw-bolder">{hostingValidation.values.isGoodSpeed ? "True" : "False"}</span>
										</Label>
									</div>
								</div>
								{hostingValidation.values.isMostPopular ? (
									<div className="input-group mb-3">
										<span className="input-group-text" id="mostPopularColor">
											Most Popular Background Color
										</span>
										<Input
											type="text"
											className="form-control"
											aria-describedby="mostPopularColor"
											name="mostPopularColor"
											onChange={hostingValidation.handleChange}
											onBlur={hostingValidation.handleBlur}
											value={hostingValidation.values.mostPopularColor}
										/>
									</div>
								) : null}
								{hostingValidation.values.isGoodSpeed ? (
									<div className="input-group mb-3">
										<span className="input-group-text" id="goodSpeedColor">
											Good Speed Background Color
										</span>
										<Input
											type="text"
											className="form-control"
											aria-describedby="goodSpeedColor"
											name="goodSpeedColor"
											onChange={hostingValidation.handleChange}
											onBlur={hostingValidation.handleBlur}
											value={hostingValidation.values.goodSpeedColor}
										/>
									</div>
								) : null}

								<div className="mb-3">
									<Label htmlFor="group-hosting" className="form-label">
										Group Hosting
									</Label>
									<div
										id="group-hosting"
										className="bg-body-tertiary py-3 px-3 rounded-3"
										style={{ display: "flex", flexWrap: "wrap", gap: "1rem", backgroundColor: "#333" }}
									>
										{hostingDetail?.dropdown?.map((el, index) => (
											<div key={index} className="form-check">
												<Input
													className="form-check-input"
													type="checkbox"
													id={`index-${index}`}
													name="hostingGroup"
													value={el.id}
													onChange={hostingValidation.handleChange}
													onBlur={hostingValidation.handleBlur}
													checked={hostingValidation.values.hostingGroup.includes(`${el.id}`) ? true : false}
												/>
												<Label className="form-check-label" for={`index-${index}`}>
													{el.title}
												</Label>
											</div>
										))}
									</div>
								</div>
								<hr />
							</Col>
							<Col lg={12}>
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
										onChange={hostingValidation.handleChange}
										onBlur={hostingValidation.handleBlur}
										value={hostingValidation.values.ordering || ""}
									/>
								</div>
								<div className="my-3">
									<div className="form-check form-switch form-switch-md d-inline-block me-4" dir="ltr">
										<Input
											type="checkbox"
											className="form-check-input"
											id="isDisplayHomepage"
											name="isDisplayHomepage"
											onChange={hostingValidation.handleChange}
											onBlur={hostingValidation.handleBlur}
											checked={hostingValidation.values.isDisplayHomepage}
										/>
										<Label className="form-check-label" for="isDisplayHomepage">
											Display Homepage: <span className="fw-bolder">{hostingValidation.values.isDisplayHomepage ? "Show" : "Hide"}</span>
										</Label>
									</div>
									<div className="form-check form-switch form-switch-md d-inline-block" dir="ltr">
										<Input
											type="checkbox"
											className="form-check-input"
											id="isActive"
											name="isActive"
											onChange={hostingValidation.handleChange}
											onBlur={hostingValidation.handleBlur}
											checked={hostingValidation.values.isActive}
										/>
										<Label className="form-check-label" for="isActive">
											Status: <span className="fw-bolder">{hostingValidation.values.isActive ? "Active" : "In-Active"}</span>
										</Label>
									</div>
								</div>
							</Col>
						</Row>

						<div className="text-end">
							<Button type="button" color="light" className="btn-label" onClick={closeModal}>
								<i className="ri-close-line label-icon align-middle fs-16 me-2"></i> Discus
							</Button>{" "}
							{useCreateWebHostingSelect.isLoading ? (
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

export default withRouter(WebHosting);
