import { call, delay, put, takeEvery } from "redux-saga/effects";

// Login Redux States
import { DEFAULT_PLAN_SHOW_DETAIL } from "./actionTypes";
import { fetchDefaultPlanDetailFail, fetchDefaultPlanDetailSuccess } from "./actions";
import { getDefaultPlanShowDetail } from "../../../helpers/fakebackend_helper";

function* fetchDefaultPlanDetailSaga({ payload: { defaultPlanId } }) {
	try {
		const response = yield call(getDefaultPlanShowDetail, { id: defaultPlanId });
		if (response.status === "success") {
			yield put(fetchDefaultPlanDetailSuccess(response.model));
		} else {
			yield put(fetchDefaultPlanDetailFail(response));
		}
	} catch (error) {
		yield put(fetchDefaultPlanDetailFail(error));
	}
}

function* DefaultPlanDetailSaga() {
	yield takeEvery(DEFAULT_PLAN_SHOW_DETAIL, fetchDefaultPlanDetailSaga);
}

export default DefaultPlanDetailSaga;
