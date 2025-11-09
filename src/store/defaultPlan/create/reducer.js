import {
	SAVE_DEFAULT_PLAN,
	SAVE_DEFAULT_PLAN_FAILED,
	SAVE_DEFAULT_PLAN_SUCCESSFUL,
	DELETE_DEFAULT_PLAN,
	DELETE_DEFAULT_PLAN_FAILED,
	DELETE_DEFAULT_PLAN_SUCCESSFUL,
	RESET_SAVE_DEFAULT_PLAN_FLAG,
} from "./actionTypes";

const initialState = {
	message: null,
	isLoading: false,
	success: false,
	error: false,
};

const CreateDefaultPlanReducer = (state = initialState, action) => {
	switch (action.type) {
		case SAVE_DEFAULT_PLAN:
			state = {
				...state,
				isLoading: true,
			};
			break;
		case SAVE_DEFAULT_PLAN_SUCCESSFUL:
			state = {
				...state,
				message: action.payload.message,
				isLoading: false,
				success: true,
				error: false,
			};
			break;
		case SAVE_DEFAULT_PLAN_FAILED:
			state = {
				...state,
				message: action.payload.error,
				isLoading: false,
				success: false,
				error: true,
			};
			break;
		case DELETE_DEFAULT_PLAN:
			state = {
				...state,
				isLoading: true,
			};
			break;
		case DELETE_DEFAULT_PLAN_SUCCESSFUL:
			state = {
				...state,
				message: action.payload.message,
				isLoading: false,
				success: true,
				error: false,
			};
			break;
		case DELETE_DEFAULT_PLAN_FAILED:
			state = {
				...state,
				message: action.payload.error,
				isLoading: false,
				success: false,
				error: true,
			};
			break;
		case RESET_SAVE_DEFAULT_PLAN_FLAG:
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

export default CreateDefaultPlanReducer;
