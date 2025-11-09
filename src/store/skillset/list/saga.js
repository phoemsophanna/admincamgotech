import { call, delay, put, takeEvery } from "redux-saga/effects";

// Login Redux States
import { REFRESH_SKILLSET_LIST_FLAG, SKILLSET_LIST } from "./actionTypes";
import { fetchSkillsetListFail, fetchSkillsetListSuccess } from "./actions";
import { getSkillsetList } from "../../../helpers/fakebackend_helper";

function* fetchSkillsetListSaga() {
	try {
		const response = yield call(getSkillsetList);
		if (response) {
			yield put(fetchSkillsetListSuccess(response.data));
		} else {
			yield put(fetchSkillsetListFail(response));
		}
	} catch (error) {
		yield put(fetchSkillsetListFail(error));
	}
}

function* refreshSkillsetListSaga() {
	try {
		const response = yield call(getSkillsetList);
		if (response) {
			yield put(fetchSkillsetListSuccess(response.data));
		} else {
			yield put(fetchSkillsetListFail(response));
		}
	} catch (error) {
		yield put(fetchSkillsetListFail(error));
	}
}

function* SkillsetListSaga() {
	yield takeEvery(SKILLSET_LIST, fetchSkillsetListSaga);
	yield takeEvery(REFRESH_SKILLSET_LIST_FLAG, refreshSkillsetListSaga);
}

export default SkillsetListSaga;
