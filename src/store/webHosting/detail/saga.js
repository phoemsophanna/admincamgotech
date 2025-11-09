import { call, put, takeEvery } from "redux-saga/effects";

// Login Redux States
import { WEB_HOST_DROPDOWN, WEB_HOST_SHOW_DETAIL } from "./actionTypes";
import { fetchWebHostingDetailFail, fetchWebHostingDetailSuccess, fetchWebHostingDropdownFail, fetchWebHostingDropdownSuccess } from "./actions";
import { getWebHostingShowDetail, getWebHostingDropdown } from "../../../helpers/fakebackend_helper";

function* fetchWebHostingDetailSaga({ payload: { hostingId } }) {
	try {
		const response = yield call(getWebHostingShowDetail, { id: hostingId });
		if (response.status === "success") {
			yield put(fetchWebHostingDetailSuccess(response.model));
		} else {
			yield put(fetchWebHostingDetailFail(response));
		}
	} catch (error) {
		yield put(fetchWebHostingDetailFail(error));
	}
}

function* fetchDropdownSaga() {
	try {
		const response = yield call(getWebHostingDropdown);
		if (response.status === "success") {
			yield put(fetchWebHostingDropdownSuccess(response.model));
		} else {
			yield put(fetchWebHostingDropdownFail(response));
		}
	} catch (error) {
		yield put(fetchWebHostingDropdownFail(error));
	}
}

function* WebHostingDetailSaga() {
	yield takeEvery(WEB_HOST_SHOW_DETAIL, fetchWebHostingDetailSaga);
	yield takeEvery(WEB_HOST_DROPDOWN, fetchDropdownSaga);
}

export default WebHostingDetailSaga;
