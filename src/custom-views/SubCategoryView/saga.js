import {call, put, takeLatest} from "redux-saga/effects"
import {
    getAllSubCatSuccess,
    getSubServiceByIDSuccess,
    handleGetSubCatByIDListen,
    handleSubCatCreateLoading,
    handleSubCatLoading
} from "./action"
import axios from "../../axios/axios"
import * as actionTypes from "./constants"
import {fireAlertError, fireAlertSuccess, jsonToFormData} from "../../utility/customUtils"

const getAllSubCatAsync = async () => {

    return await axios.get("/sub-service").then(res => res).catch(err => {
        console.error(err.message)
    })
}

const getSubCatByIDAsync = async (id) => {

    return await axios.get(`/sub-service/${id}`).then(res => res).catch(err => {
        console.error(err.message)
    })
}

const createSubCatAsync = async (data) => {

    const formData = jsonToFormData(data)

    return await axios.post("/sub-service", formData, {
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        }
    }).then(res => {
        fireAlertSuccess("You have created a new sub service !", "Could be a beginning of something great")
        return res
    }).catch(err => {
        console.error(err.message)
    })
}

//////////////////
//ASYNC FINISHED//
//////////////////
export function* getAllSubCatCB() {

    try {
        yield put(handleSubCatLoading(true))
        const res = yield call(getAllSubCatAsync)
        yield put(getAllSubCatSuccess(res.data))
    } catch (err) {
        fireAlertError("Oops...", "asdsd")
    } finally {
        yield put(handleSubCatLoading(false))
    }
}

export function* getSubCatByIDCB(action) {

    const {payload} = action

    try {
        yield put(handleGetSubCatByIDListen(false))
        const res = yield call(getSubCatByIDAsync, payload)
        yield put(getSubServiceByIDSuccess(res.data))
    } catch (err) {
        console.error(err.message)
    } finally {
        yield put(handleGetSubCatByIDListen(false))
    }
}

export function* createSubCatCB(action) {

    const {payload, history} = action

    try {
        yield put(handleSubCatCreateLoading(true))
        yield call(createSubCatAsync, payload)
        history.push("/sub-category/view")
    } catch (err) {
        console.error(err.message)
    } finally {
        yield put(handleSubCatCreateLoading(false))
    }
}

function* watchSubCatSagas() {
    yield takeLatest(actionTypes.GET_ALL_SUB_CAT_LISTEN, getAllSubCatCB)
    yield takeLatest(actionTypes.GET_SUB_CAT_BY_ID_LISTEN, getSubCatByIDCB)
    yield takeLatest(actionTypes.CREATE_SUB_CAT_LISTEN, createSubCatCB)
}

const subServiceSagas = [watchSubCatSagas]

export default subServiceSagas