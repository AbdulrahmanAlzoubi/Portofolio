const photo = document.querySelector("#profile-photo");
const switchButton = document.querySelector("#switch-photo");
const photos = [
  { src: "assets/avatar.svg", alt: "Abstract geometric crimson profile illustration" },
  { src: "assets/avatar-alt.svg", alt: "Alternate abstract geometric crimson profile illustration" }
];
let activePhoto = 0;
switchButton.addEventListener("click", () => {
  activePhoto = (activePhoto + 1) % photos.length;
  photo.classList.add("changing");
  window.setTimeout(() => {
    photo.src = photos[activePhoto].src;
    photo.alt = photos[activePhoto].alt;
    photo.classList.remove("changing");
    switchButton.setAttribute("aria-pressed", String(activePhoto === 1));
  }, 120);
});
