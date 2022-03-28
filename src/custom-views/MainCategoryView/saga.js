import {call, put, takeLatest} from "redux-saga/effects"
import axios from "../../axios/axios"
import {getAllMainCatSuccess, handleMainCatLoader} from "./actions"
import * as actionTypes from "./constants"

const getAllMainCatAsync = async () => {
        return await axios.get("/main-service").then(res => {
        console.log(res)
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

function* watchMainCatViewSagas() {
    yield takeLatest(actionTypes.GET_MAIN_SERVICES_LISTEN, getAllMainCatCB)
}

const mainCatSagas = [watchMainCatViewSagas]

export default mainCatSagas