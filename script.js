// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Project Cards Animation
const projectCards = document.querySelectorAll('.project-card');

window.addEventListener('scroll', () => {
  projectCards.forEach(card => {
    const cardPos = card.getBoundingClientRect().top;
    if(cardPos < window.innerHeight - 100){
      card.style.transform = "translateY(0)";
      card.style.opacity = "1";
    }
  });
});
