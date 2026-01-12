(function () {
  const slides = document.querySelectorAll(".slideshow img");
  const caption = document.getElementById("slideshowCaption");

  const captions = [
        "Presenting my CaveSeg Paper at ICRA 2024, Yokohama, Japan.",
        "Poster session at ICRA 2024.",
        "Deployment of NemeSys AUV at Ginnie Springs.",
        "Presenting poster on Underwater Data Center Surveillance at NELMS IoT Conference 2025.",
        "Attending my first IROS conference in Detroit, Michigan, 2023.",
      ];

  let idx = 0;
  const intervalMs = 2500;

  function show(i) {
    slides.forEach((img, k) => img.classList.toggle("active", k === i));
    if (caption && captions[i]) caption.textContent = captions[i];
  }

  if (slides.length > 0) {
    show(0);
    setInterval(() => {
      idx = (idx + 1) % slides.length;
      show(idx);
    }, intervalMs);
  }
})();

