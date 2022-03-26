import * as actionTypes from './constants'

const init = {
    street: [],
    postOffice: [],
    village: [],
    area: [],
    valve: [],
    gaDivision: [],
    billSector: [],
    category: []
}

const configReducer = (state = init, action) => {
    
    switch (action.type) {
        case actionTypes.GET_CATEGORY_SUCCESS: {
            return  {
                ...state,
                category: action.data
            }
        }

        case actionTypes.GET_STREET_SUCCESS: {
            return {
                ...state,
                street: action.data
            }
        }

        case actionTypes.GET_POST_OFFICE_SUCCESS: {
            return {
                ...state,
                postOffice: action.data
            }
        }

        case actionTypes.GET_VILLAGE_SUCCESS: {
            return {
                ...state,
                village: action.data
            }
        }

        case actionTypes.GET_AREA_SUCCESS: {
            return {
                ...state,
                area: action.data
            }
        }

        case actionTypes.GET_VALVE_SUCCESS: {
            return {
                ...state,
                valve: action.data
            }
        }

        case actionTypes.GET_GADIVISION_SUCCESS: {
            return {
                ...state,
                gaDivision: action.data
            }
        }

        case actionTypes.GET_BILL_SECTOR_SUCCESS: {
            return {
                ...state,
                gaDivision: action.data
            }
        }
        default: return state
    }
}

export default configReducer