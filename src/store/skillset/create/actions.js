import {
	CREATE_SKILLSET,
	CREATE_SKILLSET_FAILED,
	CREATE_SKILLSET_SUCCESSFUL,
	DELETE_SKILLSET,
	DELETE_SKILLSET_FAILED,
	DELETE_SKILLSET_SUCCESSFUL,
	RESET_CREATE_SKILLSET_FLAG,
} from "./actionTypes";

export const createSkillset = (skillset) => {
	return {
		type: CREATE_SKILLSET,
		payload: { skillset },
	};
};

export const createSkillsetSuccessful = (message) => {
	return {
		type: CREATE_SKILLSET_SUCCESSFUL,
		payload: { message },
	};
};

export const createSkillsetFailed = (error) => {
	return {
		type: CREATE_SKILLSET_FAILED,
		payload: { error },
	};
};

export const deleteSkillset = (skillsetId) => {
	return {
		type: DELETE_SKILLSET,
		payload: { skillsetId },
	};
};

export const deleteSkillsetSuccessful = (message) => {
	return {
		type: DELETE_SKILLSET_SUCCESSFUL,
		payload: { message },
	};
};

export const deleteSkillsetFailed = (error) => {
	return {
		type: DELETE_SKILLSET_FAILED,
		payload: { error },
	};
};

export const resetCreateSkillsetFlag = () => {
	return {
		type: RESET_CREATE_SKILLSET_FLAG,
	};
};
