import {LOAD_DATA} from "./actionTypes";

export const loadItems = (data) => ({
  type: LOAD_DATA,
  data: data
});