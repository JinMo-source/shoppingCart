// 액션 타입을 선언합니다
// 뒤에 as const 를 붙여줌으로써 나중에 액션 객체를 만들게 action.type 의 값을 추론하는 과정에서
// action.type 이 string 으로 추론되지 않고 'counter/INCREASE' 와 같이 실제 문자열 값으로 추론 되도록 해줍니다.
// action은 "무엇을"만 정의해준다. "어떻게(Reducers)"에 대한 처리 과정은 포함하지 않는 것이 핵심이다.

export const ADD_CART = "ADD_CART" as const;
export const DELETE_CART = "DELETE_CART" as const;

export const addCART = (itemId: any) => {
  return {
    type: ADD_CART,
    payload: {
      itemId,
      id: Date.now,
    },
  };
};

export const deleteCART = (itemId: string) => {
  return {
    type: DELETE_CART,
    payload: {
      itemId,
    },
  };
};
