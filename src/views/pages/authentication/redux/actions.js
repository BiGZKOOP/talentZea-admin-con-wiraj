import * as actionTypes from './constants'

export const loginListen = () => {

    return {
        type: actionTypes.LOGIN_LISTEN
    }
}

export const loginSuccess = (data) => {

    return {
        type: actionTypes.LOGIN_SUCCESS,
        data
    }
}