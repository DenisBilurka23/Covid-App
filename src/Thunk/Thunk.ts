import {getStatisticData} from "../Api/Api";
import {loadAllData, loadChange} from "../Redux/ActionCreator"
import {Dispatch} from "redux"
import {ActionTypes} from "../Types/Types";

export const getStatisticDataTC = () => {
    return async (dispatch: Dispatch<ActionTypes>) => {
        try {
            const data = await getStatisticData()
            if (data) {
                dispatch(loadAllData(data.Countries))
                dispatch(loadChange())
            }
        } catch (e) {
            console.log(e)
        }
    }
}
