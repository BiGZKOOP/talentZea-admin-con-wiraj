import * as actionTypes from "./actionTypes"

const init = {
    allOrder: [],
    allOrderLoader: true,

    singleOrder: {},
    singleOrderLoader: true,

    pendingOrders: [],
    pendingOrderLoader: true,

    completeOrders: [],
    completeOrderLoader: true,

    ongoingOrders: [],
    ongoingOrderLoader: true,

    timeLineData: [],
    timeLineLoader: true,

    updateOrderStateLoader: false
}

const orderReducer = (state = init, action) => {

    switch (action.type) {
        case actionTypes.GET_ALL_ORDER_SUCCESS:
            return {
                ...state,
                allOrder: action.payload
            }
        case actionTypes.HANDLE_GET_ALL_ORDER_LOADER:
            return {
                ...state,
                allOrderLoader: action.payload
            }
        case actionTypes.GET_ORDER_BY_ID_SUCCESS:
            return {
                ...state,
                singleOrder: action.payload
            }
        case actionTypes.HANDLE_GET_ORDER_BY_ID_LOADER:
            return {
                ...state,
                singleOrderLoader: action.payload
            }
        case actionTypes.GET_ORDERS_BY_STATE_SUCCESS_PENDING:
            return {
                ...state,
                pendingOrders: action.payload
            }
        case actionTypes.GET_ORDERS_BY_STATE_SUCCESS_ONGOING:
            return {
                ...state,
                ongoingOrders: action.payload
            }
        case actionTypes.GET_ORDERS_BY_STATE_SUCCESS_COMPLETE:
            return {
                ...state,
                completeOrders: action.payload
            }
        case actionTypes.HANDLE_PENDING_ORDER_LOADER: {
            return {
                ...state,
                pendingOrderLoader: action.payload
            }
        }
        case actionTypes.HANDLE_ONGOING_ORDER_LOADER: {
            return {
                ...state,
                ongoingOrderLoader: action.payload
            }
        }
        case actionTypes.HANDLE_COMPLETE_ORDER_LOADER: {
            return {
                ...state,
                completeOrderLoader: action.payload
            }
        }
        case actionTypes.GET_ORDER_TIME_LINE_SUCCESS: {
            return {
                ...state,
                timeLineData: action.payload
            }
        }
        case actionTypes.HANDLE_ORDER_TIME_LINE_LOADER: {
            return {
                ...state,
                timeLineLoader: action.payload
            }
        }
        case actionTypes.HANDLE_UPDATE_ORDER_STATE_LOADER: {
            return {
                ...state,
                updateOrderStateLoader: action.payload
            }
        }
        default: return state
    }
}

export default orderReducer