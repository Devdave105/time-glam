// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('active');
});

// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 5000);
// Fade in About section when visible
const aboutSection = document.querySelector('.about');

window.addEventListener('scroll', () => {
  const sectionTop = aboutSection.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight / 1.2;

  if (sectionTop < triggerPoint) {
    aboutSection.classList.add('show');
  }
});
// Show alert on all button clicks
const allButtons = document.querySelectorAll('button');

allButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default action
    alert("Site under construction");
  });
});
// Fade-in Testimonials on scroll
const testimonialCards = document.querySelectorAll('.testimonial-card');

window.addEventListener('scroll', () => {
  const triggerPoint = window.innerHeight / 1.2;

  testimonialCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerPoint) {
      card.classList.add('show');
    }
  });
});
// Lightbox for gallery images
const galleryItems = document.querySelectorAll('.gallery-grid .gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

galleryItems.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Site under construction');
});
const mediaBtn = document.querySelector('.media-cta .cta-btn');

mediaBtn.addEventListener('click', () => {
  alert('Site under construction');
});
