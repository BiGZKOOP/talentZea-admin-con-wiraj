import * as actionTypes from "./constants"

const init = {
    subCatLoading: false,
    subCat: [],
    singleSubCat: undefined,
    singleSubCatLoading: false,
    subCatCreateLoading: false,
    subCatUpdateLoading: false
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
        case actionTypes.GET_SUB_CAT_BY_ID_SUCCESS:
            return {
                ...state,
                singleSubCat: action.payload
            }
        case actionTypes.HANDLE_SUB_CAT_BY_ID_LOADING:
            return {
                ...state,
                singleSubCatLoading: action.payload
            }
        case actionTypes.HANDLE_SUB_CAT_CREATE_LOADING:
            return {
                ...state,
                subCatCreateLoading: action.payload
            }
        case actionTypes.HANDLE_UPDATE_SUB_SERVICE_LOADER:
            return {
                ...state,
                subCatUpdateLoading: action.payload
            }
        default:
            return state
    }
}

export default subCatReducer