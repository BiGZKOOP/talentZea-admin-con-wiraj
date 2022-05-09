import * as actionTypes from "./constants"

//Create main category actions
export const createMainCatListen = (data, history) => {
    return {
        type: actionTypes.CREATE_MAIN_SERVICE_LISTEN,
        payload:data,
        history
    }
}

export const createMainCatSuccess = () => {

    return {
        type: actionTypes.CREATE_MAIN_SERVICE_SUCCESS
    }
}

//Use this to handle the loading of main cat creation
export const handleMainCatCreateLoading = (state) => {

    return {
        type: actionTypes.HANDLE_MAIN_CREATE_LOADING,
        payload: state
    }
}