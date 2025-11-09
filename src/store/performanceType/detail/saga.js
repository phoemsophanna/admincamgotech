import { call, delay, put, takeEvery } from "redux-saga/effects";

// Login Redux States
import { PERFORMANCE_TYPE_SHOW_DETAIL } from "./actionTypes";
import { fetchPerformanceTypeDetailFail, fetchPerformanceTypeDetailSuccess } from "./actions";
import { getPerformanceTypeShowDetail } from "../../../helpers/fakebackend_helper";

function* fetchPerformanceTypeDetailSaga({ payload: { performanceTypeId } }) {
	try {
		const response = yield call(getPerformanceTypeShowDetail, { id: performanceTypeId });
		if (response.status === "success") {
			yield put(fetchPerformanceTypeDetailSuccess(response.model));
		} else {
			yield put(fetchPerformanceTypeDetailFail(response));
		}
	} catch (error) {
		yield put(fetchPerformanceTypeDetailFail(error));
	}
}

function* PerformanceTypeDetailSaga() {
	yield takeEvery(PERFORMANCE_TYPE_SHOW_DETAIL, fetchPerformanceTypeDetailSaga);
}

export default PerformanceTypeDetailSaga;
