import { legacy_createStore, combineReducers } from "redux"
import { countReducer } from "../reducer/countReducer"
import { colorReducer } from "../reducer/colorReducer"

const rootReducer = combineReducers({ countReducer, colorReducer })


export const store = legacy_createStore(rootReducer)