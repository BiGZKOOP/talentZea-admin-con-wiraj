import * as actionTypes from "./constants"

const init = {
    requiredPage: {},
    requiredPageLoader: false
}

const requiredPageReducer = (state = init, action) => {

    switch (action.type) {
        case actionTypes.GET_REQUIRED_PAGE_SUCCESS:
            return {
                ...state,
                requiredPage: action.payload
            }
        case actionTypes.HANDLE_GET_REQUIRED_PAGE_LOADER:
            return {
                ...state,
                requiredPageLoader: action.payload
            }
        default:
            return state
    }
}

export default requiredPageReducer