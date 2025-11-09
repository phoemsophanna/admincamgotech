import {
	RESET_WEB_HOST_SHOW_DETAIL_FLAG,
	WEB_HOST_DROPDOWN,
	WEB_HOST_DROPDOWN_FAILED,
	WEB_HOST_DROPDOWN_SUCCESSFUL,
	WEB_HOST_SHOW_DETAIL,
	WEB_HOST_SHOW_DETAIL_FAILED,
	WEB_HOST_SHOW_DETAIL_SUCCESSFUL,
} from "./actionTypes";

const initialState = {
	hosting: null,
	dropdown: null,
	message: null,
	isLoading: false,
	success: false,
	error: false,
};

const WebHostingDetailReducer = (state = initialState, action) => {
	switch (action.type) {
		case WEB_HOST_SHOW_DETAIL:
			state = {
				...state,
				isLoading: true,
			};
			break;
		case WEB_HOST_SHOW_DETAIL_SUCCESSFUL:
			state = {
				...state,
				hosting: action.payload.hosting,
				message: "Fetch hosting successfully.",
				isLoading: false,
				success: true,
				error: false,
			};
			break;
		case WEB_HOST_SHOW_DETAIL_FAILED:
			state = {
				...state,
				hosting: null,
				message: "Fetch hosting failed",
				isLoading: false,
				success: false,
				error: true,
			};
			break;
		case WEB_HOST_DROPDOWN:
			state = {
				...state,
				isLoading: true,
			};
			break;
		case WEB_HOST_DROPDOWN_SUCCESSFUL:
			state = {
				...state,
				dropdown: action.payload.dropdown,
				message: "Fetch dropdown successfully.",
				isLoading: false,
				success: true,
				error: false,
			};
			break;
		case WEB_HOST_DROPDOWN_FAILED:
			state = {
				...state,
				dropdown: null,
				message: "Fetch dropdown failed",
				isLoading: false,
				success: false,
				error: true,
			};
			break;
		case RESET_WEB_HOST_SHOW_DETAIL_FLAG:
			state = {
				...state,
				hosting: null,
				message: null,
				isLoading: false,
				success: false,
				error: false,
			};
			break;
		default:
			state = { ...state };
			break;
	}

	return state;
};

export default WebHostingDetailReducer;
