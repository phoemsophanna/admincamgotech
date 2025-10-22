import {
	REFRESH_PERFORMANCE_TYPE_LIST_FLAG,
	RESET_PERFORMANCE_TYPE_LIST_FLAG,
	PERFORMANCE_TYPE_LIST,
	PERFORMANCE_TYPE_LIST_FAILED,
	PERFORMANCE_TYPE_LIST_SUCCESSFUL,
} from "./actionTypes";

export const fetchPerformanceTypeList = () => {
	return {
		type: PERFORMANCE_TYPE_LIST,
	};
};

export const fetchPerformanceTypeListSuccess = (performanceTypeList) => {
	return {
		type: PERFORMANCE_TYPE_LIST_SUCCESSFUL,
		payload: { performanceTypeList },
	};
};

export const fetchPerformanceTypeListFail = (error) => {
	return {
		type: PERFORMANCE_TYPE_LIST_FAILED,
		payload: { error },
	};
};

export const resetPerformanceTypeList = () => {
	return {
		type: RESET_PERFORMANCE_TYPE_LIST_FLAG,
	};
};

export const refreshPerformanceTypeList = () => {
	return {
		type: REFRESH_PERFORMANCE_TYPE_LIST_FLAG,
	};
};
