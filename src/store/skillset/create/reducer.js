import {
	CREATE_SKILLSET,
	CREATE_SKILLSET_FAILED,
	CREATE_SKILLSET_SUCCESSFUL,
	DELETE_SKILLSET,
	DELETE_SKILLSET_FAILED,
	DELETE_SKILLSET_SUCCESSFUL,
	RESET_CREATE_SKILLSET_FLAG,
} from "./actionTypes";

const initialState = {
	message: null,
	isLoading: false,
	success: false,
	error: false,
};

const CreateSkillsetReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_SKILLSET:
			state = {
				...state,
				isLoading: true,
			};
			break;
		case CREATE_SKILLSET_SUCCESSFUL:
			state = {
				...state,
				message: action.payload.message,
				isLoading: false,
				success: true,
				error: false,
			};
			break;
		case CREATE_SKILLSET_FAILED:
			state = {
				...state,
				message: action.payload.error,
				isLoading: false,
				success: false,
				error: true,
			};
			break;
		case DELETE_SKILLSET:
			state = {
				...state,
				isLoading: true,
			};
			break;
		case DELETE_SKILLSET_SUCCESSFUL:
			state = {
				...state,
				message: action.payload.message,
				isLoading: false,
				success: true,
				error: false,
			};
			break;
		case DELETE_SKILLSET_FAILED:
			state = {
				...state,
				message: action.payload.error,
				isLoading: false,
				success: false,
				error: true,
			};
			break;
		case RESET_CREATE_SKILLSET_FLAG:
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

export default CreateSkillsetReducer;
