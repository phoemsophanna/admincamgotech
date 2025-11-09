import { REFRESH_SKILLSET_LIST_FLAG, RESET_SKILLSET_LIST_FLAG, SKILLSET_LIST, SKILLSET_LIST_FAILED, SKILLSET_LIST_SUCCESSFUL } from "./actionTypes";

export const fetchSkillsetList = () => {
	return {
		type: SKILLSET_LIST,
	};
};

export const fetchSkillsetListSuccess = (skillsets) => {
	return {
		type: SKILLSET_LIST_SUCCESSFUL,
		payload: { skillsets },
	};
};

export const fetchSkillsetListFail = (error) => {
	return {
		type: SKILLSET_LIST_FAILED,
		payload: { error },
	};
};

export const resetSkillsetList = () => {
	return {
		type: RESET_SKILLSET_LIST_FLAG,
	};
};

export const refreshSkillsetList = () => {
	return {
		type: REFRESH_SKILLSET_LIST_FLAG,
	};
};
