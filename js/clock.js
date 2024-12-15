const clock = document.querySelector("#clock");
const today = document.querySelector("#today");

function getClock() {
  const date = new Date(); //호출하는 당시의 현재 날짜랑 시간을 알려준다.
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function getToday() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // getMonth()는 0부터 시작하므로 +1 해줘야 함
  const day = String(date.getDate()).padStart(2, "0");
  today.innerText = `${year}.${month}.${day}`;
}

getClock(); //웹사이트가 로드되자마자 함수를 실행하고
setInterval(getClock, 1000); //매초마다 실행

getToday(); // 초기에 한 번 호출하여 현재 날짜를 설정
setInterval(getToday, 1000); // 매초마다 현재 날짜를 업데이트

clock.addEventListener("mouseover", () => {
  today.style.display = "block";
});

// #clock 요소에 호버 해제 이벤트 리스너 추가
clock.addEventListener("mouseout", () => {
  today.style.display = "none";
});
