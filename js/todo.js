const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const todoIcon = document.getElementById("todo-icon");
const todoBox = document.getElementById("todoBox");

const TODOS_KEY = "todos";
let toDos = [];

function toggleToDoBox() {
  if (todoBox.style.display === "none" || todoBox.style.display === "") {
    todoBox.style.display = "block"; // todoBox 보이기
  } else {
    todoBox.style.display = "none"; // todoBox 숨기기
  }
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "x";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

// 폼 제출 이벤트 리스너
toDoForm.addEventListener("submit", handleToDoSubmit);

// 아이콘 클릭 이벤트 리스너 (todoBox 펼치기/접기)
todoIcon.addEventListener("click", toggleToDoBox);

// 로컬 스토리지에서 저장된 투두 목록 불러오기
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
