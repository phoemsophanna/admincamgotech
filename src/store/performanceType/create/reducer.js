import {
	SAVE_PERFORMANCE_TYPE,
	SAVE_PERFORMANCE_TYPE_FAILED,
	SAVE_PERFORMANCE_TYPE_SUCCESSFUL,
	DELETE_PERFORMANCE_TYPE,
	DELETE_PERFORMANCE_TYPE_FAILED,
	DELETE_PERFORMANCE_TYPE_SUCCESSFUL,
	RESET_SAVE_PERFORMANCE_TYPE_FLAG,
} from "./actionTypes";

const initialState = {
	message: null,
	isLoading: false,
	success: false,
	error: false,
};

const CreatePerformanceTypeReducer = (state = initialState, action) => {
	switch (action.type) {
		case SAVE_PERFORMANCE_TYPE:
			state = {
				...state,
				isLoading: true,
			};
			break;
		case SAVE_PERFORMANCE_TYPE_SUCCESSFUL:
			state = {
				...state,
				message: action.payload.message,
				isLoading: false,
				success: true,
				error: false,
			};
			break;
		case SAVE_PERFORMANCE_TYPE_FAILED:
			state = {
				...state,
				message: action.payload.error,
				isLoading: false,
				success: false,
				error: true,
			};
			break;
		case DELETE_PERFORMANCE_TYPE:
			state = {
				...state,
				isLoading: true,
			};
			break;
		case DELETE_PERFORMANCE_TYPE_SUCCESSFUL:
			state = {
				...state,
				message: action.payload.message,
				isLoading: false,
				success: true,
				error: false,
			};
			break;
		case DELETE_PERFORMANCE_TYPE_FAILED:
			state = {
				...state,
				message: action.payload.error,
				isLoading: false,
				success: false,
				error: true,
			};
			break;
		case RESET_SAVE_PERFORMANCE_TYPE_FLAG:
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

export default CreatePerformanceTypeReducer;
