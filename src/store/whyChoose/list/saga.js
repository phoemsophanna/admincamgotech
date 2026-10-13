import { call, delay, put, takeEvery } from "redux-saga/effects";

// Login Redux States
import { REFRESH_WHY_CHOOSE_LIST_FLAG, WHY_CHOOSE_LIST } from "./actionTypes";
import { fetchWhyChooseListFail, fetchWhyChooseListSuccess } from "./actions";
import { getWhyChooseList } from "../../../helpers/fakebackend_helper";

function* fetchWhyChooseListSaga() {
	try {
		const response = yield call(getWhyChooseList);
		if (response) {
			yield put(fetchWhyChooseListSuccess(response.data));
		} else {
			yield put(fetchWhyChooseListFail(response));
		}
	} catch (error) {
		yield put(fetchWhyChooseListFail(error));
	}
}

function* refreshWhyChooseListSaga() {
	try {
		const response = yield call(getWhyChooseList);
		if (response) {
			yield put(fetchWhyChooseListSuccess(response.data));
		} else {
			yield put(fetchWhyChooseListFail(response));
		}
	} catch (error) {
		yield put(fetchWhyChooseListFail(error));
	}
}

function* WhyChooseListSaga() {
	yield takeEvery(WHY_CHOOSE_LIST, fetchWhyChooseListSaga);
	yield takeEvery(REFRESH_WHY_CHOOSE_LIST_FLAG, refreshWhyChooseListSaga);
}

export default WhyChooseListSaga;
