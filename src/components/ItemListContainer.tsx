import React, { useState } from "react";
import { addCART, deleteCART } from "../action/action"; // 액션 가져오기
import { useSelector, useDispatch } from "react-redux"; // 리덕스 후크 가져오기
import store from "../store/store";

function ItemListContainer() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const state = useSelector((state: any) => state.itemReducer); // 스토어에서 itemReducer로 등록된 상태 가져오기
  const dispatch = useDispatch(); // 상태 업데이트 할 dispatch() 메소드 가져오기

  // 클릭 이벤트
  const handleSubmit = (item: any) => {
    item.preventDefault();
    dispatch(addCART({ title, price })); // dispatch()를 이용해서 action을 리듀서에 전달
  };

  const TitleHandleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const PriceHandleChange = (e: any) => {
    setPrice(e.target.value);
  };

  const handleDelete = (e: any) => {
    const targetId = e.target.parentNode.id;
    dispatch(deleteCART({ targetId }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={TitleHandleChange}></input>
        <input type="text" value={price} onChange={PriceHandleChange}></input>
        <button>add</button>
      </form>
      <ul>
        {state.map((el: any) => {
          return (
            <li id={el.id} key={el.id}>
              {el.title},{el.price}
              <button onClick={handleDelete}>click</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ItemListContainer;
