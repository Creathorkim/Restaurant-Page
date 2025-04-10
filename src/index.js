import loadHome from "./home";
import loadContact from "./contact";
import loadMenu from "./menu";

document.addEventListener("DOMContentLoaded", () => {
  loadHome();
  const content = document.getElementById("content");

  document.getElementById("home-btn").addEventListener("click", (e) => {
    e.preventDefault();
    content.innerHTML = "";
    loadHome();
  });
  document.getElementById("contact-btn").addEventListener("click", (e) => {
    e.preventDefault();
    content.innerHTML = "";
    loadContact();
  });
  document.getElementById("menu-btn").addEventListener("click", (e) => {
    e.preventDefault();
    content.innerHTML = "";
<<<<<<< HEAD
    loadMenu()
=======
    loadMenu();
>>>>>>> 1e5ed28780369d3f0bee55362e6c3624d5f7ecd5
  });
});
