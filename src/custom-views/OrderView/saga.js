import {call, put, takeLatest} from "redux-saga/effects"
import * as actionTypes from "./actionTypes"
import {
    getAllOrderSourceFilesSuccess,
    getAllOrderSuccess, getOrderByIDListen, getOrderByIDSuccess,
    getOrderDataByStateSuccessComplete,
    getOrderDataByStateSuccessOngoing,
    getOrderDataByStateSuccessPending, getOrderTimeLineByIDSuccess, handleCreateOrderSourceFilesLoader,
    handleGetAllOrderLoader, handleGetAllOrderSourceFilesLoader,
    handleGetCompleteOrderLoader,
    handleGetOngoingOrderLoader, handleGetOrderByIDLoader, handleGetOrderTimlineLoader,
    handleGetPendingOrderLoader, handleUpdateOrderStateLoader
} from "./actions"
import axios from "../../axios/axios"
import {UPDATE_ORDER_STATE_LISTEN} from "./actionTypes"
import {fireAlertError, fireAlertSuccess, getIDToken} from "../../utility/customUtils"

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

const updateOrderStateAsync = async (id, state) => {

    return axios.patch(`/order-service/orders/${id}?status=${state}`).then(res => {
        fireAlertSuccess("Status updated", "Order status updated !")
        return res
    }).catch(err => {
        console.log(err)
        fireAlertError("Invalid status update", "You can't update the status to that state")
        console.error(err.message)
    })
}

const getAllOrderSourceFileAsync = async (id) => {

    return axios.get(`/source-file/file/${id}`, {
        headers: {
            'content-type': 'application/form-data',
            Authorization: `Bearer ${await getIDToken()}`
        }
    }).then(res => res).catch(err => {
        fireAlertError("Oops !", err.message)
    })
}

const createOrderSourceFileAsync = async (data) => {

    return axios.post(`/source-file`, data, {
        headers: {
            'content-type': 'application/form-data',
            Authorization: `Bearer ${await getIDToken()}`
        }
    }).then(res => res).catch(err => {
        fireAlertError("Oops !", err.message)
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

export function* updateOrderStateCB(action) {

    const {id, state} = action.payload

    try {
        yield put(handleUpdateOrderStateLoader(true))
        yield call(updateOrderStateAsync, id, state)
        yield put(getOrderByIDListen(id))
    } catch (err) {
        console.error(err.message)
    } finally {
        yield put(handleUpdateOrderStateLoader(true))
    }
}

export function* getAllOrderSourceFilesCB(action) {

    const {payload} = action

    try {
        yield put(handleGetAllOrderSourceFilesLoader(true))
        const res = yield call(getAllOrderSourceFileAsync, payload)
        yield put(getAllOrderSourceFilesSuccess(res.data))
    } catch (err) {
        console.error(err.message)
    } finally {
        yield put(handleGetAllOrderSourceFilesLoader(true))
    }
}

export function* createOrderSourceFilesCB(action) {

    const {payload} = action

    try {
        yield put(handleCreateOrderSourceFilesLoader(true))
        yield call(createOrderSourceFileAsync, payload)
    } catch (err) {
        console.error(err.message)
    } finally {
        yield put(handleCreateOrderSourceFilesLoader(true))
    }
}


function* watchClientSaga() {
    yield takeLatest(actionTypes.GET_ALL_ORDER_LISTEN, getAllOrderCB)
    yield takeLatest(actionTypes.GET_ORDER_BY_ID_LISTEN, getOrderByIDCB)
    yield takeLatest(actionTypes.GET_ORDERS_BY_STATE_LISTEN_PENDING, getPendingOrderCB)
    yield takeLatest(actionTypes.GET_ORDERS_BY_STATE_LISTEN_ONGOING, getOngoingOrderCB)
    yield takeLatest(actionTypes.GET_ORDERS_BY_STATE_LISTEN_COMPLETE, getCompleteOrderCB)
    yield takeLatest(actionTypes.GET_ORDER_TIME_LINE_LISTEN, getOrderTimelineByIDCB)
    yield takeLatest(actionTypes.UPDATE_ORDER_STATE_LISTEN, updateOrderStateCB)
    yield takeLatest(actionTypes.GET_ORDER_SOURCE_FILES_LISTEN, getAllOrderSourceFilesCB)
    yield takeLatest(actionTypes.CREATE_ORDER_SOURCE_FILES_LISTEN, createOrderSourceFilesCB)
}

const clientSagas = [watchClientSaga]

export default clientSagas