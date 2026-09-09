const slider = document.getElementById('tipo-slider');

if (slider) {
  const images = Array.from(slider.querySelectorAll('img'));

  if (images.length > 1) {
    let currentIndex = 0;
    const slideDuration = 7000;

    setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, slideDuration);
  }
}
