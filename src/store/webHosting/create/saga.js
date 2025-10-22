import { call, delay, put, takeEvery } from "redux-saga/effects";

// Login Redux States
import { SAVE_WEB_HOST, DELETE_WEB_HOST } from "./actionTypes";
import { deleteWebHosting, postCreateWebHosting } from "../../../helpers/fakebackend_helper";
import { createWebHostingFailed, createWebHostingSuccessful, deleteWebHostingFailed, deleteWebHostingSuccessful } from "./actions";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function* createWebHostingSaga({ payload: { hosting } }) {
	try {
		const response = yield call(postCreateWebHosting, hosting);
		if (response.status === "success") {
			toast.success(response.message, { autoClose: 3000 });
			yield put(createWebHostingSuccessful(response.message));
		} else {
			toast.error(response.message, { autoClose: 3000 });
			yield put(createWebHostingFailed(response.message));
		}
	} catch (error) {
		yield put(createWebHostingFailed(error));
	}
}

function* deleteWebHostingSaga({ payload: { hostingId } }) {
	try {
		const response = yield call(deleteWebHosting, hostingId);
		if (response.status === "success") {
			toast.success(response.message, { autoClose: 3000 });
			yield put(deleteWebHostingSuccessful(response.message));
		} else {
			toast.error(response.message, { autoClose: 3000 });
			yield put(deleteWebHostingFailed(response.message));
		}
	} catch (error) {
		yield put(deleteWebHostingFailed(error));
	}
}

function* CreateWebHostingMainSaga() {
	yield takeEvery(SAVE_WEB_HOST, createWebHostingSaga);
	yield takeEvery(DELETE_WEB_HOST, deleteWebHostingSaga);
}

export default CreateWebHostingMainSaga;
