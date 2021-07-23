import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("count");

//string 값을 써주기 전에 변수를씀으로 오타를 줄임
const ADD = "ADD";
const MINUS = "MINUS";

//reducer 데이터를 동기화하는동작 action 은 소통할수 있게 해준다
const countModifier = (count = 0, action) => {
  console.log(count, action)

  // 종류가 많을수도 있으니 switch 문으로 바꿔줌
  // if ( action.type === "ADD"){
  //   return count + 1;
  // } else if ( action.type === "MINUS"){
  //   return count -1;
  // }
  // return count;
  switch( action.type){
    case ADD :
      return count + 1;
    case MINUS :
      return count - 1;
    default :
      return count;
  }
};

//4개의 function을 가져온다
const countStore = createStore(countModifier);

//숫자의 변화를 담아준다
const onChange = () => {
  number.innerHTML = countStore.getState();
}

//숫자를 적용할수있게 배출? 해준다 리덕 subscribe의 기능
countStore.subscribe(onChange);

//action은 무조건 object여야한다
//또한 type이 존재해야한다
const handleAdd = () => {
  countStore.dispatch({ type: ADD })
}
const handleMinus = () => {
  countStore.dispatch({ type: MINUS })
}

//그중 getState함수 를 불러드림
add.addEventListener('click',handleAdd);
minus.addEventListener('click',handleMinus);

// number.innerHTML(number01)
