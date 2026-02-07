const cards = document.querySelectorAll(".card");
const popup = document.getElementById("popup");
const popupText = document.getElementById("popupText");
const closeBtn = document.querySelector(".close");

cards.forEach(card => {
  card.addEventListener("click", () => {
    popupText.textContent = card.dataset.message;
    popup.classList.add("show");
  });
});

closeBtn.addEventListener("click", () => {
  popup.classList.remove("show");
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove("show");
  }
});
