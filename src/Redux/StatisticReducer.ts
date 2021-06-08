import {CHANGE_VALUE, LOAD_ALL, LOAD_CHANGE} from "./ActionTypes"
import {CountriesType} from '../Types/Types'


type initialStateType = {
    search: string
    isLoaded: boolean
    countries: Array<CountriesType>
}
const initialState:initialStateType = {
    search: '',
    isLoaded: false,
    countries: [
        {
            Country: 'Country',
            TotalConfirmed: 'Total Confirmed',
            ID: null,
            CountryCode: null,
            Slug: null,
            NewConfirmed: null,
            NewDeaths: null,
            TotalDeaths: null,
            NewRecovered: null,
            TotalRecovered: null,
            Date: null,
            Premium: null
        }
    ]
}

const StatisticReducer = (state = initialState, action: any) : initialStateType => {
    switch (action.type) {
        case LOAD_ALL: {
            return {
                ...state,
                countries: [...state.countries, ...action.payload]
            }
        }
        case CHANGE_VALUE: {
            return {
                ...state,
                search: action.search
            }
        }
        case LOAD_CHANGE: {
            return {
                ...state,
                isLoaded: true
            }
        }
        default:
            return state
    }
}
export default StatisticReducer
