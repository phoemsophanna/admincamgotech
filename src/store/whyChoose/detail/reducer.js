import {
	RESET_WHY_CHOOSE_SHOW_DETAIL_FLAG,
	WHY_CHOOSE_SHOW_DETAIL,
	WHY_CHOOSE_SHOW_DETAIL_FAILED,
	WHY_CHOOSE_SHOW_DETAIL_SUCCESSFUL,
} from "./actionTypes";

const initialState = {
	whyChoose: null,
	message: null,
	isLoading: false,
	success: false,
	error: false,
};

const WhyChooseDetailReducer = (state = initialState, action) => {
	switch (action.type) {
		case WHY_CHOOSE_SHOW_DETAIL:
			state = {
				...state,
				isLoading: true,
			};
			break;
		case WHY_CHOOSE_SHOW_DETAIL_SUCCESSFUL:
			state = {
				...state,
				whyChoose: action.payload.whyChoose,
				message: "Fetch whyChoose successfully.",
				isLoading: false,
				success: true,
				error: false,
			};
			break;
		case WHY_CHOOSE_SHOW_DETAIL_FAILED:
			state = {
				...state,
				whyChoose: null,
				message: "Fetch why choose failed",
				isLoading: false,
				success: false,
				error: true,
			};
			break;
		case RESET_WHY_CHOOSE_SHOW_DETAIL_FLAG:
			state = {
				...state,
				whyChoose: null,
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

export default WhyChooseDetailReducer;
