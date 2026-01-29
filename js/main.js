document.addEventListener("DOMContentLoaded", () => {

    /* ================= CURSOR FOLLOW ================= */
    const cursor = document.querySelector(".cursor");
  
    if (cursor) {
      document.addEventListener("mousemove", e => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      });
  
      document.querySelectorAll("a, .card, .project-card, .cta, .hero-img")
      .forEach(el => {
        el.addEventListener("mouseenter", () => {
          cursor.style.transform = "translate(-50%,-50%) scale(1.6)";
        });
        el.addEventListener("mouseleave", () => {
          cursor.style.transform = "translate(-50%,-50%) scale(1)";
        });
      });
    }
  
    /* ================= SCROLL REVEAL ================= */
    const reveals = document.querySelectorAll(".reveal");
  
    function reveal() {
      reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });
    }
  
    window.addEventListener("scroll", reveal);
    reveal();
  
    /* ================= NAVBAR ACTIVE ================= */
    const links = document.querySelectorAll(".nav-link");
    const page = location.pathname.split("/").pop() || "index.html";
  
    links.forEach(link => {
      if (link.getAttribute("href") === page) {
        link.classList.add("active");
      }
    });
  
  });
  