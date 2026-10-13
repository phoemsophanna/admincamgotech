import {
	REFRESH_WHY_CHOOSE_LIST_FLAG,
	RESET_WHY_CHOOSE_LIST_FLAG,
	WHY_CHOOSE_LIST,
	WHY_CHOOSE_LIST_FAILED,
	WHY_CHOOSE_LIST_SUCCESSFUL,
} from "./actionTypes";

export const fetchWhyChooseList = () => {
	return {
		type: WHY_CHOOSE_LIST,
	};
};

export const fetchWhyChooseListSuccess = (whyChooses) => {
	return {
		type: WHY_CHOOSE_LIST_SUCCESSFUL,
		payload: { whyChooses },
	};
};

export const fetchWhyChooseListFail = (error) => {
	return {
		type: WHY_CHOOSE_LIST_FAILED,
		payload: { error },
	};
};

export const resetWhyChooseList = () => {
	return {
		type: RESET_WHY_CHOOSE_LIST_FLAG,
	};
};

export const refreshWhyChooseList = () => {
	return {
		type: REFRESH_WHY_CHOOSE_LIST_FLAG,
	};
};
