import addToCard from "./addToCard";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    addToCard: addToCard
})
export default rootReducer