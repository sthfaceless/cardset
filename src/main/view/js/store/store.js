import {createStore} from "redux";
import {getInitialState} from "./initialState";
import {reducer} from "./reducers/reducer";

export const store = createStore(reducer, getInitialState())