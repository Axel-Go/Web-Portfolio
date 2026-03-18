const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

const revealElements = document.querySelectorAll(".about-content, .about-photo, .home-content");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight / 5 * 4;

  revealElements.forEach(el => {
    const elTop = el.getBoundingClientRect().top;

    if (elTop < triggerBottom) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
});



