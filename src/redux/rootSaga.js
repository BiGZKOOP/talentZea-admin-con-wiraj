import {all, fork} from "redux-saga/effects"
import loginSagas from "../views/pages/authentication/redux/saga"
import mainCatSagas from "../custom-views/MainCategoryView/saga"
import mainServicePreviewSagas from "../custom-views/MainCategoryProfile/saga"
import createMainCatSagas from "../custom-views/MainCategoryCreate/saga"
import subServiceSagas from "../custom-views/SubCategoryView/saga"
import orderSagas from "../custom-views/OrderView/saga"
import dashboardSagas from "../custom-views/dashboard/saga"
import requiredSagas from "../custom-views/RequieredPage/saga"

export default function* rootSaga() {

    yield all(loginSagas.map(s => fork(s)))
    yield all(mainCatSagas.map(s => fork(s)))
    yield all(mainServicePreviewSagas.map(s => fork(s)))
    yield all(createMainCatSagas.map(s => fork(s)))
    yield all(subServiceSagas.map(s => fork(s)))
    yield all(orderSagas.map(s => fork(s)))
    yield all(dashboardSagas.map(s => fork(s)))
    yield all(requiredSagas.map(s => fork(s)))
}