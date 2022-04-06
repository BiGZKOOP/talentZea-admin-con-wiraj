import * as actionTypes from "./constants"

const init = {
    createLoader: false
}

const mainCatCreateReducer = (state = init, action) => {
    
    switch (action.type) {

        case actionTypes.HANDLE_MAIN_CREATE_LOADING:
            return {
                ...state,
                createLoader: action.payload
            }

        default:
            return state
    }
}

export default mainCatCreateReducer