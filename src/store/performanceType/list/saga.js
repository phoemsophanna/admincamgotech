import { call, delay, put, takeEvery } from "redux-saga/effects";

// Login Redux States
import { REFRESH_PERFORMANCE_TYPE_LIST_FLAG, PERFORMANCE_TYPE_LIST } from "./actionTypes";
import { fetchPerformanceTypeListFail, fetchPerformanceTypeListSuccess } from "./actions";
import { getPerformanceTypeList } from "../../../helpers/fakebackend_helper";

function* fetchPerformanceTypeListSaga() {
	try {
		const response = yield call(getPerformanceTypeList);
		if (response) {
			yield put(fetchPerformanceTypeListSuccess(response.data));
		} else {
			yield put(fetchPerformanceTypeListFail(response));
		}
	} catch (error) {
		yield put(fetchPerformanceTypeListFail(error));
	}
}

function* refreshPerformanceTypeListSaga() {
	try {
		const response = yield call(getPerformanceTypeList);
		if (response) {
			yield put(fetchPerformanceTypeListSuccess(response.data));
		} else {
			yield put(fetchPerformanceTypeListFail(response));
		}
	} catch (error) {
		yield put(fetchPerformanceTypeListFail(error));
	}
}

function* PerformanceTypeListSaga() {
	yield takeEvery(PERFORMANCE_TYPE_LIST, fetchPerformanceTypeListSaga);
	yield takeEvery(REFRESH_PERFORMANCE_TYPE_LIST_FLAG, refreshPerformanceTypeListSaga);
}

export default PerformanceTypeListSaga;
