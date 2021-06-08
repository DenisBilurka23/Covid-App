import {CHANGE_VALUE, CLOSE_STAT, LOAD_ALL, LOAD_CHANGE, LOAD_MORE} from "./ActionTypes"
import {
    changeValueType,
    closeWindowType,
    CountriesType,
    baseContryType,
    loadMoreType,
    loadAllDataType, loadChangeType
} from '../Types/Types'

export const loadMore = (payload: baseContryType): loadMoreType => ({
    type: LOAD_MORE,
    Country: payload.Country,
    NewConfirmed: payload.NewConfirmed,
    TotalConfirmed: payload.TotalConfirmed,
    NewDeaths: payload.NewDeaths,
    TotalDeaths: payload.TotalDeaths,
    NewRecovered: payload.NewRecovered,
    TotalRecovered: payload.TotalRecovered,
    Date: payload.Date
})

export const loadAllData = (payload: Array<CountriesType>) : loadAllDataType => ({
    type: LOAD_ALL,
    payload
})

export const changeValue = (search: string): changeValueType => ({
    type: CHANGE_VALUE,
    search
})
export const closeWindow = (): closeWindowType => ({
    type: CLOSE_STAT
})

export const loadChange = (): loadChangeType => ({
    type: LOAD_CHANGE
})



