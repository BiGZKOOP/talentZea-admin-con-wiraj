import * as actionTypes from "./constants"

const init = {
    mainCatLoading: false,
    mainCat: []
}

const mainCatViewReducer = (state = init, action) => {

    switch (action.type) {
        case actionTypes.GET_MAIN_SERVICE_SUCCESS:
            return {
                ...state,
                mainCat: action.data
            }
        case actionTypes.MAIN_CAT_LOADING_HANDLE:
            return {
                ...state,
                mainCatLoading: action.state
            }
        default:
            return state
    }
}

export default mainCatViewReducer