import {call, put, takeLatest} from "redux-saga/effects"
import * as actionTypes from "./constants"
import axios from "../../axios/axios"
import {getMainServiceByIdSuccess, handleMainCatPreviewLoading} from "./actions"

const getMainServiceByIdAsync = async (id) => {

    return await axios.get(`main-service/${id}`).then(res => res).catch(err => console.error(err.message))
}

////////////////////
///ASYNC FINISHED///
////////////////////

export function* getMainServiceByIdCB(action) {

    const {payload} = action

    try {
        yield put(handleMainCatPreviewLoading(true))
        const res = yield call(getMainServiceByIdAsync, payload)
        yield put(getMainServiceByIdSuccess(res.data.data))
    } catch (err) {
        console.error(err.message)
    } finally {
        yield put(handleMainCatPreviewLoading(false))
    }

}

function* watchMainServicePreviewSagas() {

    yield takeLatest(actionTypes.GET_MAIN_SERVICE_BY_ID_LISTEN, getMainServiceByIdCB)
}

const mainServicePreviewSagas = [watchMainServicePreviewSagas]

export default mainServicePreviewSagas