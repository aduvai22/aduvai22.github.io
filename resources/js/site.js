(function () {
  const slideshow = document.querySelector(".slideshow");
  if (!slideshow) return;

  const slides = slideshow.querySelectorAll("img");
  const caption = document.getElementById("slideshowCaption");
  const dotsWrap = slideshow.querySelector(".slideshow-dots");
  const prevBtn = slideshow.querySelector(".slide-btn.prev");
  const nextBtn = slideshow.querySelector(".slide-btn.next");

  const captions = [
    "Presenting my CaveSeg Paper at ICRA 2024, Yokohama, Japan.",
    "CaveSeg Poster session at ICRA 2024.",
    "Deploying NemeSys AUV at Ginnie Springs, FL.",
    "Presenting poster on Underwater Data Center Surveillance at NELMS IoT Conference 2025.",
    "Showcasing CavePI AUV and OpenRover UGV.",
    "Attending my first IROS conference in Detroit, Michigan, 2023.",
    "Presenting distributed light-field sensing project at RUNE Workshop, ICRA 2024.",
    "Meet the marine robotics fleet at RoboPI Lab: BlueBoat ASV, NemoSens AUV, BlueROV2.",
    "Explaining my mobile water-quality monitoring module at the CCS Summit, 2023.",
  ];

  let idx = 0;
  const intervalMs = 3000;
  let timer = null;

  // Build dots (one per slide)
  const dots = [];
  if (dotsWrap) {
    slides.forEach((_, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "slideshow-dot";
      b.setAttribute("aria-label", `Go to photo ${i + 1}`);
      b.addEventListener("click", () => {
        goTo(i);
        restartAutoplay();
      });
      dotsWrap.appendChild(b);
      dots.push(b);
    });
  }

  function render() {
    slides.forEach((img, k) => img.classList.toggle("active", k === idx));
    if (caption && captions[idx]) caption.textContent = captions[idx];
    dots.forEach((d, k) => d.classList.toggle("active", k === idx));
  }

  function goTo(i) {
    idx = (i + slides.length) % slides.length;
    render();
  }

  function next() { goTo(idx + 1); }
  function prev() { goTo(idx - 1); }

  function startAutoplay() {
    if (slides.length <= 1) return;
    timer = setInterval(next, intervalMs);
  }

  function stopAutoplay() {
    if (timer) clearInterval(timer);
    timer = null;
  }

  function restartAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  // Button events
  if (prevBtn) prevBtn.addEventListener("click", () => { prev(); restartAutoplay(); });
  if (nextBtn) nextBtn.addEventListener("click", () => { next(); restartAutoplay(); });

  // Optional: pause autoplay on hover (desktop)
  slideshow.addEventListener("mouseenter", stopAutoplay);
  slideshow.addEventListener("mouseleave", startAutoplay);

  // Init
  render();
  startAutoplay();
})();
