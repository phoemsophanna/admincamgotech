import {
	RESET_DEFAULT_PLAN_SHOW_DETAIL_FLAG,
	DEFAULT_PLAN_SHOW_DETAIL,
	DEFAULT_PLAN_SHOW_DETAIL_FAILED,
	DEFAULT_PLAN_SHOW_DETAIL_SUCCESSFUL,
} from "./actionTypes";

const initialState = {
	defaultPlan: null,
	message: null,
	isLoading: false,
	success: false,
	error: false,
};

const DefaultPlanDetailReducer = (state = initialState, action) => {
	switch (action.type) {
		case DEFAULT_PLAN_SHOW_DETAIL:
			state = {
				...state,
				isLoading: true,
			};
			break;
		case DEFAULT_PLAN_SHOW_DETAIL_SUCCESSFUL:
			state = {
				...state,
				defaultPlan: action.payload.defaultPlan,
				message: "Fetch performance type successfully.",
				isLoading: false,
				success: true,
				error: false,
			};
			break;
		case DEFAULT_PLAN_SHOW_DETAIL_FAILED:
			state = {
				...state,
				defaultPlan: null,
				message: "Fetch performance type failed",
				isLoading: false,
				success: false,
				error: true,
			};
			break;
		case RESET_DEFAULT_PLAN_SHOW_DETAIL_FLAG:
			state = {
				...state,
				defaultPlan: null,
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

export default DefaultPlanDetailReducer;
