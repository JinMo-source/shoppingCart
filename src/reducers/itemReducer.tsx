import { ADD_CART, DELETE_CART } from "../action/action";
interface Item {
  type: string;
  payload: { itemId: number; quantity: number };
}

const itemReducer = (state: any[], action: Item) => {
  switch (action.type) {
    case ADD_CART:
      return Object.assign({}, state, { ...state, name: action.payload });
    case DELETE_CART:
      let copyState2 = Object.assign({}, state);
      return (copyState2 = state.filter(
        (el) => el.itemId !== action.payload.itemId
      ));
    default:
      return state;
  }
};

export default itemReducer;
