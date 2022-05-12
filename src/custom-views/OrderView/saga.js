import {call, put, takeLatest} from "redux-saga/effects"
import * as actionTypes from "./actionTypes"
import {
    getAllOrderSuccess, getOrderDataByStateSuccessComplete, getOrderDataByStateSuccessOngoing,
    getOrderDataByStateSuccessPending,
    handleGetAllOrderLoader, handleGetCompleteOrderLoader, handleGetOngoingOrderLoader,
    handleGetPendingOrderLoader
} from "./actions"
import axios from "../../axios/axios"

const getAllOrderAsync = async () => {

    return axios.get(`/order-service`).then(res => res).catch(err => {
        console.error(err.message)
    })
}

const getOrderByStateAsync = async (state) => {

    return axios.get(`/order-service/order/${state}`).then(res => res).catch(err => {
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

export function* getPendingOrderCB() {
    try {
        yield put(handleGetPendingOrderLoader(false))
        const res = yield call(getOrderByStateAsync)
        yield put(getOrderDataByStateSuccessPending(res.data))
    } catch (err) {
        console.error(err.message)
    } finally {
        yield put(handleGetPendingOrderLoader(false))
    }
}

export function* getOngoingOrderCB() {
    try {
        yield put(handleGetOngoingOrderLoader(false))
        const res = yield call(getOrderByStateAsync)
        yield put(getOrderDataByStateSuccessOngoing(res.data))
    } catch (err) {
        console.error(err.message)
    } finally {
        yield put(handleGetOngoingOrderLoader(false))
    }
}

export function* getCompleteOrderCB() {
    try {
        yield put(handleGetCompleteOrderLoader(false))
        const res = yield call(getOrderByStateAsync)
        yield put(getOrderDataByStateSuccessComplete(res.data))
    } catch (err) {
        console.error(err.message)
    } finally {
        yield put(handleGetCompleteOrderLoader(false))
    }
}

function* watchClientSaga() {
    yield takeLatest(actionTypes.GET_ALL_ORDER_LISTEN, getAllOrderCB)
    yield takeLatest(actionTypes.GET_ORDERS_BY_STATE_SUCCESS_PENDING, getPendingOrderCB)
    yield takeLatest(actionTypes.GET_ORDERS_BY_STATE_SUCCESS_ONGOING, getOngoingOrderCB)
    yield takeLatest(actionTypes.GET_ORDERS_BY_STATE_SUCCESS_COMPLETE, getCompleteOrderCB)
}

const clientSagas = [watchClientSaga]

export default clientSagas