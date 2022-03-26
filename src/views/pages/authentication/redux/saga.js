import * as actionTypes from './constants'
import {takeLatest, call} from "redux-saga/effects"
import qs from 'qs'

// eslint-disable-next-line no-unused-vars
const loginAsync = async (user) => {

    const params = new URLSearchParams()
    params.append("username", "Bashana")
    params.append("username", "1234")
    return axios.post(`/login`, qs.stringify({username:"Bashana", password:"1234"}), {
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
    }).then(res => console.log(res)).catch(err => console.log(err))
}

export function* loginUserCB() {

    try {
        const data = yield call(loginAsync, "buddini")
        console.log(data)
    } catch (e) {
        console.error(e)
    }
}

function* watchLoginSagas() {
    yield takeLatest(actionTypes.LOGIN_LISTEN, loginUserCB)
}

const loginSagas = [watchLoginSagas]

export default loginSagas