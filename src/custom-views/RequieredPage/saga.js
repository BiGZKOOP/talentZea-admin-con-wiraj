import {call, put, takeLatest} from "redux-saga/effects"
import {handleCreateRequiredPageLoader} from "./actions"
import axios from "../../axios/axios"
import {fireAlertError, fireAlertSuccess, getIDToken} from "../../utility/customUtils"
import * as actionTypes from "./constants"

const createRequiredPageAsync = async (data, id) => {
    return await axios.post(`/required-page/${id}`, {meta_data:data}, {
        headers: {
            Authorization: `Bearer ${await getIDToken()}`
        }
    }).then(res => {
        fireAlertSuccess("Added", "A required page added to the service")
        return res
    }).catch(err => {
        fireAlertError("Oops !", err.message)
    })
}

const deleteRequiredPageAsync = async (id, subID) => {

    alert("reached")
    return await axios.delete(`/required-page/${id}/${subID}`, {
        headers: {
            Authorization: `Bearer ${await getIDToken()}`
        }
    }).then(() =>  {
        fireAlertSuccess("Deleted", "Required page is deleted")
    }).catch(err => {
        fireAlertError("Oops !", err.message)
    })
}

const getRequiredPageAsync = async (id) => {

    return await axios.get(`/required-page/${id}`, {
        headers: {
            Authorization: `Bearer ${await getIDToken()}`
        }
    }).then(res =>  res).catch(err => {
        fireAlertError("Oops !", err.message)
    })
}

//////////////////////////
//////ASYNC FINISHED//////
//////////////////////////

export function* createRequiredPageCB(action) {

    const {payload, id} = action

    try {
        yield put(handleCreateRequiredPageLoader(true))
        yield call(createRequiredPageAsync, payload, id)
    } catch (err) {
        console.error(err.message)
    } finally {
        yield put(handleCreateRequiredPageLoader(false))
    }
}

export function* getRequiredPageCB(action) {

    const {payload} = action

    try {
        yield put(handleCreateRequiredPageLoader(true))
        yield call(getRequiredPageAsync, payload)
    } catch (err) {
        console.error(err.message)
    } finally {
        yield put(handleCreateRequiredPageLoader(false))
    }
}

export function* deleteRequiredPageCB(action) {

    const {payload} = action

    try {
        yield put(handleCreateRequiredPageLoader(true))
        yield call(deleteRequiredPageAsync, payload.id, payload.subID)
    } catch (err) {
        console.error(err.message)
    } finally {
        yield put(handleCreateRequiredPageLoader(false))
    }
}

function* watchRequiredPageSagas() {
    yield takeLatest(actionTypes.CREATE_REQUIRED_PAGE_LISTEN, createRequiredPageCB)
    yield takeLatest(actionTypes.DELETE_REQUIRED_PAGE_LISTEN, deleteRequiredPageCB)
}

const requiredSagas = [watchRequiredPageSagas]

export default requiredSagas