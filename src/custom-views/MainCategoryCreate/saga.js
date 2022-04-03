import * as actionTypes from "./constants"
// eslint-disable-next-line no-unused-vars
import axios from "../../axios/axios"
import {call, put, takeLatest} from "redux-saga/effects"
import {createMainCatSuccess} from "./actions"
// eslint-disable-next-line no-unused-vars
import {getIDToken, jsonToFormData} from "../../utility/customUtils"

const createMainServiceAsync = async (data) => {

    const formData = jsonToFormData(data)

    return await axios.post("/main-service", formData, {
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        }
    }).then(res => res).catch(err => {
        console.error(err.message)
    })
}

////////////////
//ASYNC FINISHED
////////////////

export function* createMainCatCB(action) {

    const {payload} = action

    try {
        const res = yield call(createMainServiceAsync, payload)
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