import * as actionTypes from './constants'

export const loginListen = (data, history) => {

    return {
        type: actionTypes.LOGIN_LISTEN,
        data,
        history
    }
}

export const loginSuccess = (data) => {

    return {
        type: actionTypes.LOGIN_SUCCESS,
        data
    }
}