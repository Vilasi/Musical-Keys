let audio = document.querySelector('audio');
window.addEventListener("click", function () {
    audio.currentTime = 0;
    audio.play();
});