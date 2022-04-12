import {call, put, takeLatest} from "redux-saga/effects"
import {
    getAllSubCatSuccess,
    getSubServiceByIDSuccess,
    handleGetSubCatByIDListen,
    handleSubCatCreateLoading,
    handleSubCatLoading, handleUpdateSubServiceLoader
} from "./action"
import axios from "../../axios/axios"
import * as actionTypes from "./constants"
// eslint-disable-next-line no-unused-vars
import {fireAlertError, fireAlertSuccess, getIDToken} from "../../utility/customUtils"

const getAllSubCatAsync = async () => {

    return await axios.get("/sub-service").then(res => res).catch(err => {
        console.error(err.message)
    })
}

const getSubCatByIDAsync = async (id) => {

    return await axios.get(`/sub-service/${id}`).then(res => res).catch(err => {
        console.error(err.message)
    })
}

const createSubCatAsync = async (data) => {

    const sendFormData = new FormData()

    data.faq.map((e, index) => {

        sendFormData.append(`faq[${index}][question]`, e["question"])
        sendFormData.append(`faq[${index}][answers]`, e["answers"])
    })

    delete data["faq"]

    Object.keys(data).map(async e => {
        await sendFormData.append(e, data[e])
    })

    return await axios.post("/sub-service", sendFormData, {
        headers: {
            'content-type': 'application/form-data',
            Authorization: `Bearer ${await getIDToken()}`
        }
    }).then(res => {
        fireAlertSuccess("You have created a new sub service !", "Could be a beginning of something great")
        return res
    }).catch(err => {
        console.error(err.message)
    })
}

const updateSubServiceByIDAsync = async (data, id) => {

    const sendFormData = new FormData()
    if (data?.faq) {
        alert("reached async 62")
        data?.faq?.map((e, index) => {

            sendFormData.append(`faq[${index}][question]`, e["question"])
            sendFormData.append(`faq[${index}][answers]`, e["answers"])
        })

        delete data["faq"]
    }

    Object.keys(data).map(async e => {
        await sendFormData.append(e, data[e])
    })

    return await axios.patch(`/sub-service/${id}`, sendFormData, {
        headers: {
            'content-type': 'application/form-data',
            Authorization: `Bearer ${await getIDToken()}`
        }
    }).then(res => {
        fireAlertSuccess("Updated", "You have successfully updated the sub service !")
        return res
    }).catch(err => {
        fireAlertError("hmm...", "Looks like something went wrong !")
        console.error(err.message)
    })
}

//////////////////
//ASYNC FINISHED//
//////////////////
export function* getAllSubCatCB() {

    try {
        yield put(handleSubCatLoading(true))
        const res = yield call(getAllSubCatAsync)
        yield put(getAllSubCatSuccess(res.data))
    } catch (err) {
        fireAlertError("Oops...", "asdsd")
    } finally {
        yield put(handleSubCatLoading(false))
    }
}

export function* getSubCatByIDCB(action) {

    const {payload} = action

    try {
        yield put(handleGetSubCatByIDListen(true))
        const res = yield call(getSubCatByIDAsync, payload)
        yield put(getSubServiceByIDSuccess(res.data))
    } catch (err) {
        console.error(err.message)
    } finally {
        yield put(handleGetSubCatByIDListen(false))
    }
}

export function* createSubCatCB(action) {

    const {payload, history} = action

    try {
        yield put(handleSubCatCreateLoading(true))
        yield call(createSubCatAsync, payload)
        history.push("/sub-category/view")
    } catch (err) {
        console.error(err.message)
    } finally {
        yield put(handleSubCatCreateLoading(false))
    }
}

export function* signoutUserCB() {

    // const {history} = action
    alert("reached 93 signout")
    try {
        alert("reached 93 signout")
    } catch (err) {
        console.error(err.message)
    }
}

export function* updateSubCatByIDCB(action) {

    const {payload, id} = action

    try {
        yield put(handleUpdateSubServiceLoader(true))
        const res = yield call(updateSubServiceByIDAsync, payload, id)
        yield put(getSubServiceByIDSuccess(res.data.data))
    } catch (err) {
        console.error(err.message)
    } finally {
        yield put(handleUpdateSubServiceLoader(false))
    }
}

function* watchSubCatSagas() {
    yield takeLatest(actionTypes.GET_ALL_SUB_CAT_LISTEN, getAllSubCatCB)
    yield takeLatest(actionTypes.GET_SUB_CAT_BY_ID_LISTEN, getSubCatByIDCB)
    yield takeLatest(actionTypes.CREATE_SUB_CAT_LISTEN, createSubCatCB)
    yield takeLatest(actionTypes.SIGNOUT_LISTEN, signoutUserCB)
    yield takeLatest(actionTypes.UPDATE_SUB_SERVICE_BY_ID_LISTEN, updateSubCatByIDCB)
}

const subServiceSagas = [watchSubCatSagas]

export default subServiceSagas