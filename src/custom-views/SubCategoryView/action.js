import * as actionTypes from "./constants"

//Use this to get all the sub cat.
export const getAllSubCatListen = () => {

    return  {
        type: actionTypes.GET_ALL_SUB_CAT_LISTEN
    }
}

export const getAllSubCatSuccess = (data) => {

    return {
        type: actionTypes.GET_ALL_SUB_CAT_SUCCESS,
        payload: data
    }
}

//Use this to handle the sub cat. loading
export const handleSubCatLoading = (state) => {
    return {
        type: actionTypes.HANDLE_SUB_CAT_LOADING,
        payload: state
    }
}