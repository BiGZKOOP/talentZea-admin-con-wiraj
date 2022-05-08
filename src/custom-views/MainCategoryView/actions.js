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

//Use these to delete main services
export const deleteMainServiceListen = (id) => {

    return {
        type: actionTypes.MAIN_CAT_DELETE_LISTEN,
        payload: id
    }
}

export const deleteMainServiceSuccess = () => {

    return {
        type: actionTypes.MAIN_CAT_DELETE_SUCCESS
    }
}

//Use this to handle the main cat delete loader
export const handleMainCatDeleteLoader = (state) => {

    return {
        type: actionTypes.HANDLE_MAIN_CAT_DELETE_LOADER,
        payload: state
    }
}