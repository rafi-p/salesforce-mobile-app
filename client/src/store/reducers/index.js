import { combineReducers } from "redux";
import target from "./target";
import wajib from "./wajib";
import optional from "./optional";
import rewards from "./rewards";

export default combineReducers({
  target,
  wajib,
  optional,
  rewards,
});
