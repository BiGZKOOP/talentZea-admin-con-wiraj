import {call, put, takeLatest} from "redux-saga/effects"
import {
    getAllSubCatListen,
    getAllSubCatSuccess,
    getSubServiceByIDSuccess, handleDeleteSubCatLoader,
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

    sendFormData.append(`revisions[hide]`, data?.revisions?.hide)
    sendFormData.append(`revisions[price]`, data?.revisions?.price)
    sendFormData.append(`revisions[count]`, data?.revisions?.count)

    sendFormData.append(`sourceFiles[hide]`, data?.sourceFiles?.hide)
    sendFormData.append(`sourceFiles[price]`, data?.sourceFiles?.price)

    sendFormData.append(`expressDelivery[hide]`, data?.expressDelivery?.hide)
    sendFormData.append(`expressDelivery[price]`, data?.expressDelivery?.price)
    sendFormData.append(`expressDelivery[count]`, data?.expressDelivery?.count)

    delete data["revisions"]
    delete data["sourceFiles"]
    delete data["expressDelivery"]

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
        data?.faq?.map((e, index) => {
            sendFormData.append(`faq[${index}][question]`, e["question"])
            sendFormData.append(`faq[${index}][answers]`, e["answers"])
        })

        delete data["faq"]
    }

    sendFormData.append(`revisions[hide]`, data?.revisions?.hide)
    sendFormData.append(`revisions[price]`, data?.revisions?.price)
    sendFormData.append(`revisions[count]`, data?.revisions?.count)

    sendFormData.append(`sourceFiles[hide]`, data?.sourceFiles?.hide)
    sendFormData.append(`sourceFiles[price]`, data?.sourceFiles?.price)

    sendFormData.append(`expressDelivery[hide]`, data?.expressDelivery?.hide)
    sendFormData.append(`expressDelivery[price]`, data?.expressDelivery?.price)
    sendFormData.append(`expressDelivery[count]`, data?.expressDelivery?.count)

    delete data["revisions"]
    delete data["sourceFiles"]
    delete data["expressDelivery"]

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

const handleDeleteSubCatByIDAsync = async (id) => {

    return await axios.patch(`/sub-service/delete/${id}`, {}, {
        headers: {
            Authorization: `Bearer ${await getIDToken()}`
        }
    }).then(res => {
        return res
    }).catch(err => {
        console.log(err)
        fireAlertError("Oops !", "You can't delete main service without deleting it's sub services !")
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

export function* deleteSubCatByIDCB(action) {

    const {payload} = action

    try {
        yield put(handleDeleteSubCatLoader(true))
        yield call(handleDeleteSubCatByIDAsync, payload)
        yield put(getAllSubCatListen())
    } catch (err) {
        console.error(err.message)
    } finally {
        yield put(handleDeleteSubCatLoader(false))
    }
}

function* watchSubCatSagas() {
    yield takeLatest(actionTypes.GET_ALL_SUB_CAT_LISTEN, getAllSubCatCB)
    yield takeLatest(actionTypes.GET_SUB_CAT_BY_ID_LISTEN, getSubCatByIDCB)
    yield takeLatest(actionTypes.CREATE_SUB_CAT_LISTEN, createSubCatCB)
    yield takeLatest(actionTypes.SIGNOUT_LISTEN, signoutUserCB)
    yield takeLatest(actionTypes.UPDATE_SUB_SERVICE_BY_ID_LISTEN, updateSubCatByIDCB)
    yield takeLatest(actionTypes.DELETE_SUB_CAT_LISTEN, deleteSubCatByIDCB)
}

const subServiceSagas = [watchSubCatSagas]

export default subServiceSagas