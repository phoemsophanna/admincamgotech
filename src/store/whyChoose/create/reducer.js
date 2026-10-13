import {
	SAVE_WHY_CHOOSE,
	SAVE_WHY_CHOOSE_FAILED,
	SAVE_WHY_CHOOSE_SUCCESSFUL,
	DELETE_WHY_CHOOSE,
	DELETE_WHY_CHOOSE_FAILED,
	DELETE_WHY_CHOOSE_SUCCESSFUL,
	RESET_SAVE_WHY_CHOOSE_FLAG,
} from "./actionTypes";

const initialState = {
	message: null,
	isLoading: false,
	success: false,
	error: false,
};

const CreateWhyChooseReducer = (state = initialState, action) => {
	switch (action.type) {
		case SAVE_WHY_CHOOSE:
			state = {
				...state,
				isLoading: true,
			};
			break;
		case SAVE_WHY_CHOOSE_SUCCESSFUL:
			state = {
				...state,
				message: action.payload.message,
				isLoading: false,
				success: true,
				error: false,
			};
			break;
		case SAVE_WHY_CHOOSE_FAILED:
			state = {
				...state,
				message: action.payload.error,
				isLoading: false,
				success: false,
				error: true,
			};
			break;
		case DELETE_WHY_CHOOSE:
			state = {
				...state,
				isLoading: true,
			};
			break;
		case DELETE_WHY_CHOOSE_SUCCESSFUL:
			state = {
				...state,
				message: action.payload.message,
				isLoading: false,
				success: true,
				error: false,
			};
			break;
		case DELETE_WHY_CHOOSE_FAILED:
			state = {
				...state,
				message: action.payload.error,
				isLoading: false,
				success: false,
				error: true,
			};
			break;
		case RESET_SAVE_WHY_CHOOSE_FLAG:
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

export default CreateWhyChooseReducer;
