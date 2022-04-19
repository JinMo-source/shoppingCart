// combineReducers
// 서로 다른 Reducing 함수들을 값으로 가지는 객체를 받아서  =>  { itemReducer, notificationReducer }
// { itemReducer, notificationReducer }  == { itemReducer : itemReducer, notificationReducer : notificationReducer }
// createStore에 인자로 넘길 수 있는 하나의 Reducing 함수로 바꿔준다. 즉, Function을 리턴한다.
// ※ combineReducers는 리듀서 계층의 최상위뿐만 아니라 어느 단계에서든 호출할 수 있다 !

//reducer는 데이터의 원본을 처리하는 과정을 한 눈에 볼 수 있는 중요한 위치이다.
import { combineReducers } from "redux";
import itemReducer from "./itemReducer";

const rootReducers = combineReducers({ itemReducer });

export default rootReducers;
