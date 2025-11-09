import {
	REFRESH_PERFORMANCE_TYPE_LIST_FLAG,
	RESET_PERFORMANCE_TYPE_LIST_FLAG,
	PERFORMANCE_TYPE_LIST,
	PERFORMANCE_TYPE_LIST_FAILED,
	PERFORMANCE_TYPE_LIST_SUCCESSFUL,
} from "./actionTypes";

const initialState = {
	performanceTypeList: [],
	message: null,
	isLoading: false,
	success: false,
	error: false,
};

const PerformanceTypeListReducer = (state = initialState, action) => {
	switch (action.type) {
		case PERFORMANCE_TYPE_LIST:
			state = {
				...state,
				isLoading: true,
			};
			break;
		case PERFORMANCE_TYPE_LIST_SUCCESSFUL:
			state = {
				...state,
				performanceTypeList: action.payload.performanceTypeList,
				message: "Fetch default plan successfully.",
				isLoading: false,
				success: true,
				error: false,
			};
			break;
		case PERFORMANCE_TYPE_LIST_FAILED:
			state = {
				...state,
				performanceTypeList: [],
				message: "Fetch default plan failed",
				isLoading: false,
				success: false,
				error: true,
			};
			break;
		case RESET_PERFORMANCE_TYPE_LIST_FLAG:
			state = {
				...state,
				performanceTypeList: [],
				message: null,
				isLoading: false,
				success: false,
				error: false,
			};
			break;
		case REFRESH_PERFORMANCE_TYPE_LIST_FLAG:
			state = {
				...state,
				isLoading: true,
				success: false,
				error: false,
				message: null,
				performanceTypeList: [],
			};
			break;
		default:
			state = { ...state };
			break;
	}

	return state;
};

export default PerformanceTypeListReducer;
