import { compose, createStore, applyMiddleware } from "redux";
import rootReducers from "../reducers/rootReducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// redux-thunk
// 이 미들웨어는 객체 대신 함수를 생성하는 액션 생성함수를 작성 할 수 있게 해줍니다. 리덕스에서는 기본적으로는 액션 객체를 디스패치합니다. 일반 액션 생성자는, 다음과 같이 파라미터를 가지고 액션 객체를 생성하는 작업만합니다:

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

console.log(store.getState());

export default store;
