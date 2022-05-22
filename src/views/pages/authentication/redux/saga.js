import * as actionTypes from './constants'
// eslint-disable-next-line no-unused-vars
import {takeLatest, call} from "redux-saga/effects"
import {fireAlertCustom, fireAlertError} from "../../../../utility/customUtils"
import {Auth} from "aws-amplify"

// eslint-disable-next-line no-unused-vars
const loginAsync = async (username, password) => {

    return await Auth.signIn(username, password).then(() => {
        window.localStorage.setItem("user", "logged")
    }).catch((err) => {
        fireAlertCustom("hmmm...", err.message, "error")
        return false
    })
}


// eslint-disable-next-line no-unused-vars
const signoutUserAsync = async (history) => {

    return await Auth.signOut().then(() => {
        localStorage.remove("user")
        history.push("/login")
    }).catch(err => {
        console.error(err.message)
    })
}
///////////////////
//ASYNC FINISHED//
/////////////////

export function* loginUserCB(action) {

    const {data, history} = action
    try {
        alert(process.env.REACT_APP_ADMIN_PW)
        if (process.env.REACT_APP_ADMIN_PW === data.password && process.env.REACT_APP_ADMIN_USERNAME === data.email) {
            window.localStorage.setItem("user", "logged")
            history.push("/dashboard")
        } else {
            fireAlertError("Oops !", "User credentials are wrong.")
        }
        // yield call(loginAsync, data.email, data.password)
    } catch (e) {
        console.error(e)
    }
}

export function* signoutCB(action) {
    const {history} = action

    try {
        localStorage.remove("user")
        history.push("/login")
        // yield call(signoutUserAsync, history)
    } catch (err) {
        console.error(err.message)
    }
}

export function* testCB() {
    try {
    } catch (e) {
        console.error(e)
    }
}

function* watchLoginSagas() {
    yield takeLatest(actionTypes.SIGNUP_SUCCESS, testCB)
    yield takeLatest(actionTypes.LOGIN_LISTEN, loginUserCB)
    yield takeLatest(actionTypes.SIGNUP_OUT, signoutCB)
}

const loginSagas = [watchLoginSagas]

export default loginSagas