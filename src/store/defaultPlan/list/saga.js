import { call, delay, put, takeEvery } from "redux-saga/effects";

// Login Redux States
import { REFRESH_DEFAULT_PLAN_LIST_FLAG, DEFAULT_PLAN_LIST } from "./actionTypes";
import { fetchDefaultPlanListFail, fetchDefaultPlanListSuccess } from "./actions";
import { getDefaultPlanList } from "../../../helpers/fakebackend_helper";

function* fetchDefaultPlanListSaga() {
	try {
		const response = yield call(getDefaultPlanList);
		if (response) {
			yield put(fetchDefaultPlanListSuccess(response.data));
		} else {
			yield put(fetchDefaultPlanListFail(response));
		}
	} catch (error) {
		yield put(fetchDefaultPlanListFail(error));
	}
}

function* refreshDefaultPlanListSaga() {
	try {
		const response = yield call(getDefaultPlanList);
		if (response) {
			yield put(fetchDefaultPlanListSuccess(response.data));
		} else {
			yield put(fetchDefaultPlanListFail(response));
		}
	} catch (error) {
		yield put(fetchDefaultPlanListFail(error));
	}
}

function* DefaultPlanListSaga() {
	yield takeEvery(DEFAULT_PLAN_LIST, fetchDefaultPlanListSaga);
	yield takeEvery(REFRESH_DEFAULT_PLAN_LIST_FLAG, refreshDefaultPlanListSaga);
}

export default DefaultPlanListSaga;
