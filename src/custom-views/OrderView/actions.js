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
export const getOrderByIDListen = (id) => {

    return {
        type: actionTypes.GET_ORDER_BY_ID_LISTEN,
        payload: id
    }
}

export const getOrderByIDSuccess = (data) => {

    return {
        type: actionTypes.GET_ORDER_BY_ID_SUCCESS,
        payload: data
    }
}

//Use this to handle get order by id loader
export const handleGetOrderByIDLoader = (state) => {

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

export const getOrderDataByStatePendingListen = () => {

    return {
        type: actionTypes.GET_ORDERS_BY_STATE_LISTEN_PENDING
    }
}

export const getOrderDataByStateOngoingListen = () => {

    return {
        type: actionTypes.GET_ORDERS_BY_STATE_LISTEN_ONGOING
    }
}

export const getOrderDataByStateCompleteListen = () => {

    return {
        type: actionTypes.GET_ORDERS_BY_STATE_LISTEN_COMPLETE
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
        type: actionTypes.GET_ORDERS_BY_STATE_SUCCESS_ONGOING,
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
        type: actionTypes.GET_ORDERS_BY_STATE_SUCCESS_COMPLETE,
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

//Use this to get order time line data by given ID
export const getOrderTimeLineByIDListen = (id) => {

    return {
        type: actionTypes.GET_ORDER_TIME_LINE_LISTEN,
        payload: id
    }
}

export const getOrderTimeLineByIDSuccess = (data) => {

    return  {
        type: actionTypes.GET_ORDER_TIME_LINE_SUCCESS,
        payload: data
    }
}

//Use this to handle the order timeline loader
export const handleGetOrderTimlineLoader = (state) => {

    return {
        type: actionTypes.HANDLE_ORDER_TIME_LINE_LOADER,
        payload: state
    }
}

//Use this to update the order state
export const updateOrderStateListen = (data) => {

    return {
        type: actionTypes.UPDATE_ORDER_STATE_LISTEN,
        payload: data
    }
}

export const updateOrderStateSuccess = () => {

    return {
        type: actionTypes.UPDATE_ORDER_STATE_SUCCESS
    }
}

//Use this to handle update order state loader
export const handleUpdateOrderStateLoader = (state) => {

    return {
        type: actionTypes.HANDLE_UPDATE_ORDER_STATE_LOADER,
        payload: state
    }
}

//Use this to fetch all the order source files
export const getAllOrderSourceFilesListen = (id) => {

    return {
        type: actionTypes.GET_ORDER_SOURCE_FILES_LISTEN,
        payload: id
    }
}

export const getAllOrderSourceFilesSuccess = (payload) => {

    return {
        type: actionTypes.GET_ORDER_SOURCE_FILES_SUCCESS,
        payload
    }
}

//Use this to handle the get all source files loader
export const handleGetAllOrderSourceFilesLoader = (state) => {

    return {
        type: actionTypes.HANDLE_GET_ORDER_SOURCE_FILES_LOADER,
        payload: state
    }
}

//Use this to create a source file
export const createOrderSourceFilesListen = (payload) => {

    return {
        type: actionTypes.CREATE_ORDER_SOURCE_FILES_LISTEN,
        payload
    }
}

export const createOrderSourceFilesSuccess = () => {

    return {
        type: actionTypes.CREATE_ORDER_SOURCE_FILES_SUCCESS
    }
}

//Use this to handle the create all source files loader
export const handleCreateOrderSourceFilesLoader = (state) => {

    return {
        type: actionTypes.HANDLE_CREATE_ORDER_SOURCE_FILES_LOADER,
        payload: state
    }
}