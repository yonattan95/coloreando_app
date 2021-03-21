import { combineReducers } from "redux";
import { mainReducer } from "../../features/home/presentation/redux/reducers";

//root reducer
export const rootReducer = combineReducers({
  index: mainReducer,
})