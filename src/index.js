const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("count");

let count = 0;
number.innerText = count;

const updateText = () => {
  number.innerText = count;
}

const handleAdd = () => {
  count = count + 1;
  updateText()
}
const handleMinus = () => {
  count = count - 1;
  updateText()
}
console.log(count)
add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);