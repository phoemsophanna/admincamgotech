import { REFRESH_WEB_HOST_LIST_FLAG, RESET_WEB_HOST_LIST_FLAG, WEB_HOST_LIST, WEB_HOST_LIST_FAILED, WEB_HOST_LIST_SUCCESSFUL } from "./actionTypes";

export const fetchWebHostingList = () => {
	return {
		type: WEB_HOST_LIST,
	};
};

export const fetchWebHostingListSuccess = (hostingList) => {
	return {
		type: WEB_HOST_LIST_SUCCESSFUL,
		payload: { hostingList },
	};
};

export const fetchWebHostingListFail = (error) => {
	return {
		type: WEB_HOST_LIST_FAILED,
		payload: { error },
	};
};

export const resetWebHostingList = () => {
	return {
		type: RESET_WEB_HOST_LIST_FLAG,
	};
};

export const refreshWebHostingList = () => {
	return {
		type: REFRESH_WEB_HOST_LIST_FLAG,
	};
};
