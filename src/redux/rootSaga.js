import {all, fork} from "redux-saga/effects"
import loginSagas from "../views/pages/authentication/redux/saga"

export default function* rootSaga() {

    yield all(loginSagas.map(s => fork(s)))
}