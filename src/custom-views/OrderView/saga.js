import {call, put, takeLatest} from "redux-saga/effects"
import * as actionTypes from "./actionTypes"
import {getAllOrderSuccess, handleGetAllOrderLoader} from "./actions"
import axios from "../../axios/axios"

const getAllOrderAsync = async () => {

    return axios.get(`/order-service`).then(res => res).catch(err => {
        console.error(err.message)
    })
}

////////////////
//ASYNC FINISHED
////////////////

export function* getAllOrderCB() {
    try {
        yield put(handleGetAllOrderLoader(false))
        const res = yield call(getAllOrderAsync)
        console.log(res.data)
        yield put(getAllOrderSuccess(res.data))
    } catch (err) {
        console.error(err.message)
    } finally {
        yield put(handleGetAllOrderLoader(false))
    }
}

function* watchClientSaga() {
    yield takeLatest(actionTypes.GET_ALL_ORDER_LISTEN, getAllOrderCB)
}

const clientSagas = [watchClientSaga]

export default clientSagas