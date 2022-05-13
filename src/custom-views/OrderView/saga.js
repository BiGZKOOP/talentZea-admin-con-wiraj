import {call, put, takeLatest} from "redux-saga/effects"
import * as actionTypes from "./actionTypes"
import {
    getAllOrderSuccess,
    getOrderDataByStateSuccessComplete,
    getOrderDataByStateSuccessOngoing,
    getOrderDataByStateSuccessPending,
    handleGetAllOrderLoader,
    handleGetCompleteOrderLoader,
    handleGetOngoingOrderLoader,
    handleGetPendingOrderLoader
} from "./actions"
import axios from "../../axios/axios"

export function* statusLoaderHandler(status) {

    alert(status)

    try {
        switch (status) {
            case 0:
                yield put(handleGetPendingOrderLoader(false))
                break
            case 1:
                yield put(handleGetOngoingOrderLoader(false))
                break
            case 2:
                yield put(handleGetCompleteOrderLoader(false))
                break
            default: return
        }
    } catch (err) {
        console.error(err.message)
    }
}

//////////////////
//COMMON FUNCTIONS
//////////////////

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


function* watchClientSaga() {
    yield takeLatest(actionTypes.GET_ALL_ORDER_LISTEN, getAllOrderCB)
    yield takeLatest(actionTypes.GET_ORDERS_BY_STATE_LISTEN_PENDING, getPendingOrderCB)
    yield takeLatest(actionTypes.GET_ORDERS_BY_STATE_LISTEN_ONGOING, getOngoingOrderCB)
    yield takeLatest(actionTypes.GET_ORDERS_BY_STATE_LISTEN_COMPLETE, getCompleteOrderCB)
}

const clientSagas = [watchClientSaga]

export default clientSagas