import * as actionTypes from "./constants"

//Create main category actions
export const createMainCatListen = (data) => {

    return {
        type: actionTypes.CREATE_MAIN_SERVICE_LISTEN,
        payload:data
    }
}

export const createMainCatSuccess = () => {

    return {
        type: actionTypes.CREATE_MAIN_SERVICE_SUCCESS
    }
}