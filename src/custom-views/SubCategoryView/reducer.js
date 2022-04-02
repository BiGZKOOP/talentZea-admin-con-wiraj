import * as actionTypes from "./constants"

const init = {
    subCatLoading: false,
    subCat: []
}

const subCatReducer = (state = init, action) => {

    switch (action.type) {
        case actionTypes.GET_ALL_SUB_CAT_SUCCESS:
            return {
                ...state,
                subCat: action.payload
            }
        case actionTypes.HANDLE_SUB_CAT_LOADING:
            return {
                ...state,
                subCatLoading: action.payload
            }
        default:
            return state
    }
}

export default subCatReducer