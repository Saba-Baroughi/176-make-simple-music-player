let audioElem = document.querySelector("audio");
let musicSrc = ["media/html.m4a", "media/kar.m4a", "media/bazar.m4a"];
let audioIndex = 0;

function playHandler() {
  audioElem.play();
  console.log("music played");

  setInterval(function () {
    console.log(Math.floor(audioElem.currentTime));
  }, 1000);
}
function pauseHandler() {
  audioElem.pause();
  console.log("music paused");
}
function nextMusicHandler() {
  audioIndex++;
  if (audioIndex > musicSrc.length - 1) {
    audioIndex = 0;
  }
  audioElem.setAttribute("src", musicSrc[audioIndex]);
  playHandler();
}
function previousMusicHandler() {
  audioIndex--;
  if (audioIndex < 0) {
    audioIndex = 2;
  }
  audioElem.setAttribute("src", musicSrc[audioIndex]);
  playHandler();
}
function musicSpeedHandler() {
  audioElem.playbackRate = 2;
  console.log("speed 2x");
}
function timeMinuMusicHandler() {
  audioElem.currentTime -= 5;
}
function timePlusMusicHandler() {
  audioElem.currentTime += 5;
}
