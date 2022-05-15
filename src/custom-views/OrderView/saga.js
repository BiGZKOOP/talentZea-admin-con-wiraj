import {call, put, takeLatest} from "redux-saga/effects"
import * as actionTypes from "./actionTypes"
import {
    getAllOrderSuccess, getOrderByIDSuccess,
    getOrderDataByStateSuccessComplete,
    getOrderDataByStateSuccessOngoing,
    getOrderDataByStateSuccessPending, getOrderTimeLineByIDSuccess,
    handleGetAllOrderLoader,
    handleGetCompleteOrderLoader,
    handleGetOngoingOrderLoader, handleGetOrderByIDLoader, handleGetOrderTimlineLoader,
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

const getOrderByIDAsync = async (id) => {

    return axios.get(`/order-service/${id}`).then(res => res).catch(err => {
        console.error(err.message)
    })
}

const getOrderTimelineByIDAsync = async (id) => {

    return axios.get(`/order-log-service/${id}`).then(res => res).catch(err => {
        console.error(err.message)
    })
}

////////////////
//ASYNC FINISHED
////////////////

export function* getAllOrderCB() {
    try {
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
        yield put(handleGetPendingOrderLoader(true))
        const res = yield call(getOrderByStateAsync, 0)
        yield put(getOrderDataByStateSuccessPending(res.data.data))
    } catch (err) {
        console.error(err.message)
    } finally {
        yield put(handleGetPendingOrderLoader(false))
    }
}

export function* getOngoingOrderCB() {
    try {
        yield put(handleGetOngoingOrderLoader(true))
        const res = yield call(getOrderByStateAsync, 1)
        yield put(getOrderDataByStateSuccessOngoing(res.data.data))
    } catch (err) {
        console.error(err.message)
    } finally {
        yield put(handleGetOngoingOrderLoader(false))
    }
}

export function* getCompleteOrderCB() {
    try {
        yield put(handleGetCompleteOrderLoader(true))
        const res = yield call(getOrderByStateAsync, 2)
        yield put(getOrderDataByStateSuccessComplete(res.data.data))
    } catch (err) {
        console.error(err.message)
    } finally {
        yield put(handleGetCompleteOrderLoader(false))
    }
}

export function* getOrderByIDCB(action) {

    const {payload} = action

    try {
        yield put(handleGetOrderByIDLoader(true))
        const res = yield call(getOrderByIDAsync, payload)
        yield put(getOrderByIDSuccess(res.data))
    } catch (err) {
        console.error(err.message)
    } finally {
        yield put(handleGetOrderByIDLoader(false))
    }
}

export function* getOrderTimelineByIDCB(action) {

    const {payload} = action

    try {
        yield put(handleGetOrderTimlineLoader(true))
        const res = yield call(getOrderTimelineByIDAsync, payload)
        yield put(getOrderTimeLineByIDSuccess(res.data))
    } catch (err) {
        console.error(err.message)
    } finally {
        yield put(handleGetOrderTimlineLoader(false))
    }
}


function* watchClientSaga() {
    yield takeLatest(actionTypes.GET_ALL_ORDER_LISTEN, getAllOrderCB)
    yield takeLatest(actionTypes.GET_ORDER_BY_ID_LISTEN, getOrderByIDCB)
    yield takeLatest(actionTypes.GET_ORDERS_BY_STATE_LISTEN_PENDING, getPendingOrderCB)
    yield takeLatest(actionTypes.GET_ORDERS_BY_STATE_LISTEN_ONGOING, getOngoingOrderCB)
    yield takeLatest(actionTypes.GET_ORDERS_BY_STATE_LISTEN_COMPLETE, getCompleteOrderCB)
    yield takeLatest(actionTypes.GET_ORDER_TIME_LINE_LISTEN, getOrderTimelineByIDCB)
}

const clientSagas = [watchClientSaga]

export default clientSagas