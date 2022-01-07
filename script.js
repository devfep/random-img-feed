const imgContainer = document.querySelector(".img-container");
const unsplashURL = "https://source.unsplash.com/random/";
const rows = 10;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement("img");
  img.src = `${unsplashURL}${getRandomSize()}`;
  imgContainer.appendChild(img);
}

function getRandomNbr() {
  return Math.floor(Math.random() * 10) + 300;
}

function getRandomSize() {
  return `${getRandomNbr()}x${getRandomNbr()}`;
}
