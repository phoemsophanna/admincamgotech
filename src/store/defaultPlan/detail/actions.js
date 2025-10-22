import {
	RESET_DEFAULT_PLAN_SHOW_DETAIL_FLAG,
	DEFAULT_PLAN_SHOW_DETAIL,
	DEFAULT_PLAN_SHOW_DETAIL_FAILED,
	DEFAULT_PLAN_SHOW_DETAIL_SUCCESSFUL,
} from "./actionTypes";

export const fetchDefaultPlanDetail = (defaultPlanId) => {
	return {
		type: DEFAULT_PLAN_SHOW_DETAIL,
		payload: { defaultPlanId },
	};
};

export const fetchDefaultPlanDetailSuccess = (defaultPlan) => {
	return {
		type: DEFAULT_PLAN_SHOW_DETAIL_SUCCESSFUL,
		payload: { defaultPlan },
	};
};

export const fetchDefaultPlanDetailFail = (error) => {
	return {
		type: DEFAULT_PLAN_SHOW_DETAIL_FAILED,
		payload: { error },
	};
};

export const resetDefaultPlanShowDetail = () => {
	return {
		type: RESET_DEFAULT_PLAN_SHOW_DETAIL_FLAG,
	};
};
