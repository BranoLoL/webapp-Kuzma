const button = document.getElementById("holdButton");
const body = document.body;

// URL obrázka – môžeš zmeniť na vlastný
const backgroundImage = "Images/image.png";

button.addEventListener("mousedown", () => {
  body.style.backgroundImage = `url(${backgroundImage})`;
});

button.addEventListener("mouseup", () => {
  body.style.backgroundImage = "none";
});

button.addEventListener("mouseleave", () => {
  body.style.backgroundImage = "none";
});

// Pre mobilné zariadenia (touch)
button.addEventListener("touchstart", () => {
  body.style.backgroundImage = `url(${backgroundImage})`;
});

button.addEventListener("touchend", () => {
  body.style.backgroundImage = "none";
});