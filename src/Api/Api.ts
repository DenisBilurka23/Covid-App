import axios from '../Axios/Axios'
import {CountriesType} from "../Types/Types";

type responseType = {
    Countries: Array<CountriesType>
    Date: string
    ID: string
    message: string
    Global: {
        Date: string
        NewConfirmed: number
        NewDeaths: number
        NewRecovered: number
        TotalConfirmed: number
        TotalDeaths: number
        TotalRecovered: number
    }
}
export const getStatisticData = async () => {
    const response = await axios.get<responseType>('summary')
    return response.data
}