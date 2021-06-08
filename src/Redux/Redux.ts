import {applyMiddleware, combineReducers, createStore} from "redux"
import StatisticReducer from "./StatisticReducer"
import ShowMoreReducer from "./ShowMoreReducer"
import ThunkMiddleware from 'redux-thunk'

const reducers = {
    StatisticReducer,
    ShowMoreReducer
}
const rootReducer = combineReducers(reducers)
type rootReducerType = typeof rootReducer
export type stateType = ReturnType<rootReducerType>

const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware))
export default store