let item = document.querySelectorAll(".nav-item");
let backgrounds = document.querySelectorAll(".nav-bg");
const track = document.querySelector(".slider-track");
const images = gsap.utils.toArray(".slider-track h1,.dot");

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

function movingimg(){
    images.forEach(img => {
        const clone = img.cloneNode(true);
        track.appendChild(clone);
      });
      
      const totalWidth = track.scrollWidth / 2;
      
      gsap.to(track, {
        x: -totalWidth,
        duration: 35,
        ease: "slow",
        repeat: -1
      });
}

movingimg()

let containers = document.querySelectorAll('.container');

containers.forEach(function(container) {
    let image = container.querySelector('.image');

    container.addEventListener('mouseenter', function() {
        image.classList.remove('hidden');
    });

    container.addEventListener('mouseleave', function() {
        image.classList.add('hidden');
    });
});

let containerss = document.querySelectorAll('.container');

containerss.forEach(function(container) {
  let image = container.querySelector('.image');
  let bgLayer = container.querySelector('.bg-layer');

  container.addEventListener("mouseenter", () => {
    // Show image
    image.classList.remove('hidden');
    
    // Animate background layer slide down
    bgLayer.style.top = '0';
  });

  container.addEventListener("mouseleave", () => {
    // Hide image
    image.classList.add('hidden');
    
    // Animate background layer slide up
    bgLayer.style.top = '-100%';
  });
});

