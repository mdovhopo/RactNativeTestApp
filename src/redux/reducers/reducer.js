import {LOAD_DATA} from "../actions/actionTypes";

const loadItemsReducer = (state, action) => {
  return  {...state, photos: action.data};
};

const _state = {
  photos: []
};

const reducer = (state = _state, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return loadItemsReducer(state, action);
    default:
      return state;
  }
};

export default reducer;