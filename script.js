const bg = document.querySelector(".bg");
const loading = document.querySelector(".loading");

let loadingCounter = 0;

let counter = setInterval(setBlur, 30);

function setBlur() {
  loadingCounter++;
  bg.style.filter = `blur(${scale(loadingCounter, 0, 100, 30, 0)}px)`;
  loading.innerHTML = `${loadingCounter}%`;

  if (loadingCounter > 99) {
    clearInterval(counter);
    loading.style.visibility = "hidden";
  }
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
