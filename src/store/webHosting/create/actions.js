import {
	SAVE_WEB_HOST,
	SAVE_WEB_HOST_FAILED,
	SAVE_WEB_HOST_SUCCESSFUL,
	DELETE_WEB_HOST,
	DELETE_WEB_HOST_FAILED,
	DELETE_WEB_HOST_SUCCESSFUL,
	RESET_SAVE_WEB_HOST_FLAG,
} from "./actionTypes";

export const createWebHosting = (hosting) => {
	return {
		type: SAVE_WEB_HOST,
		payload: { hosting },
	};
};

export const createWebHostingSuccessful = (message) => {
	return {
		type: SAVE_WEB_HOST_SUCCESSFUL,
		payload: { message },
	};
};

export const createWebHostingFailed = (error) => {
	return {
		type: SAVE_WEB_HOST_FAILED,
		payload: { error },
	};
};

export const deleteWebHosting = (hostingId) => {
	return {
		type: DELETE_WEB_HOST,
		payload: { hostingId },
	};
};

export const deleteWebHostingSuccessful = (message) => {
	return {
		type: DELETE_WEB_HOST_SUCCESSFUL,
		payload: { message },
	};
};

export const deleteWebHostingFailed = (error) => {
	return {
		type: DELETE_WEB_HOST_FAILED,
		payload: { error },
	};
};

export const resetCreateWebHostingFlag = () => {
	return {
		type: RESET_SAVE_WEB_HOST_FLAG,
	};
};
