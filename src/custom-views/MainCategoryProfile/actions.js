import * as actionTypes from "./constants"

//Get main service by ID actions
export const getMainServiceByIdListen = (id) => {

    return {
        type: actionTypes.GET_MAIN_SERVICE_BY_ID_LISTEN,
        payload: id
    }
}

export const getMainServiceByIdSuccess = (mainService) => {

    return {
        type: actionTypes.GET_MAIN_SERVICE_BY_ID_SUCCESS,
        payload: mainService
    }
}

//Handle the main category preview loading
export const handleMainCatPreviewLoading = (state) => {

    return {
        type: actionTypes.HANDLE_MAIN_CAT_PREV_LOADING,
        payload: state
    }
}

//use this to update the main services by id
export const updateMainServiceByListen = (data) => {

    return {
        type: actionTypes.UPDATE_MAIN_SERVICE_BY_ID_LISTEN,
        payload: data
    }
}

export const updateMainServiceByIDSuccess = (data) => {

    return {
        type: actionTypes.GET_MAIN_SERVICE_BY_ID_SUCCESS,
        payload: data
    }
}