import * as actionTypes from './constants'
// eslint-disable-next-line no-unused-vars
import {takeLatest, call} from "redux-saga/effects"
import {fireAlertCustom} from "../../../../utility/customUtils"
import {Auth} from "aws-amplify"

const loginAsync = async (username, password) => {

    return await Auth.signIn(username, password).then(() => {
        window.localStorage.setItem("user", "logged")
    }).catch((err) => {
        fireAlertCustom("hmmm...", err.message, "error")
        return false
    })
}


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
        yield call(loginAsync, data.email, data.password)
        history.push("/dashboard")
    } catch (e) {
        console.error(e)
    }
}

export function* signoutCB(action) {
    const {history} = action

    try {
        yield call(signoutUserAsync, history)
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