import * as actionTypes from "./constants"

//Use this to get all the sub cat.
export const getAllSubCatListen = () => {

    return  {
        type: actionTypes.GET_ALL_SUB_CAT_LISTEN
    }
}

export const getAllSubCatSuccess = (data) => {

    return {
        type: actionTypes.GET_ALL_SUB_CAT_SUCCESS,
        payload: data
    }
}

//Use this to handle the sub cat. loading
export const handleSubCatLoading = (state) => {
    return {
        type: actionTypes.HANDLE_SUB_CAT_LOADING,
        payload: state
    }
}

//Get sub service by id
export const getSubServiceByIDListen = (id) => {

    return {
        type: actionTypes.GET_SUB_CAT_BY_ID_LISTEN,
        payload: id
    }
}

export const getSubServiceByIDSuccess = (data) => {

    return {
        type: actionTypes.GET_SUB_CAT_BY_ID_SUCCESS,
        payload: data
    }
}

//Use this to handle the loading of get sub cat by id
export const handleGetSubCatByIDListen = (state) => {

    return {
        type: actionTypes.HANDLE_SUB_CAT_BY_ID_LOADING,
        payload: state
    }
}

//Use this to create sub services
export const createSubCatServiceListen = (data, history) => {

    return {
        type: actionTypes.CREATE_SUB_CAT_LISTEN,
        payload: data,
        history
    }
}

export const createSubCatServiceSuccess = () => {
    return {
        type: actionTypes.CREATE_SUB_CAT_SUCCESS
    }
}

//Use this to handle sub cat creation loading
export const handleSubCatCreateLoading = (state) => {

    return {
        type: actionTypes.HANDLE_SUB_CAT_CREATE_LOADING,
        payload: state
    }
}