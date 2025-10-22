import React, { useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import withRouter from "../../../Components/Common/withRouter";
import classnames from "classnames";

const Header = (props) => {
	const [cardHeaderTab, setCardHeaderTab] = useState("1");
	const cardHeaderToggle = (value) => {
		console.log(value);
	};
	const toggle = (tab) => {
		props.router.navigate(`/hosting${tab}`);
	};
	return (
		<React.Fragment>
			<div className="card-header align-items-center d-flex mb-3">
				<div className="flex-shrink-0 ms-2">
					<Nav tabs className="nav justify-content-start nav-tabs-custom rounded card-header-tabs border-bottom-0">
						<NavItem>
							<NavLink
								style={{ cursor: "pointer" }}
								className={classnames({ active: props.router.location.pathname === "/hosting" })}
								onClick={() => {
									toggle("");
								}}
							>
								Web Hosting
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								style={{ cursor: "pointer" }}
								className={classnames({ active: props.router.location.pathname === "/hosting/performance-type" })}
								onClick={() => {
									toggle("/performance-type");
								}}
							>
								Performance Type
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								style={{ cursor: "pointer" }}
								className={classnames({ active: props.router.location.pathname === "/hosting/default-plan" })}
								onClick={() => {
									toggle("/default-plan");
								}}
							>
								Default Plan
							</NavLink>
						</NavItem>
					</Nav>
				</div>
			</div>
		</React.Fragment>
	);
};

export default withRouter(Header);
