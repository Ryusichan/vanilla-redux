//chapter01 redux start

import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      // mutate 해서는안된다 redux를 바꾸지말고 새로운state를 창조해야한다
      return [ {text: action.text, id: Date.now()} , ...state];
    case DELETE_TODO:
      const cleaned = state.filter(toDo => toDo.id !== action.id);
      // mutate 하지 않게 하기위해 slice 를안쓰고 filter 를 사용한다
      return cleaned;
      ;
    default:
      return state;
  }
};

// 함수로 리턴값 조정
const addTodo = text => {
  return{
    type: ADD_TODO,
    text
  }
}

const deleteToDo = id => {
  return {
    type: DELETE_TODO,
    id
  }
}


const store = createStore(reducer);

const dispatchAddToDo = text => {
  // function 을 변수로 만들어줌
  store.dispatch(addTodo(text))
}

const dispatchDeleteTodo = e => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id))
}

//내용 추가하기
const paintToDos = () => {
  //state 가져오기 function
  const toDos = store.getState();
  //순서가 여러번 추가안되게
  ul.innerHTML = "";
  //todo li 추가하는법
  toDos.forEach(toDo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerHTML = "DEL";
    btn.addEventListener('click', dispatchDeleteTodo)

    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  })
}

store.subscribe(paintToDos)

store.subscribe(() => console.log(store.getState()));

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);