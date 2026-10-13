import {
	RESET_WHY_CHOOSE_SHOW_DETAIL_FLAG,
	WHY_CHOOSE_SHOW_DETAIL,
	WHY_CHOOSE_SHOW_DETAIL_FAILED,
	WHY_CHOOSE_SHOW_DETAIL_SUCCESSFUL,
} from "./actionTypes";

export const fetchWhyChooseDetail = (whyChooseId) => {
	return {
		type: WHY_CHOOSE_SHOW_DETAIL,
		payload: { whyChooseId },
	};
};

export const fetchWhyChooseDetailSuccess = (whyChoose) => {
	return {
		type: WHY_CHOOSE_SHOW_DETAIL_SUCCESSFUL,
		payload: { whyChoose },
	};
};

export const fetchWhyChooseDetailFail = (error) => {
	return {
		type: WHY_CHOOSE_SHOW_DETAIL_FAILED,
		payload: { error },
	};
};

export const resetWhyChooseShowDetail = () => {
	return {
		type: RESET_WHY_CHOOSE_SHOW_DETAIL_FLAG,
	};
};
