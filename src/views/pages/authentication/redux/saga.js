import * as actionTypes from './constants'
// eslint-disable-next-line no-unused-vars
import {takeLatest, call} from "redux-saga/effects"
import {fireAlertCustom} from "../../../../utility/customUtils"
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

export function* loginUserCB(action) {
    const {data, history} = action
    try {
        yield call(loginAsync, data.email, data.password)
        history.push("/dashboard")
    } catch (e) {
        console.error(e)
    }
}

function* watchLoginSagas() {
    yield takeLatest(actionTypes.LOGIN_LISTEN, loginUserCB)
}

const loginSagas = [watchLoginSagas]

export default loginSagas