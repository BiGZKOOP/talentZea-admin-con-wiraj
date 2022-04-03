import {call, put, takeLatest} from "redux-saga/effects"
import {getAllSubCatSuccess, handleGetSubCatByIDListen, handleSubCatLoading} from "./action"
import axios from "../../axios/axios"
import * as actionTypes from "./constants"
import {fireAlertError} from "../../utility/customUtils"

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

//////////////////
//ASYNC FINISHED//
//////////////////
export function* getAllSubCatCB() {

    try {
        yield put(handleSubCatLoading(false))
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
        console.log(res)
    } catch (err) {
        console.error(err.message)
    } finally {
        yield put(handleGetSubCatByIDListen(false))
    }
}

function* watchSubCatSagas() {
    yield takeLatest(actionTypes.GET_ALL_SUB_CAT_LISTEN, getAllSubCatCB)
}

const subServiceSagas = [watchSubCatSagas]

export default subServiceSagas