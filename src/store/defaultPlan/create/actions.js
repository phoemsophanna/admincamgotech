import {
	SAVE_DEFAULT_PLAN,
	SAVE_DEFAULT_PLAN_FAILED,
	SAVE_DEFAULT_PLAN_SUCCESSFUL,
	DELETE_DEFAULT_PLAN,
	DELETE_DEFAULT_PLAN_FAILED,
	DELETE_DEFAULT_PLAN_SUCCESSFUL,
	RESET_SAVE_DEFAULT_PLAN_FLAG,
} from "./actionTypes";

export const createDefaultPlan = (defaultPlan) => {
	return {
		type: SAVE_DEFAULT_PLAN,
		payload: { defaultPlan },
	};
};

export const createDefaultPlanSuccessful = (message) => {
	return {
		type: SAVE_DEFAULT_PLAN_SUCCESSFUL,
		payload: { message },
	};
};

export const createDefaultPlanFailed = (error) => {
	return {
		type: SAVE_DEFAULT_PLAN_FAILED,
		payload: { error },
	};
};

export const deleteDefaultPlan = (defaultPlanId) => {
	return {
		type: DELETE_DEFAULT_PLAN,
		payload: { defaultPlanId },
	};
};

export const deleteDefaultPlanSuccessful = (message) => {
	return {
		type: DELETE_DEFAULT_PLAN_SUCCESSFUL,
		payload: { message },
	};
};

export const deleteDefaultPlanFailed = (error) => {
	return {
		type: DELETE_DEFAULT_PLAN_FAILED,
		payload: { error },
	};
};

export const resetCreateDefaultPlanFlag = () => {
	return {
		type: RESET_SAVE_DEFAULT_PLAN_FLAG,
	};
};
