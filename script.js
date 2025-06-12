function website(){
  let item = document.querySelectorAll(".nav-item");
let backgrounds = document.querySelectorAll(".nav-bg");
const track = document.querySelector(".slider-track");
const images = gsap.utils.toArray(".slider-track h1,.dot");
let redmov=document.querySelector(".red2")



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


// X axis movement
gsap.to(".red2", {
  x: -70,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});

// Y axis movement
gsap.to(".red2", {
  y: 70,
  duration: 4,  // Different duration to make it natural floating
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});



const headings = document.querySelectorAll('.textp4');
const paras = document.querySelectorAll('.p1, .p2, .p3');
const imgs = document.querySelectorAll('.img1, .img2, .img3');

// Hide everything first
function hideAll() {
  paras.forEach(p => p.classList.add('hidden'));
  imgs.forEach(img => img.classList.add('hidden'));
}

// Reset all headings
function resetHeadings() {
  headings.forEach(h => {
    gsap.to(h, { color: '#504A45', fontSize: '60px', duration: 0.4, ease: 'power2.out' });
  });
}

// Click listener for each heading
headings.forEach(heading => {
  heading.addEventListener('click', () => {
    hideAll();
    resetHeadings();

    const id = heading.dataset.id;

    // Show correct paragraph and image
    document.querySelector(`.p${id}`).classList.remove('hidden');
    document.querySelector(`.img${id}`).classList.remove('hidden');

    // Animate clicked heading with GSAP
    gsap.to(heading, { color: '#ffffff', fontSize: '65px', duration: 0.4, ease: 'power2.out' });
  });
});

// Optional: show first one on load
hideAll();
resetHeadings();
document.querySelector('.p1').classList.remove('hidden');
document.querySelector('.img1').classList.remove('hidden');
gsap.to(headings[0], { color: '#ffffff', fontSize: '65px', duration: 0.4, ease: 'power2.out' });


gsap.to(".red5", {
  x: -90,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});

// Y axis movement
gsap.to(".red5", {
  y: 60,
  duration: 4,  // Different duration to make it natural floating
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});

const words = ["Environment", "Experience", "Content"];
  const wordEl = document.getElementById("word");

  const tl = gsap.timeline();

  words.forEach((word, i) => {
    tl.call(() => wordEl.textContent = word, null, i * 1.5)
      .fromTo(wordEl, { opacity: 0 }, { opacity: 1, duration: 0.3 })
      .to(wordEl, { opacity: 0, duration: 0.5, delay: 0.2 });
  });

  tl.to("#loader", { y: "-100%", duration: 0.8, ease: "power4.inOut" })
    .set("#loader", { display: "none" })
    .set("#main", { display: "block" });
}
website()

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
    });
