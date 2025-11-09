import React, { useMemo } from "react";
import { Card, CardBody } from "reactstrap";
import TableContainer from "../../../Components/Common/TableContainer";

import Loader from "../../../Components/Common/Loader";
import { Link } from "react-router-dom";
import { createSelector } from "reselect";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchWebHostingList } from "../../../store/actions";

const TableList = ({ onShowDetail, onDeleteWebHosting }) => {
	const hostingListSelector = createSelector(
		(state) => state.WebHostingListReducer,
		(layout) => ({
			hostingList: layout.hostingList,
			message: layout.message,
			isLoading: layout.isLoading,
			success: layout.success,
			error: layout.error,
		})
	);
	const { hostingList, isLoading, success } = useSelector(hostingListSelector);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchWebHostingList());
	}, [dispatch]);

	// Column
	const columns = useMemo(
		() => [
			{
				Header: "ID",
				accessor: "id",
				Cell: (contact) => <span className="fw-semibold">{parseInt(contact.row.id) + 1}</span>,
				filterable: false,
			},
			{
				Header: "Type",
				accessor: "type",
				filterable: false,
				Cell: (contact) => <span className="fw-semibold">{contact.row.original.type}</span>,
			},
			{
				Header: "Price Per Year",
				accessor: "pricePerYear",
				filterable: false,
			},
			{
				Header: "Data Storage",
				accessor: "dataStorage",
				filterable: false,
			},
			{
				Header: "Bandwidth",
				accessor: "bandwidth",
				filterable: false,
			},
			{
				Header: "Email Accounts",
				accessor: "emailAccounts",
				filterable: false,
			},
			{
				Header: "Database",
				accessor: "database",
				filterable: false,
			},
			{
				Header: "Status",
				accessor: "isActive",
				filterable: false,
				Cell: (hosting) => (
					<>
						{hosting.row.original.isActive ? (
							<span className="badge bg-success-subtle text-success">ACTIVE</span>
						) : (
							<span className="badge bg-danger-subtle text-danger">IN-ACTIVE</span>
						)}
					</>
				),
			},
			{
				Header: "Action",
				Cell: (cellProps) => {
					return (
						<ul className="list-inline hstack gap-2 mb-0">
							<li className="list-inline-item" title="Edit">
								<Link className="edit-item-btn" to="#" onClick={() => onShowDetail(cellProps.row.original.id)}>
									<i className="ri-pencil-fill align-bottom text-muted"></i>
								</Link>
							</li>
							<li className="list-inline-item" title="Delete">
								<Link className="remove-item-btn" onClick={() => onDeleteWebHosting(cellProps.row.original.id)} to="#">
									<i className="ri-delete-bin-fill align-bottom text-muted"></i>
								</Link>
							</li>
						</ul>
					);
				},
			},
		],
		[onShowDetail, onDeleteWebHosting]
	);
	return (
		<React.Fragment>
			<Card id="contactList">
				<CardBody className="pt-0">
					<div>
						{success && !isLoading ? (
							<TableContainer
								columns={columns}
								data={hostingList || []}
								isGlobalFilter={true}
								isAddWebHostingList={false}
								customPageSize={8}
								className="custom-header-css"
								divClass="table-responsive table-card mb-2"
								tableClass="align-middle table-nowrap"
								theadClass="table-light"
								isContactsFilter={true}
								SearchPlaceholder="Search for contact..."
								isPagination={true}
							/>
						) : (
							<Loader error={true} />
						)}
					</div>
				</CardBody>
			</Card>
		</React.Fragment>
	);
};

export default TableList;
