const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".nav a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

const roles = ["Web Developer", "App Explorer", "Creative Thinker", "AI Enthusiast"];
let roleIndex = 0;
const roleText = document.getElementById("role-text");
setInterval(() => {
  roleText.classList.add("fade");
  setTimeout(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleText.textContent = roles[roleIndex];
    roleText.classList.remove("fade");
  }, 250);
}, 2400);

document.getElementById("year").textContent = new Date().getFullYear();

const lightbox = document.getElementById("lightbox");
const preview = lightbox.querySelector("img");
document.querySelectorAll(".certificate").forEach(card => {
  card.addEventListener("click", () => {
    preview.src = card.dataset.image;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });
});
function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  preview.src = "";
}
lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", event => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", event => { if (event.key === "Escape") closeLightbox(); });
