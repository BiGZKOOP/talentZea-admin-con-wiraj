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

//Use this to sign out the user
export const signOutUserListen = (history) => {
    return {
        type: actionTypes.SIGNOUT_LISTEN,
        history
    }
}

//Use this to update the sub services
export const updateSubServiceByIDListen = (data, id) => {

    return {
        type: actionTypes.UPDATE_SUB_SERVICE_BY_ID_LISTEN,
        payload: data,
        id
    }
}

export const updateSubServiceByIDSuccess = (data) => {

    return {
        type: actionTypes.UPDATE_SUB_SERVICE_BY_ID_SUCCESS,
        payload: data
    }
}

//Use this to handle the sub service update loader
export const handleUpdateSubServiceLoader = (state) => {

    return {
        type: actionTypes.HANDLE_UPDATE_SUB_SERVICE_LOADER,
        payload: state
    }
}

//Use this to delete sub services
export const deleteSubCatByIDListen = (id) => {
    alert("reached !!")
    return {
        type: actionTypes.DELETE_SUB_CAT_LISTEN,
        payload: id
    }
}

export const deleteSubCatByIDSuccess = () => {

    return {
        type: actionTypes.DELETE_SUB_CAT_SUCCESS
    }
}

//Use this to handle sub cat delete loader
export const handleDeleteSubCatLoader = (state) => {

    return {
        type: actionTypes.HANDLE_SUB_CAT_LOADER,
        payload: state
    }
}