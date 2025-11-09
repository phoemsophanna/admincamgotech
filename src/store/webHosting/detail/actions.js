import {
	RESET_WEB_HOST_SHOW_DETAIL_FLAG,
	WEB_HOST_DROPDOWN,
	WEB_HOST_DROPDOWN_FAILED,
	WEB_HOST_DROPDOWN_SUCCESSFUL,
	WEB_HOST_SHOW_DETAIL,
	WEB_HOST_SHOW_DETAIL_FAILED,
	WEB_HOST_SHOW_DETAIL_SUCCESSFUL,
} from "./actionTypes";

export const fetchWebHostingDetail = (hostingId) => {
	return {
		type: WEB_HOST_SHOW_DETAIL,
		payload: { hostingId },
	};
};

export const fetchWebHostingDetailSuccess = (hosting) => {
	return {
		type: WEB_HOST_SHOW_DETAIL_SUCCESSFUL,
		payload: { hosting },
	};
};

export const fetchWebHostingDetailFail = (error) => {
	return {
		type: WEB_HOST_SHOW_DETAIL_FAILED,
		payload: { error },
	};
};

export const fetchWebHostingDropdown = () => {
	return {
		type: WEB_HOST_DROPDOWN,
	};
};

export const fetchWebHostingDropdownSuccess = (dropdown) => {
	return {
		type: WEB_HOST_DROPDOWN_SUCCESSFUL,
		payload: { dropdown },
	};
};

export const fetchWebHostingDropdownFail = (error) => {
	return {
		type: WEB_HOST_DROPDOWN_FAILED,
		payload: { error },
	};
};

export const resetWebHostingShowDetail = () => {
	return {
		type: RESET_WEB_HOST_SHOW_DETAIL_FLAG,
	};
};
