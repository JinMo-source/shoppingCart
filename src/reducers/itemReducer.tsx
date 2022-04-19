import { ADD_CART, DELETE_CART } from "../action/action";
import store from "../store/store";

const itemReducer = (state = [], action: any) => {
  switch (action.type) {
    case ADD_CART:
      console.log(action);
      return [...state, { payload: action.payload.itemId }];
    default:
      return state;
  }
};

export default itemReducer;
