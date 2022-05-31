import * as actionTypes from "./constants"

//Use this to create the required page
export const createRequiredPageListen = (data) => {

    return {
        type: actionTypes.CREATE_REQUIRED_PAGE_LISTEN,
        payload: data
    }
}

export const createRequiredPageSuccess = () => {

    return {
        type: actionTypes.CREATE_REQUIRED_PAGE_SUCCESS
    }
}

//Use this to handle the create required page loader
export const handleCreateRequiredPageLoader = (payload) => {

    return {
        type: actionTypes.HANDLE_CREATE_REQUIRED_PAGE_LOADER,
        payload
    }
}

//Use this to get the required page
export const getRequirePageByIDListen = (payload) => {

    return {
        type: actionTypes.GET_REQUIRED_PAGE_LISTEN,
        payload
    }
}

export const getRequiredPageSuccess = (payload) => {

    return {
        type: actionTypes.GET_REQUIRED_PAGE_SUCCESS,
        payload
    }
}

//Use this to handle the get required page loader
export const handleGetRequiredPageLoader = (payload) => {

    return {
        type: actionTypes.HANDLE_GET_REQUIRED_PAGE_LOADER,
        payload
    }
}

//Use this to update the required page
export const updateRequiredPageListen = (payload) => {

    return {
        type: actionTypes.UPDATE_REQUIRED_PAGE_LISTEN,
        payload
    }
}

export const updateRequiredPageSuccess = () => {

    return {
        type: actionTypes.UPDATE_REQUIRED_PAGE_SUCCESS
    }
}

//Use this to handle the update required page loader
export const handleUpdateRequiredPageLoader = (payload) => {

    return {
        type: actionTypes.HANDLE_UPDATE_REQUIRED_PAGE_LOADER,
        payload
    }
}

//Use this to handle the delete required page
export const deleteRequiredPageListen = (payload) => {

    return {
        type: actionTypes.DELETE_REQUIRED_PAGE_LISTEN,
        payload
    }
}

export const deleteRequiredPageSuccess = () => {

    return {
        type: actionTypes.DELETE_REQUIRED_PAGE_SUCCESS
    }
}

//Use this to handle the delete required page loader
export const handleDeleteRequiredPageLoader = (payload) => {

    return {
        type: actionTypes.HANDLE_DELETE_REQUIRED_PAGE_LOADER,
        payload
    }
}