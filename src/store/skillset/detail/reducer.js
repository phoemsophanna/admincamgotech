import { RESET_SKILLSET_SHOW_DETAIL_FLAG, SKILLSET_SHOW_DETAIL, SKILLSET_SHOW_DETAIL_FAILED, SKILLSET_SHOW_DETAIL_SUCCESSFUL } from "./actionTypes";

const initialState = {
	skillset: null,
	message: null,
	isLoading: false,
	success: false,
	error: false,
};

const SkillsetDetailReducer = (state = initialState, action) => {
	switch (action.type) {
		case SKILLSET_SHOW_DETAIL:
			state = {
				...state,
				isLoading: true,
			};
			break;
		case SKILLSET_SHOW_DETAIL_SUCCESSFUL:
			state = {
				...state,
				skillset: action.payload.skillset,
				message: "Fetch skillset successfully.",
				isLoading: false,
				success: true,
				error: false,
			};
			break;
		case SKILLSET_SHOW_DETAIL_FAILED:
			state = {
				...state,
				skillset: null,
				message: "Fetch skillset failed",
				isLoading: false,
				success: false,
				error: true,
			};
			break;
		case RESET_SKILLSET_SHOW_DETAIL_FLAG:
			state = {
				...state,
				skillset: null,
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

export default SkillsetDetailReducer;
