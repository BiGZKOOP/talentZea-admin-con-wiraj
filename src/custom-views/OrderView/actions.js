import * as actionTypes from "./actionTypes"

//Use this to handle the get all orders
export const getAllOrdersListen = () => {

    return {
        type: actionTypes.GET_ALL_ORDER_LISTEN
    }
}

export const getAllOrderSuccess = (data) => {

    return {
        type: actionTypes.GET_ALL_ORDER_SUCCESS,
        payload: data
    }
}

//Use this to handle get order loader
export const handleGetAllOrderLoader = (state) => {

    return {
        type: actionTypes.HANDLE_GET_ALL_ORDER_LOADER,
        payload: state
    }
}

//Use this to handle get order by ID
export const getAllOrderByIDListen = (id) => {

    return {
        type: actionTypes.GET_ORDER_BY_ID_LISTEN,
        payload: id
    }
}

export const getAllOrderByIDSuccess = (data) => {

    return {
        type: actionTypes.GET_ORDER_BY_ID_SUCCESS,
        payload: data
    }
}

//Use this to handle get order by id loader
export const handleGetOrderByLoader = (state) => {

    return {
        type: actionTypes.HANDLE_GET_ORDER_BY_ID_LOADER,
        payload: state
    }
}

//Use this to get get order data by state
export const getOrderDataByStateListen = (state) => {

    return {
        type: actionTypes.GET_ORDERS_BY_STATE_LISTEN,
        payload: state
    }
}

//Use this to transport pending order data to the reducer
export const getOrderDataByStateSuccessPending = (data) => {

    return {
        type: actionTypes.GET_ORDERS_BY_STATE_SUCCESS_PENDING,
        payload: data
    }
}

//Use this to handle the loader for pending data
export const handleGetPendingOrderLoader = (state) => {

    return {
        type: actionTypes.HANDLE_PENDING_ORDER_LOADER,
        payload: state
    }
}

//Use this to transport ongoing order data to the reducer
export const getOrderDataByStateSuccessOngoing = (data) => {

    return {
        type: actionTypes.GET_ORDERS_BY_STATE_SUCCESS_PENDING,
        payload: data
    }
}

//Use this to handle the loader for ongoing data
export const handleGetOngoingOrderLoader = (state) => {

    return {
        type: actionTypes.HANDLE_ONGOING_ORDER_LOADER,
        payload: state
    }
}

//Use this to transport complete order data to the reducer
export const getOrderDataByStateSuccessComplete = (data) => {

    return {
        type: actionTypes.GET_ORDERS_BY_STATE_SUCCESS_PENDING,
        payload: data
    }
}

//Use this to handle the loader for complete data
export const handleGetCompleteOrderLoader = (state) => {

    return {
        type: actionTypes.HANDLE_COMPLETE_ORDER_LOADER,
        payload: state
    }
}