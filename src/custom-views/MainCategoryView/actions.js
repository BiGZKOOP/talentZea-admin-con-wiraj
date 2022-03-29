import * as actionTypes from "./constants"

//Get all main Cats
export const getAllMainCatListen = () => {

    return {
        type: actionTypes.GET_MAIN_SERVICES_LISTEN
    }
}

export const getAllMainCatSuccess = (data) => {
    return {
        type: actionTypes.GET_MAIN_SERVICE_SUCCESS,
        data
    }
}

//Use this to handle mainCat loader
//start:- TRUE
//end:- FALSE
export const handleMainCatLoader = (state) => {
    return {
        type: actionTypes.MAIN_CAT_LOADING_HANDLE,
        state
    }
}