import { call, delay, put, takeEvery } from "redux-saga/effects";

// Login Redux States
import { CREATE_SKILLSET, DELETE_SKILLSET } from "./actionTypes";
import { deleteSkillset, postCreateSkillset } from "../../../helpers/fakebackend_helper";
import { createSkillsetFailed, createSkillsetSuccessful, deleteSkillsetFailed, deleteSkillsetSuccessful } from "./actions";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function* createSkillsetSaga({ payload: { skillset } }) {
	try {
		const response = yield call(postCreateSkillset, skillset);
		if (response.status === "success") {
			toast.success(response.message, { autoClose: 3000 });
			yield put(createSkillsetSuccessful(response.message));
		} else {
			toast.error(response.message, { autoClose: 3000 });
			yield put(createSkillsetFailed(response.message));
		}
	} catch (error) {
		yield put(createSkillsetFailed(error));
	}
}

function* deleteSkillsetSaga({ payload: { skillsetId } }) {
	try {
		const response = yield call(deleteSkillset, skillsetId);
		if (response.status === "success") {
			toast.success(response.message, { autoClose: 3000 });
			yield put(deleteSkillsetSuccessful(response.message));
		} else {
			toast.error(response.message, { autoClose: 3000 });
			yield put(deleteSkillsetFailed(response.message));
		}
	} catch (error) {
		yield put(deleteSkillsetFailed(error));
	}
}

function* CreateSkillsetMainSaga() {
	yield takeEvery(CREATE_SKILLSET, createSkillsetSaga);
	yield takeEvery(DELETE_SKILLSET, deleteSkillsetSaga);
}

export default CreateSkillsetMainSaga;
