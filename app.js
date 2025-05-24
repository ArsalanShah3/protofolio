
  const text = ["Web Developer", "Frontend Developer", "Backend Developer", "Full-Stack Developer"];
  let count = 0;
  let index = 0;
  let currentText = '';
  let letter = '';

  (function type() {
    if (count === text.length) {
      count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing-text").textContent = letter;

    if (letter.length === currentText.length) {
      count++;
      index = 0;
      setTimeout(type, 1000); // pause between words
    } else {
      setTimeout(type, 100);
    }
  })();



    const bars = document.querySelectorAll('.bar');
    const animateBars = () => {
      bars.forEach(bar => {
        bar.style.animationPlayState = 'running';
      });
    };
    window.addEventListener('scroll', () => {
      const skillsSection = document.querySelector('.skills');
      const sectionTop = skillsSection.offsetTop;
      if (window.scrollY + window.innerHeight > sectionTop + 100) {
        animateBars();
      }
    });


    
const container = document.getElementById("carousel");
const cards = container.querySelectorAll(".project-card");
const dotsContainer = document.querySelector(".carousel-dots");

let currentIndex = 0;

function createDots() {
  const gap = 30;
  const cardWidth = cards[0].offsetWidth;
  const totalCardWidth = cardWidth + gap;
  const containerWidth = container.parentElement.offsetWidth;
  const cardsPerView = Math.floor(containerWidth / totalCardWidth) || 1;

  // dots کی تعداد
  const dotsCount = Math.ceil(cards.length / cardsPerView);

  // dotsContainer صاف کریں
  dotsContainer.innerHTML = '';

  // dots بنائیں
  for(let i=0; i < dotsCount; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if(i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }
}

function updateCarousel() {
  const gap = 30;
  const cardWidth = cards[0].offsetWidth;
  const totalCardWidth = cardWidth + gap;
  const containerWidth = container.parentElement.offsetWidth;
  const cardsPerView = Math.floor(containerWidth / totalCardWidth) || 1;
  const maxIndex = Math.max(0, cards.length - cardsPerView);

  if (currentIndex > maxIndex) currentIndex = maxIndex;

  container.style.transform = `translateX(-${currentIndex * totalCardWidth}px)`;

  // current slide index for dots
  const currentSlideIndex = Math.floor(currentIndex / cardsPerView);

  // update dots
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlideIndex);
  });
}

function moveSlide(n) {
  const gap = 30;
  const cardWidth = cards[0].offsetWidth;
  const totalCardWidth = cardWidth + gap;
  const containerWidth = container.parentElement.offsetWidth;
  const cardsPerView = Math.floor(containerWidth / totalCardWidth) || 1;
  const maxIndex = Math.max(0, cards.length - cardsPerView);

  currentIndex += n;

  if (currentIndex > maxIndex) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = maxIndex;
  }

  updateCarousel();
}

function goToSlide(n) {
  const gap = 30;
  const cardWidth = cards[0].offsetWidth;
  const totalCardWidth = cardWidth + gap;
  const containerWidth = container.parentElement.offsetWidth;
  const cardsPerView = Math.floor(containerWidth / totalCardWidth) || 1;

  currentIndex = n * cardsPerView;

  updateCarousel();
}

window.addEventListener("resize", () => {
  createDots();
  updateCarousel();
});

// Initialize carousel on page load
createDots();
updateCarousel();
