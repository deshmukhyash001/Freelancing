// FILTERS
function filterCards(theme, event) {
  document.querySelectorAll('.filters button')
    .forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  document.querySelectorAll('.card').forEach(card => {
    const cardTheme = card.dataset.theme;
    card.style.display =
      theme === 'all' || cardTheme === theme ? 'block' : 'none';
  });
}

// MODAL
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');

if (modal && modalImg) {
  document.querySelectorAll('.card img').forEach(img => {
    img.addEventListener('click', () => {
      modal.classList.add('show');
      modalImg.src = img.src;
    });
  });

  modal.addEventListener('click', () => modal.classList.remove('show'));
}

// CAROUSEL
const track = document.querySelector(".testimonial-track");
const slides = document.querySelectorAll(".testimonial-slide");

if (track && slides.length) {
  let index = 0;
  setInterval(() => {
    index = (index + 1) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
  }, 4000);
}
