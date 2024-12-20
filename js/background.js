const videos = ["002.mp4", "003.mp4", "004.mp4", "005.mp4", "006.mp4"];
const choiceBackground = document.querySelector(".choice-bg");
const audio = document.getElementById("space-audio");
const toggleAudioBtn = document.querySelector(".toggle-audio");
let currentBackground = null;

function setRandomBackground() {
  let availableVideos = videos.slice();

  // 현재 배경 비디오가 있다면 그 비디오를 제외
  if (currentBackground) {
    availableVideos = availableVideos.filter(
      (video) => video !== currentBackground
    );
  }

  // 새로 랜덤 비디오 선택
  const randomVideo =
    availableVideos[Math.floor(Math.random() * availableVideos.length)];

  // 현재 배경 비디오를 업데이트
  currentBackground = randomVideo;

  // 기존 비디오가 있으면 제거
  const existingVideo = document.querySelector(".background-video");
  if (existingVideo) {
    existingVideo.remove();
  }

  // 새로운 비디오 요소를 생성
  const backgroundVideo = document.createElement("video");
  backgroundVideo.src = `videos/${randomVideo}`;
  backgroundVideo.autoplay = true;
  backgroundVideo.loop = true;
  backgroundVideo.muted = true;
  backgroundVideo.classList.add("background-video");

  // 비디오를 문서에 추가
  document.body.appendChild(backgroundVideo);

  // 비디오 관련 이벤트는 비디오 생성 시 추가
  document.body.addEventListener("mouseover", (event) => {
    if (event.target !== document.body) {
      backgroundVideo.playbackRate = 0.5;
    }
  });

  document.body.addEventListener("mouseout", (event) => {
    if (event.target !== document.body) {
      backgroundVideo.playbackRate = 1;
    }
  });
}
window.addEventListener("load", setRandomBackground);
choiceBackground.addEventListener("click", setRandomBackground);

function playPauseClick() {
  if (audio.paused) {
    audio.play();
    toggleAudioBtn.classList.add("playing");
  } else {
    audio.pause();
    toggleAudioBtn.classList.remove("playing");
  }
}

toggleAudioBtn.addEventListener("click", playPauseClick);
