import { REFRESH_WEB_HOST_LIST_FLAG, RESET_WEB_HOST_LIST_FLAG, WEB_HOST_LIST, WEB_HOST_LIST_FAILED, WEB_HOST_LIST_SUCCESSFUL } from "./actionTypes";

const initialState = {
	hostingList: [],
	message: null,
	isLoading: false,
	success: false,
	error: false,
};

const WebHostingListReducer = (state = initialState, action) => {
	switch (action.type) {
		case WEB_HOST_LIST:
			state = {
				...state,
				isLoading: true,
			};
			break;
		case WEB_HOST_LIST_SUCCESSFUL:
			state = {
				...state,
				hostingList: action.payload.hostingList,
				message: "Fetch hosting successfully.",
				isLoading: false,
				success: true,
				error: false,
			};
			break;
		case WEB_HOST_LIST_FAILED:
			state = {
				...state,
				hostingList: [],
				message: "Fetch hosting failed",
				isLoading: false,
				success: false,
				error: true,
			};
			break;
		case RESET_WEB_HOST_LIST_FLAG:
			state = {
				...state,
				hostingList: [],
				message: null,
				isLoading: false,
				success: false,
				error: false,
			};
			break;
		case REFRESH_WEB_HOST_LIST_FLAG:
			state = {
				...state,
				isLoading: true,
				success: false,
				error: false,
				message: null,
				hostingList: [],
			};
			break;
		default:
			state = { ...state };
			break;
	}

	return state;
};

export default WebHostingListReducer;
