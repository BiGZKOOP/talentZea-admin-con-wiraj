import * as actionTypes from "./constants"
import axios from "../../axios/axios"
import {put, takeLatest} from "redux-saga/effects"
import {createMainCatSuccess} from "./actions"

const createMainServiceAsync = async (data) => {

    return await axios.post("/main-service", data).then(res => res).catch(err => {
        console.error(err.message)
    })
}

////////////////
//ASYNC FINISHED
////////////////

export function* createMainCatCB(action) {

    const {payload} = action

    try {
        const res = yield put(createMainServiceAsync, payload)
        console.log(res)
        yield put(createMainCatSuccess(res.data))
    } catch (err) {
        console.error(err.message)
    }
}


function* watchCreateMainCatSagas() {
    yield takeLatest(actionTypes.CREATE_MAIN_SERVICE_LISTEN, createMainCatCB)
}

const createMainCatSagas = [watchCreateMainCatSagas]

export default createMainCatSagas