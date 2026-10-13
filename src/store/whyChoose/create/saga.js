import { call, delay, put, takeEvery } from "redux-saga/effects";

// Login Redux States
import { SAVE_WHY_CHOOSE, DELETE_WHY_CHOOSE } from "./actionTypes";
import { deleteWhyChoose, postCreateWhyChoose } from "../../../helpers/fakebackend_helper";
import { createWhyChooseFailed, createWhyChooseSuccessful, deleteWhyChooseFailed, deleteWhyChooseSuccessful } from "./actions";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function* createWhyChooseSaga({ payload: { whyChoose, history } }) {
	try {
		const response = yield call(postCreateWhyChoose, whyChoose);
		if (response.status === "success") {
			toast.success(response.message, { autoClose: 3000 });
			yield put(createWhyChooseSuccessful(response.message));
			history("/whyChoose-menu");
		} else {
			toast.error(response.message, { autoClose: 3000 });
			yield put(createWhyChooseFailed(response.message));
		}
	} catch (error) {
		yield put(createWhyChooseFailed(error));
	}
}

function* deleteWhyChooseSaga({ payload: { whyChooseId } }) {
	try {
		const response = yield call(deleteWhyChoose, whyChooseId);
		if (response.status === "success") {
			toast.success(response.message, { autoClose: 3000 });
			yield put(deleteWhyChooseSuccessful(response.message));
		} else {
			toast.error(response.message, { autoClose: 3000 });
			yield put(deleteWhyChooseFailed(response.message));
		}
	} catch (error) {
		yield put(deleteWhyChooseFailed(error));
	}
}

function* CreateWhyChooseMainSaga() {
	yield takeEvery(SAVE_WHY_CHOOSE, createWhyChooseSaga);
	yield takeEvery(DELETE_WHY_CHOOSE, deleteWhyChooseSaga);
}

export default CreateWhyChooseMainSaga;
