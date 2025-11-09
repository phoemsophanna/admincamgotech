import {
	RESET_PERFORMANCE_TYPE_SHOW_DETAIL_FLAG,
	PERFORMANCE_TYPE_SHOW_DETAIL,
	PERFORMANCE_TYPE_SHOW_DETAIL_FAILED,
	PERFORMANCE_TYPE_SHOW_DETAIL_SUCCESSFUL,
} from "./actionTypes";

export const fetchPerformanceTypeDetail = (performanceTypeId) => {
	return {
		type: PERFORMANCE_TYPE_SHOW_DETAIL,
		payload: { performanceTypeId },
	};
};

export const fetchPerformanceTypeDetailSuccess = (performanceType) => {
	return {
		type: PERFORMANCE_TYPE_SHOW_DETAIL_SUCCESSFUL,
		payload: { performanceType },
	};
};

export const fetchPerformanceTypeDetailFail = (error) => {
	return {
		type: PERFORMANCE_TYPE_SHOW_DETAIL_FAILED,
		payload: { error },
	};
};

export const resetPerformanceTypeShowDetail = () => {
	return {
		type: RESET_PERFORMANCE_TYPE_SHOW_DETAIL_FLAG,
	};
};
