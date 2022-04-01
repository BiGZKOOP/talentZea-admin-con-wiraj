import {all, fork} from "redux-saga/effects"
import loginSagas from "../views/pages/authentication/redux/saga"
import mainCatSagas from "../custom-views/MainCategoryView/saga"
import mainServicePreviewSagas from "../custom-views/MainCategoryProfile/saga"

export default function* rootSaga() {

    yield all(loginSagas.map(s => fork(s)))
    yield all(mainCatSagas.map(s => fork(s)))
    yield all(mainServicePreviewSagas.map(s => fork(s)))
}