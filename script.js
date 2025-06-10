let item = document.querySelectorAll(".nav-item");
let backgrounds = document.querySelectorAll(".nav-bg");

item.forEach((item, index) => {
  item.addEventListener("mouseenter", () => {
    gsap.to(backgrounds[index], {
      top: 0,
      duration: 0.3,
      ease: "power2.out"
    });
    gsap.to(item, {
      color: "#000", // text becomes black
      duration: 0.3
    });
  });

  item.addEventListener("mouseleave", () => {
    gsap.to(backgrounds[index], {
      top: "100%",
      duration: 0.3,
      ease: "power2.in"
    });
    gsap.to(item, {
      color: "#fff", // text returns to white
      duration: 0.3
    });
  });
});

