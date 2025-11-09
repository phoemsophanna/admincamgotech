import {
	RESET_PERFORMANCE_TYPE_SHOW_DETAIL_FLAG,
	PERFORMANCE_TYPE_SHOW_DETAIL,
	PERFORMANCE_TYPE_SHOW_DETAIL_FAILED,
	PERFORMANCE_TYPE_SHOW_DETAIL_SUCCESSFUL,
} from "./actionTypes";

const initialState = {
	performanceType: null,
	message: null,
	isLoading: false,
	success: false,
	error: false,
};

const PerformanceTypeDetailReducer = (state = initialState, action) => {
	switch (action.type) {
		case PERFORMANCE_TYPE_SHOW_DETAIL:
			state = {
				...state,
				isLoading: true,
			};
			break;
		case PERFORMANCE_TYPE_SHOW_DETAIL_SUCCESSFUL:
			state = {
				...state,
				performanceType: action.payload.performanceType,
				message: "Fetch performance type successfully.",
				isLoading: false,
				success: true,
				error: false,
			};
			break;
		case PERFORMANCE_TYPE_SHOW_DETAIL_FAILED:
			state = {
				...state,
				performanceType: null,
				message: "Fetch performance type failed",
				isLoading: false,
				success: false,
				error: true,
			};
			break;
		case RESET_PERFORMANCE_TYPE_SHOW_DETAIL_FLAG:
			state = {
				...state,
				performanceType: null,
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

export default PerformanceTypeDetailReducer;
