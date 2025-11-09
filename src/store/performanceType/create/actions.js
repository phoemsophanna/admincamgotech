import {
	SAVE_PERFORMANCE_TYPE,
	SAVE_PERFORMANCE_TYPE_FAILED,
	SAVE_PERFORMANCE_TYPE_SUCCESSFUL,
	DELETE_PERFORMANCE_TYPE,
	DELETE_PERFORMANCE_TYPE_FAILED,
	DELETE_PERFORMANCE_TYPE_SUCCESSFUL,
	RESET_SAVE_PERFORMANCE_TYPE_FLAG,
} from "./actionTypes";

export const createPerformanceType = (performanceType) => {
	return {
		type: SAVE_PERFORMANCE_TYPE,
		payload: { performanceType },
	};
};

export const createPerformanceTypeSuccessful = (message) => {
	return {
		type: SAVE_PERFORMANCE_TYPE_SUCCESSFUL,
		payload: { message },
	};
};

export const createPerformanceTypeFailed = (error) => {
	return {
		type: SAVE_PERFORMANCE_TYPE_FAILED,
		payload: { error },
	};
};

export const deletePerformanceType = (performanceTypeId) => {
	return {
		type: DELETE_PERFORMANCE_TYPE,
		payload: { performanceTypeId },
	};
};

export const deletePerformanceTypeSuccessful = (message) => {
	return {
		type: DELETE_PERFORMANCE_TYPE_SUCCESSFUL,
		payload: { message },
	};
};

export const deletePerformanceTypeFailed = (error) => {
	return {
		type: DELETE_PERFORMANCE_TYPE_FAILED,
		payload: { error },
	};
};

export const resetCreatePerformanceTypeFlag = () => {
	return {
		type: RESET_SAVE_PERFORMANCE_TYPE_FLAG,
	};
};
