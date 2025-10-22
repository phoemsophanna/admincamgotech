import {
	REFRESH_DEFAULT_PLAN_LIST_FLAG,
	RESET_DEFAULT_PLAN_LIST_FLAG,
	DEFAULT_PLAN_LIST,
	DEFAULT_PLAN_LIST_FAILED,
	DEFAULT_PLAN_LIST_SUCCESSFUL,
} from "./actionTypes";

export const fetchDefaultPlanList = () => {
	return {
		type: DEFAULT_PLAN_LIST,
	};
};

export const fetchDefaultPlanListSuccess = (defaultPlanList) => {
	return {
		type: DEFAULT_PLAN_LIST_SUCCESSFUL,
		payload: { defaultPlanList },
	};
};

export const fetchDefaultPlanListFail = (error) => {
	return {
		type: DEFAULT_PLAN_LIST_FAILED,
		payload: { error },
	};
};

export const resetDefaultPlanList = () => {
	return {
		type: RESET_DEFAULT_PLAN_LIST_FLAG,
	};
};

export const refreshDefaultPlanList = () => {
	return {
		type: REFRESH_DEFAULT_PLAN_LIST_FLAG,
	};
};
