// Fade animation khi scroll

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {

  sections.forEach(section => {

    const top = window.scrollY;
    const offset = section.offsetTop - 400;

    if(top > offset){
      section.classList.add("show");
    }

  });

});

// Glow effect theo chuột

const glow = document.querySelector(".glow");

document.addEventListener("mousemove", (e) => {

  glow.style.left = e.clientX - 200 + "px";
  glow.style.top = e.clientY - 200 + "px";

});
