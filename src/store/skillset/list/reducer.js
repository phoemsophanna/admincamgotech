import { REFRESH_SKILLSET_LIST_FLAG, RESET_SKILLSET_LIST_FLAG, SKILLSET_LIST, SKILLSET_LIST_FAILED, SKILLSET_LIST_SUCCESSFUL } from "./actionTypes";

const initialState = {
	skillsets: [],
	message: null,
	isLoading: false,
	success: false,
	error: false,
};

const SkillsetListReducer = (state = initialState, action) => {
	switch (action.type) {
		case SKILLSET_LIST:
			state = {
				...state,
				isLoading: true,
			};
			break;
		case SKILLSET_LIST_SUCCESSFUL:
			state = {
				...state,
				skillsets: action.payload.skillsets,
				message: "Fetch skillset successfully.",
				isLoading: false,
				success: true,
				error: false,
			};
			break;
		case SKILLSET_LIST_FAILED:
			state = {
				...state,
				skillsets: [],
				message: "Fetch skillset failed",
				isLoading: false,
				success: false,
				error: true,
			};
			break;
		case RESET_SKILLSET_LIST_FLAG:
			state = {
				...state,
				skillsets: [],
				message: null,
				isLoading: false,
				success: false,
				error: false,
			};
			break;
		case REFRESH_SKILLSET_LIST_FLAG:
			state = {
				...state,
				isLoading: true,
				success: false,
				error: false,
				message: null,
				skillsets: [],
			};
			break;
		default:
			state = { ...state };
			break;
	}

	return state;
};

export default SkillsetListReducer;
