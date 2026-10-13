import {
	SAVE_WHY_CHOOSE,
	SAVE_WHY_CHOOSE_FAILED,
	SAVE_WHY_CHOOSE_SUCCESSFUL,
	DELETE_WHY_CHOOSE,
	DELETE_WHY_CHOOSE_FAILED,
	DELETE_WHY_CHOOSE_SUCCESSFUL,
	RESET_SAVE_WHY_CHOOSE_FLAG,
} from "./actionTypes";

export const createWhyChoose = (whyChoose, history) => {
	return {
		type: SAVE_WHY_CHOOSE,
		payload: { whyChoose, history },
	};
};

export const createWhyChooseSuccessful = (message) => {
	return {
		type: SAVE_WHY_CHOOSE_SUCCESSFUL,
		payload: { message },
	};
};

export const createWhyChooseFailed = (error) => {
	return {
		type: SAVE_WHY_CHOOSE_FAILED,
		payload: { error },
	};
};

export const deleteWhyChoose = (whyChooseId) => {
	return {
		type: DELETE_WHY_CHOOSE,
		payload: { whyChooseId },
	};
};

export const deleteWhyChooseSuccessful = (message) => {
	return {
		type: DELETE_WHY_CHOOSE_SUCCESSFUL,
		payload: { message },
	};
};

export const deleteWhyChooseFailed = (error) => {
	return {
		type: DELETE_WHY_CHOOSE_FAILED,
		payload: { error },
	};
};

export const resetCreateWhyChooseFlag = () => {
	return {
		type: RESET_SAVE_WHY_CHOOSE_FLAG,
	};
};
