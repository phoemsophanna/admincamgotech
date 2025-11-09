import {
	SAVE_WEB_HOST,
	SAVE_WEB_HOST_FAILED,
	SAVE_WEB_HOST_SUCCESSFUL,
	DELETE_WEB_HOST,
	DELETE_WEB_HOST_FAILED,
	DELETE_WEB_HOST_SUCCESSFUL,
	RESET_SAVE_WEB_HOST_FLAG,
} from "./actionTypes";

const initialState = {
	message: null,
	isLoading: false,
	success: false,
	error: false,
};

const CreateWebHostingReducer = (state = initialState, action) => {
	switch (action.type) {
		case SAVE_WEB_HOST:
			state = {
				...state,
				isLoading: true,
			};
			break;
		case SAVE_WEB_HOST_SUCCESSFUL:
			state = {
				...state,
				message: action.payload.message,
				isLoading: false,
				success: true,
				error: false,
			};
			break;
		case SAVE_WEB_HOST_FAILED:
			state = {
				...state,
				message: action.payload.error,
				isLoading: false,
				success: false,
				error: true,
			};
			break;
		case DELETE_WEB_HOST:
			state = {
				...state,
				isLoading: true,
			};
			break;
		case DELETE_WEB_HOST_SUCCESSFUL:
			state = {
				...state,
				message: action.payload.message,
				isLoading: false,
				success: true,
				error: false,
			};
			break;
		case DELETE_WEB_HOST_FAILED:
			state = {
				...state,
				message: action.payload.error,
				isLoading: false,
				success: false,
				error: true,
			};
			break;
		case RESET_SAVE_WEB_HOST_FLAG:
			state = {
				...state,
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

export default CreateWebHostingReducer;
