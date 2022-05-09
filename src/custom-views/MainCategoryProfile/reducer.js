import * as actionTypes from "./constants"

const init = {
    mainCatPreviewLoading: false,
    mainCatPreview: {},
    mainCatUpdateLoading: false
}

const mainCatPreviewReducer = (state = init, action) => {
    
    switch (action.type) {
        case actionTypes.GET_MAIN_SERVICE_BY_ID_SUCCESS:
            return {
                ...state,
                mainCatPreview: action.payload
            }
        case actionTypes.HANDLE_MAIN_CAT_PREV_LOADING:
            return {
                ...state,
                mainCatPreviewLoading: action.payload
            }
        case actionTypes.HANDLE_MAIN_SERVICE_UPDATE_LOADER:
            return {
                ...state,
                mainCatUpdateLoading: action.payload
            }
        default:
            return state
    }
} 

export default mainCatPreviewReducer