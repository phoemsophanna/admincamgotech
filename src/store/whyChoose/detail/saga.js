import { call, delay, put, takeEvery } from "redux-saga/effects";

// Login Redux States
import { WHY_CHOOSE_SHOW_DETAIL } from "./actionTypes";
import { fetchWhyChooseDetailFail, fetchWhyChooseDetailSuccess } from "./actions";
import { getWhyChooseShowDetail } from "../../../helpers/fakebackend_helper";

function* fetchWhyChooseDetailSaga({ payload: { whyChooseId } }) {
	try {
		const response = yield call(getWhyChooseShowDetail, { id: whyChooseId });
		if (response.status === "success") {
			yield put(fetchWhyChooseDetailSuccess(response.model));
		} else {
			yield put(fetchWhyChooseDetailFail(response));
		}
	} catch (error) {
		yield put(fetchWhyChooseDetailFail(error));
	}
}

function* WhyChooseDetailSaga() {
	yield takeEvery(WHY_CHOOSE_SHOW_DETAIL, fetchWhyChooseDetailSaga);
}

export default WhyChooseDetailSaga;
