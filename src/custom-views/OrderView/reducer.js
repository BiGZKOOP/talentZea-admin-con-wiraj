import * as actionTypes from "./actionTypes"

const init = {
    allOrder: [],
    allOrderLoader: false,
    singleOrder: {},
    singleOrderLoader: false
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
        default: return state
    }
}

export default orderReducer