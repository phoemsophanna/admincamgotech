import {
	REFRESH_DEFAULT_PLAN_LIST_FLAG,
	RESET_DEFAULT_PLAN_LIST_FLAG,
	DEFAULT_PLAN_LIST,
	DEFAULT_PLAN_LIST_FAILED,
	DEFAULT_PLAN_LIST_SUCCESSFUL,
} from "./actionTypes";

const initialState = {
	defaultPlanList: [],
	message: null,
	isLoading: false,
	success: false,
	error: false,
};

const DefaultPlanListReducer = (state = initialState, action) => {
	switch (action.type) {
		case DEFAULT_PLAN_LIST:
			state = {
				...state,
				isLoading: true,
			};
			break;
		case DEFAULT_PLAN_LIST_SUCCESSFUL:
			state = {
				...state,
				defaultPlanList: action.payload.defaultPlanList,
				message: "Fetch default plan successfully.",
				isLoading: false,
				success: true,
				error: false,
			};
			break;
		case DEFAULT_PLAN_LIST_FAILED:
			state = {
				...state,
				defaultPlanList: [],
				message: "Fetch default plan failed",
				isLoading: false,
				success: false,
				error: true,
			};
			break;
		case RESET_DEFAULT_PLAN_LIST_FLAG:
			state = {
				...state,
				defaultPlanList: [],
				message: null,
				isLoading: false,
				success: false,
				error: false,
			};
			break;
		case REFRESH_DEFAULT_PLAN_LIST_FLAG:
			state = {
				...state,
				isLoading: true,
				success: false,
				error: false,
				message: null,
				defaultPlanList: [],
			};
			break;
		default:
			state = { ...state };
			break;
	}

	return state;
};

export default DefaultPlanListReducer;
