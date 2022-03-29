import {all, fork} from "redux-saga/effects"
import loginSagas from "../views/pages/authentication/redux/saga"
import mainCatSagas from "../custom-views/MainCategoryView/saga"

export default function* rootSaga() {

    yield all(loginSagas.map(s => fork(s)))
    yield all(mainCatSagas.map(s => fork(s)))
}