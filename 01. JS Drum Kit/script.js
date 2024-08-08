window.addEventListener("keydown", (e) => {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();

  const keys = document.querySelectorAll(".key");

  keys.forEach((key) => {
    key.addEventListener("transitionend", (e) => {
      if (e.propertyName !== "transform") return;
      e.target.classList.remove("playing");
    });
  });
});