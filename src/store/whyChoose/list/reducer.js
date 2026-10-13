import {
	REFRESH_WHY_CHOOSE_LIST_FLAG,
	RESET_WHY_CHOOSE_LIST_FLAG,
	WHY_CHOOSE_LIST,
	WHY_CHOOSE_LIST_FAILED,
	WHY_CHOOSE_LIST_SUCCESSFUL,
} from "./actionTypes";

const initialState = {
	whyChooses: [],
	message: null,
	isLoading: false,
	success: false,
	error: false,
};

const WhyChooseListReducer = (state = initialState, action) => {
	switch (action.type) {
		case WHY_CHOOSE_LIST:
			state = {
				...state,
				isLoading: true,
			};
			break;
		case WHY_CHOOSE_LIST_SUCCESSFUL:
			state = {
				...state,
				whyChooses: action.payload.whyChooses,
				message: "Fetch whyChoose successfully.",
				isLoading: false,
				success: true,
				error: false,
			};
			break;
		case WHY_CHOOSE_LIST_FAILED:
			state = {
				...state,
				whyChooses: [],
				message: "Fetch whyChoose failed",
				isLoading: false,
				success: false,
				error: true,
			};
			break;
		case RESET_WHY_CHOOSE_LIST_FLAG:
			state = {
				...state,
				whyChooses: [],
				message: null,
				isLoading: false,
				success: false,
				error: false,
			};
			break;
		case REFRESH_WHY_CHOOSE_LIST_FLAG:
			state = {
				...state,
				isLoading: true,
				success: false,
				error: false,
				message: null,
				whyChooses: [],
			};
			break;
		default:
			state = { ...state };
			break;
	}

	return state;
};

export default WhyChooseListReducer;
