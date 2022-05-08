import {call, put, takeLatest} from "redux-saga/effects"
import axios from "../../axios/axios"
import {getAllMainCatListen, getAllMainCatSuccess, handleMainCatDeleteLoader, handleMainCatLoader} from "./actions"
import * as actionTypes from "./constants"

const getAllMainCatAsync = async () => {
        return await axios.get("/main-service").then(res => {
        return res
    }).catch(err => console.error(err))
}

const deleteMainCatByIDAsync = async (id) => {
    return await axios.patch(`/main-service/delete/${id}`).then(res => {
        return res
    }).catch(err => console.error(err))
}


//////////////////
//ASYNC FINISHED//
//////////////////

export function* getAllMainCatCB() {

    try {
        yield put(handleMainCatLoader(true))
        const res = yield call(getAllMainCatAsync)
        yield put(getAllMainCatSuccess(res.data))
    } catch (err) {
        console.error(err.message)
    } finally {
        yield put(handleMainCatLoader(false))
    }
}

export function* deleteMainCatCB(action) {

    const {payload} = action

    try {
        yield put(handleMainCatDeleteLoader(true))
        yield call(deleteMainCatByIDAsync, payload)
        yield put(getAllMainCatListen())
    } catch (err) {
        console.error(err.message)
    } finally {
        yield put(handleMainCatDeleteLoader(false))
    }
}

function* watchMainCatViewSagas() {
    yield takeLatest(actionTypes.GET_MAIN_SERVICES_LISTEN, getAllMainCatCB)
    yield takeLatest(actionTypes.MAIN_CAT_DELETE_LISTEN, getAllMainCatCB)
}

const mainCatSagas = [watchMainCatViewSagas]

export default mainCatSagas