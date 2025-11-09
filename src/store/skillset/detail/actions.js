import { RESET_SKILLSET_SHOW_DETAIL_FLAG, SKILLSET_SHOW_DETAIL, SKILLSET_SHOW_DETAIL_FAILED, SKILLSET_SHOW_DETAIL_SUCCESSFUL } from "./actionTypes";

export const fetchSkillsetDetail = (skillsetId) => {
	return {
		type: SKILLSET_SHOW_DETAIL,
		payload: { skillsetId },
	};
};

export const fetchSkillsetDetailSuccess = (skillset) => {
	return {
		type: SKILLSET_SHOW_DETAIL_SUCCESSFUL,
		payload: { skillset },
	};
};

export const fetchSkillsetDetailFail = (error) => {
	return {
		type: SKILLSET_SHOW_DETAIL_FAILED,
		payload: { error },
	};
};

export const resetSkillsetShowDetail = () => {
	return {
		type: RESET_SKILLSET_SHOW_DETAIL_FLAG,
	};
};
