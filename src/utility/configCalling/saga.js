import {takeLatest, call} from "redux-saga/effects"
import * as actionTypes from './constants'
import axios from '../../Axios'

const getStreetAsync = (id) => {

    return axios.get(`v1/config/street/get-by?id=${id}`, {
        headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJCYXNoYW5hIiwicm9sZXMiOlsiUk9MRV9BRE1JTiJdLCJpc3MiOiIvYXBpL2xvZ2luIiwiZXhwIjoxNjQwMjc5OTI2fQ.-ZU4scDc8nEU2PeafoINoT-BizXZ3yVYoWwIAdzcEgQ` }

    })
}

//******************//
//**ASYNC END**//
//****************//

// eslint-disable-next-line no-unused-vars
export function* getStreetCB (payload) {
    const {societyID} = payload
    console.log(societyID)
    try {
        const data = yield call(getStreetAsync, societyID)
        console.log(data)
    } catch (e) {
        console.error(e)
    }
}

export function* getPostOfficeCB (societyID) {

    try {
        console.log(societyID)
    } catch (e) {
        console.error(e)
    }
}

export function* getVillageCB (societyID) {

    try {
        console.log(societyID)
    } catch (e) {
        console.error(e)
    }
}

export function* getAreaCB (societyID) {

    try {
        console.log(societyID)
    } catch (e) {
        console.error(e)
    }
}

export function* getValveCB (societyID) {

    try {
        console.log(societyID)
    } catch (e) {
        console.error(e)
    }
}

export function* getGADivisionCB (societyID) {

    try {
        console.log(societyID)
    } catch (e) {
        console.error(e)
    }
}

export function* getBillSectorCB (societyID) {

    try {
        console.log(societyID)
    } catch (e) {
        console.error(e)
    }
}

export function* getCategoryCB (societyID) {

    try {
        console.log(societyID)
    } catch (e) {
        console.error(e)
    }
}

function* watchConfigSaga () {
    yield takeLatest(actionTypes.GET_STREET, getStreetCB)
    yield takeLatest(actionTypes.GET_POST_OFFICE, getPostOfficeCB)
    yield takeLatest(actionTypes.GET_VILLAGE, getVillageCB)
    yield takeLatest(actionTypes.GET_AREA, getAreaCB)
    yield takeLatest(actionTypes.GET_VALVE, getValveCB)
    yield takeLatest(actionTypes.GET_GADIVISION, getGADivisionCB)
    yield takeLatest(actionTypes.GET_BILL_SECTOR, getBillSectorCB)
    yield takeLatest(actionTypes.GET_CATEGORY, getCategoryCB)
}

const configSagas = [watchConfigSaga]

export default configSagas