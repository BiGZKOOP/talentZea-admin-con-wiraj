import * as actionTypes from "./constants"
// eslint-disable-next-line no-unused-vars
import axios from "../../axios/axios"
import {call, put, takeLatest} from "redux-saga/effects"
import {createMainCatSuccess, handleMainCatCreateLoading} from "./actions"
// eslint-disable-next-line no-unused-vars
import {fireAlertSuccess, getIDToken, jsonToFormData} from "../../utility/customUtils"

const createMainServiceAsync = async (data) => {

    const formData = jsonToFormData(data)

    return await axios.post("/main-service", formData, {
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        }
    }).then(res => {
        fireAlertSuccess("You have created a new main service !", "Could be a beginning of something great")
        return res
    }).catch(err => {
        console.error(err.message)
    })
}

////////////////
//ASYNC FINISHED
////////////////

export function* createMainCatCB(action) {

    const {payload, history} = action

    try {
        yield put(handleMainCatCreateLoading(true))
        const res = yield call(createMainServiceAsync, payload)
        yield put(createMainCatSuccess(res.data))
        history.push("/main-category/view")
    } catch (err) {
        console.error(err.message)
    } finally {
        yield put(handleMainCatCreateLoading(false))
    }
}


function* watchCreateMainCatSagas() {
    yield takeLatest(actionTypes.CREATE_MAIN_SERVICE_LISTEN, createMainCatCB)
}

const createMainCatSagas = [watchCreateMainCatSagas]

export default createMainCatSagas