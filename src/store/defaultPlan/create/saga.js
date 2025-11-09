import { call, delay, put, takeEvery } from "redux-saga/effects";

// Login Redux States
import { SAVE_DEFAULT_PLAN, DELETE_DEFAULT_PLAN } from "./actionTypes";
import { deleteDefaultPlan, postCreateDefaultPlan } from "../../../helpers/fakebackend_helper";
import { createDefaultPlanFailed, createDefaultPlanSuccessful, deleteDefaultPlanFailed, deleteDefaultPlanSuccessful } from "./actions";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function* createDefaultPlanSaga({ payload: { defaultPlan } }) {
	try {
		const response = yield call(postCreateDefaultPlan, defaultPlan);
		if (response.status === "success") {
			toast.success(response.message, { autoClose: 3000 });
			yield put(createDefaultPlanSuccessful(response.message));
		} else {
			toast.error(response.message, { autoClose: 3000 });
			yield put(createDefaultPlanFailed(response.message));
		}
	} catch (error) {
		yield put(createDefaultPlanFailed(error));
	}
}

function* deleteDefaultPlanSaga({ payload: { defaultPlanId } }) {
	try {
		const response = yield call(deleteDefaultPlan, defaultPlanId);
		if (response.status === "success") {
			toast.success(response.message, { autoClose: 3000 });
			yield put(deleteDefaultPlanSuccessful(response.message));
		} else {
			toast.error(response.message, { autoClose: 3000 });
			yield put(deleteDefaultPlanFailed(response.message));
		}
	} catch (error) {
		yield put(deleteDefaultPlanFailed(error));
	}
}

function* CreateDefaultPlanMainSaga() {
	yield takeEvery(SAVE_DEFAULT_PLAN, createDefaultPlanSaga);
	yield takeEvery(DELETE_DEFAULT_PLAN, deleteDefaultPlanSaga);
}

export default CreateDefaultPlanMainSaga;
