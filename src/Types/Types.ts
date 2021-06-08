import {CHANGE_VALUE, CLOSE_STAT, LOAD_ALL, LOAD_CHANGE, LOAD_MORE} from "../Redux/ActionTypes";

export type CountriesType = {
    ID: string | null
    Country: string
    CountryCode: string | null
    Slug: string | null
    NewConfirmed: number | null
    TotalConfirmed: number | string
    NewDeaths: number | null
    TotalDeaths: number | null
    NewRecovered: number | null
    TotalRecovered: number | null
    Date: string | null
    Premium: {} | null
}
export interface loadMoreType extends baseContryType {
    type: typeof LOAD_MORE
}
export interface baseContryType {
    Country: string | null
    NewConfirmed: number | null
    TotalConfirmed: number | null
    NewDeaths: number | null
    TotalDeaths: number | null
    NewRecovered: number | null
    TotalRecovered: number | null
    Date: any
}
export type closeWindowType = {
    type: typeof CLOSE_STAT
}
export interface infoPropsType extends baseContryType{
    isShown?: boolean
    closeWindow: () => closeWindowType
}
export type changeValueType = {
    type: typeof CHANGE_VALUE
    search: string
}
export type loadAllDataType = {
    type: typeof LOAD_ALL
    payload: Array<CountriesType>
}
export type loadChangeType = {
    type: typeof LOAD_CHANGE
}

export type ActionTypes = loadAllDataType | changeValueType | closeWindowType | loadMoreType