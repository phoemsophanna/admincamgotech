import { call, delay, put, takeEvery } from "redux-saga/effects";

// Login Redux States
import { SKILLSET_SHOW_DETAIL } from "./actionTypes";
import { fetchSkillsetDetailFail, fetchSkillsetDetailSuccess } from "./actions";
import { getSkillsetShowDetail } from "../../../helpers/fakebackend_helper";

function* fetchSkillsetDetailSaga({ payload: { skillsetId } }) {
	try {
		const response = yield call(getSkillsetShowDetail, { id: skillsetId });
		if (response.status === "success") {
			yield put(fetchSkillsetDetailSuccess(response.model));
		} else {
			yield put(fetchSkillsetDetailFail(response));
		}
	} catch (error) {
		yield put(fetchSkillsetDetailFail(error));
	}
}

function* SkillsetDetailSaga() {
	yield takeEvery(SKILLSET_SHOW_DETAIL, fetchSkillsetDetailSaga);
}

export default SkillsetDetailSaga;
