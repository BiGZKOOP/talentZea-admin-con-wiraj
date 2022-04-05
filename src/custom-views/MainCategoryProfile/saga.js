import {call, put, takeLatest} from "redux-saga/effects"
import * as actionTypes from "./constants"
import axios from "../../axios/axios"
import {getMainServiceByIdSuccess, handleMainCatPreviewLoading} from "./actions"
import {deleteAttrFromObject} from "../../utility/customUtils"

const getMainServiceByIdAsync = async (id) => {

    return await axios.get(`/sub-service/main/${id}`).then(res => res).catch(err => console.error(err.message))
}

const updateMainServiceByIDAsync = async (data, id) => {

    const obj = deleteAttrFromObject(data, "_id")

    return await axios.patch(`main-service/${id}`, obj).then(res => res).catch(err => {
        console.error(err.message)
    })
}

////////////////////
///ASYNC FINISHED///
////////////////////

export function* getMainServiceByIdCB(action) {

    const {payload} = action

    try {
        yield put(handleMainCatPreviewLoading(true))
        const res = yield call(getMainServiceByIdAsync, payload)
        yield put(getMainServiceByIdSuccess(res.data))
    } catch (err) {
        console.error(err.message)
    } finally {
        yield put(handleMainCatPreviewLoading(false))
    }

}

export function* updateMainServiceByID(action) {

    const {payload} = action

    try {
        const res = yield call(updateMainServiceByIDAsync, payload)
        console.log(res)
    } catch (err) {
        console.error(err.message)
    }
}

function* watchMainServicePreviewSagas() {

    yield takeLatest(actionTypes.GET_MAIN_SERVICE_BY_ID_LISTEN, getMainServiceByIdCB)
}

const mainServicePreviewSagas = [watchMainServicePreviewSagas]

export default mainServicePreviewSagas