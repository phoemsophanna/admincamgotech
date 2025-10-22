import { call, delay, put, takeEvery } from "redux-saga/effects";

// Login Redux States
import { SAVE_PERFORMANCE_TYPE, DELETE_PERFORMANCE_TYPE } from "./actionTypes";
import { deletePerformanceType, postCreatePerformanceType } from "../../../helpers/fakebackend_helper";
import {
	createPerformanceTypeFailed,
	createPerformanceTypeSuccessful,
	deletePerformanceTypeFailed,
	deletePerformanceTypeSuccessful,
} from "./actions";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function* createPerformanceTypeSaga({ payload: { performanceType } }) {
	try {
		const response = yield call(postCreatePerformanceType, performanceType);
		if (response.status === "success") {
			toast.success(response.message, { autoClose: 3000 });
			yield put(createPerformanceTypeSuccessful(response.message));
		} else {
			toast.error(response.message, { autoClose: 3000 });
			yield put(createPerformanceTypeFailed(response.message));
		}
	} catch (error) {
		yield put(createPerformanceTypeFailed(error));
	}
}

function* deletePerformanceTypeSaga({ payload: { performanceTypeId } }) {
	try {
		const response = yield call(deletePerformanceType, performanceTypeId);
		if (response.status === "success") {
			toast.success(response.message, { autoClose: 3000 });
			yield put(deletePerformanceTypeSuccessful(response.message));
		} else {
			toast.error(response.message, { autoClose: 3000 });
			yield put(deletePerformanceTypeFailed(response.message));
		}
	} catch (error) {
		yield put(deletePerformanceTypeFailed(error));
	}
}

function* CreatePerformanceTypeMainSaga() {
	yield takeEvery(SAVE_PERFORMANCE_TYPE, createPerformanceTypeSaga);
	yield takeEvery(DELETE_PERFORMANCE_TYPE, deletePerformanceTypeSaga);
}

export default CreatePerformanceTypeMainSaga;
