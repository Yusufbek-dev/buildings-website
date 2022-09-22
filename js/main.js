let hamburger = document.querySelector(".hamburger");
let bodyLeft = document.querySelector(".body__left");
let minNav = document.querySelector(".min-nav");

hamburger.addEventListener("click", ()=> {
  hamburger.classList.toggle("active");
  bodyLeft.classList.toggle("active");
  minNav.classList.toggle("active");
});

// document.querySelectorAll(".list a").forEach(item => {
//   item.addEventListener("click", ()=> {
//     hamburger.classList.remove("active");
//     nav.classList.remove("active");
//   });
// });
