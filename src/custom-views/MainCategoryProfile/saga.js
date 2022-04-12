import {call, put, takeLatest} from "redux-saga/effects"
import * as actionTypes from "./constants"
import axios from "../../axios/axios"
import {getMainServiceByIdSuccess, handleMainCatPreviewLoading, handleMainCatUpdateLoader} from "./actions"
import {
    deleteAttrFromObject,
    fireAlertSuccess,
    getIDToken,
    jsonToFormData
} from "../../utility/customUtils"

const getMainServiceByIdAsync = async (id) => {

    return await axios.get(`/main-service/${id}`).then(res => {
        return res.data
    }).catch(err => console.error(err.message))
}

const updateMainServiceByIDAsync = async (data, id) => {

    const obj = deleteAttrFromObject(data, "_id")
    const formData = jsonToFormData(obj)

    return await axios.patch(`main-service/${id}`, formData, {
        headers: {
            Authorization: `Bearer ${await getIDToken()}`,
            'content-type': 'application/x-www-form-urlencoded'
        }
    }).then(res => res).catch(err => {
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

export function* updateMainServiceByIDCB(action) {

    const {payload} = action

    try {
        yield put(handleMainCatUpdateLoader(true))
        const res = yield call(updateMainServiceByIDAsync, payload, payload._id)
        if (res.data.statusCode === 200) {
            fireAlertSuccess("Yeeh !", "Main service is successfully updated")
            setTimeout(() => {
                window.location.reload()
            }, 500)
        }
    } catch (err) {
        console.error(err.message)
    } finally {
        yield put(handleMainCatUpdateLoader(false))
    }
}

function* watchMainServicePreviewSagas() {

    yield takeLatest(actionTypes.GET_MAIN_SERVICE_BY_ID_LISTEN, getMainServiceByIdCB)
    yield takeLatest(actionTypes.UPDATE_MAIN_SERVICE_BY_ID_LISTEN, updateMainServiceByIDCB)
}

const mainServicePreviewSagas = [watchMainServicePreviewSagas]

export default mainServicePreviewSagas