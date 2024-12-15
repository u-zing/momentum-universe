const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input[type='text']"); // 특정 input 타입을 선택
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); // 폼 제출 방지
  loginForm.classList.add(HIDDEN_CLASSNAME); // 폼 숨기기
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username); // 사용자 이름 저장
  paintGreetings(username); // 인사말 표시
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME); // 폼 보이기
  loginForm.addEventListener("submit", onLoginSubmit); // 폼 제출 이벤트 리스너 추가
} else {
  paintGreetings(savedUsername); // 저장된 사용자 이름으로 인사
}

function paintGreetings(username) {
  greeting.innerText = "Hello " + username;
  greeting.classList.remove(HIDDEN_CLASSNAME); // h1 요소 보이기

  // 애니메이션 재시작
  greeting.classList.remove("text-animated");
  void greeting.offsetWidth; // 리플로우 강제 발생
  greeting.classList.add("text-animated");
}
