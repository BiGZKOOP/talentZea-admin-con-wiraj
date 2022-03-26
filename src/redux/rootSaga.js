import {all, fork} from "redux-saga/effects"
import configSagas from "../utility/configCalling/saga"
import loginSagas from "../views/pages/authentication/redux/saga"

export default function* rootSaga() {

    yield all(configSagas.map((s) => fork(s)))
    yield all(loginSagas.map(s => fork(s)))
}