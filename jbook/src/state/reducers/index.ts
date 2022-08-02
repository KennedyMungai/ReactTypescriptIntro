import { combineReducers } from "redux";
import cellsReducer from './cellReducer';

const reducers = combineReducers({
    cells: cellsReducer
});

export default reducers;