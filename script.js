const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section[id]");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

function setActiveLink(hash) {
  navItems.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === hash);
  });
}

navItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    navLinks.classList.remove("open");
    const targetId = item.getAttribute("href");
    setActiveLink(targetId);

    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY + window.innerHeight / 2;
  let currentSection = sections[0].getAttribute("id");

  sections.forEach((section) => {
    if (scrollPosition >= section.offsetTop) {
      currentSection = section.getAttribute("id");
    }
  });

  setActiveLink(`#${currentSection}`);
});



