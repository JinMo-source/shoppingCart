import React from "react";
import { addCART, ADD_CART } from "../action/action"; // 액션 가져오기
import { useSelector, useDispatch } from "react-redux"; // 리덕스 후크 가져오기
import store from "../store/store";

function ItemListContainer() {
  const state = useSelector((state: any) => state.itemReducer); // 스토어에서 itemReducer로 등록된 상태 가져오기
  const { items, cartItems } = state; // 상태가 객체이고 구조분해 한다.
  const dispatch = useDispatch(); // 상태 업데이트 할 dispatch() 메소드 가져오기
  // 클릭 이벤트
  console.log(dispatch);
  const handleSubmit = (item: any) => {
    item.preventDefault();
    console.log(item.target[0].value);
    dispatch(
      addCART({
        payload: {
          itemId: item.target[0].value,
        },
      })
    ); // dispatch()를 이용해서 action을 리듀서에 전달
    console.log(store.getState());
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"></input>
        <button>222</button>
      </form>
    </div>
  );
}

export default ItemListContainer;
