const videos = ["002.mp4", "003.mp4", "004.mp4", "005.mp4", "006.mp4"];

const randomVideo = videos[Math.floor(Math.random() * videos.length)];
const backgroundVideo = document.createElement("video");
backgroundVideo.src = `videos/${randomVideo}`;
backgroundVideo.autoplay = true;
backgroundVideo.loop = true;
backgroundVideo.muted = true;
backgroundVideo.classList.add("background-video");

document.body.appendChild(backgroundVideo);

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

const audio = document.getElementById("space-audio");
const toggleAudioBtn = document.querySelector(".toggle-audio");

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
