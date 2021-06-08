import {CLOSE_STAT, LOAD_MORE} from "./ActionTypes";
// import {ActionTypes} from "../Types/Types";

const initialState: initialStateType = {
    isShown: false,
    CountryInfo: {
        Country: null,
        TotalConfirmed: null,
        NewConfirmed: null,
        NewDeaths: null,
        TotalDeaths: null,
        NewRecovered: null,
        TotalRecovered: null,
        Date: null
    }
}
type initialStateType = {
    isShown: boolean
    CountryInfo: {
        Country: string | null
        TotalConfirmed: number | null
        NewConfirmed: number | null
        NewDeaths: number | null
        TotalDeaths: number | null
        NewRecovered: number | null
        TotalRecovered: number | null
        Date: string | null
    }
}
const ShowMoreReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case LOAD_MORE: {
            return {
                ...state,
                isShown: true,
                CountryInfo: {
                    ...state.CountryInfo,
                    Country: action.Country,
                    NewConfirmed: action.NewConfirmed,
                    TotalConfirmed: action.TotalConfirmed,
                    NewDeaths: action.NewDeaths,
                    TotalDeaths: action.TotalDeaths,
                    NewRecovered: action.NewRecovered,
                    TotalRecovered: action.TotalRecovered,
                    Date: action.Date
                }
            }
        }
        case CLOSE_STAT: {
            return {
                ...state,
                isShown: false
            }
        }
        default: return state
    }
}
export default ShowMoreReducer