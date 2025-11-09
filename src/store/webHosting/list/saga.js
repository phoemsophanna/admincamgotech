import { call, delay, put, takeEvery } from "redux-saga/effects";

// Login Redux States
import { REFRESH_WEB_HOST_LIST_FLAG, WEB_HOST_LIST } from "./actionTypes";
import { fetchWebHostingListFail, fetchWebHostingListSuccess } from "./actions";
import { getWebHostingList } from "../../../helpers/fakebackend_helper";

function* fetchWebHostingListSaga() {
	try {
		const response = yield call(getWebHostingList);
		if (response) {
			yield put(fetchWebHostingListSuccess(response.data));
		} else {
			yield put(fetchWebHostingListFail(response));
		}
	} catch (error) {
		yield put(fetchWebHostingListFail(error));
	}
}

function* refreshWebHostingListSaga() {
	try {
		const response = yield call(getWebHostingList);
		if (response) {
			yield put(fetchWebHostingListSuccess(response.data));
		} else {
			yield put(fetchWebHostingListFail(response));
		}
	} catch (error) {
		yield put(fetchWebHostingListFail(error));
	}
}

function* WebHostingListSaga() {
	yield takeEvery(WEB_HOST_LIST, fetchWebHostingListSaga);
	yield takeEvery(REFRESH_WEB_HOST_LIST_FLAG, refreshWebHostingListSaga);
}

export default WebHostingListSaga;
