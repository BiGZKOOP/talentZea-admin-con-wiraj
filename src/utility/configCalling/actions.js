import * as actionTypes from './constants'

export const getStreet = (societyID) => {

    return {
        type: actionTypes.GET_STREET,
        societyID
    }
}

export const getStreetSuccess = (data) => {

    return {
        type: actionTypes.GET_STREET_SUCCESS,
        data
    }
}

export const getPostOffice = (societyID) => {

    return {
        type: actionTypes.GET_POST_OFFICE,
        societyID
    }
}

export const getPostOfficeSuccess = (data) => {

    return {
        type: actionTypes.GET_POST_OFFICE_SUCCESS,
        data
    }
}

export const getVillage = (societyID) => {

    return {
        type: actionTypes.GET_VILLAGE,
        societyID
    }
}

export const getVillageSuccess = (data) => {

    return {
        type: actionTypes.GET_VILLAGE_SUCCESS,
        data
    }
}

export const getArea = (societyID) => {

    return {
        type: actionTypes.GET_AREA,
        societyID
    }
}

export const getAreaSuccess = (data) => {

    return {
        type: actionTypes.GET_AREA_SUCCESS,
        data
    }
}

export const getValve = (societyID) => {

    return {
        type: actionTypes.GET_VALVE,
        societyID
    }
}

export const getValveSuccess = (data) => {

    return {
        type: actionTypes.GET_VALVE_SUCCESS,
        data
    }
}

export const getGADivision = (societyID) => {

    return {
        type: actionTypes.GET_GADIVISION,
        societyID
    }
}

export const getGADivisionSuccess = (data) => {

    return {
        type: actionTypes.GET_GADIVISION_SUCCESS,
        data
    }
}

export const getBillSector = (societyID) => {

    return {
        type: actionTypes.GET_BILL_SECTOR,
        societyID
    }
}

export const getBillSectorSuccess = (data) => {

    return {
        type: actionTypes.GET_BILL_SECTOR_SUCCESS,
        data
    }
}

export const getCategory = (societyID) => {

    return {
        type: actionTypes.GET_CATEGORY,
        societyID
    }
}

export const getCategorySuccess = (data) => {

    return {
        type: actionTypes.GET_CATEGORY_SUCCESS,
        data
    }
}