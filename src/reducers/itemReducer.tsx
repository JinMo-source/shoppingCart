import { ADD_TO_CART, DELETE_TO_CART } from "../action/action";

const itemReducer = (state = [], action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log(state);
      return [
        ...state,
        {
          title: action.payload.title,
          price: action.payload.price,
          id: action.payload.id,
        },
      ];
    case DELETE_TO_CART:
      console.log(state);
      const stateFilter = state.filter((el: any) => el.id != action.payload.id);
      return [...stateFilter];
    default:
      return state;
  }
};

export default itemReducer;
