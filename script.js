// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("show");
}


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
// Initialize EmailJS
(function(){
  emailjs.init("wUyrTx0kMvfdK-B-h"); // <-- your public key
})();

// Contact form submission
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.send("service_5wq5uwc", "template_jrovvhw", {
    from_name: contactForm.name.value,
    from_email: contactForm.email.value,
    message: contactForm.message.value
  })
  .then(function(response) {
    formStatus.textContent = "✅ Message sent successfully!";
    formStatus.style.color = "green";
    contactForm.reset();
  }, function(error) {
    formStatus.textContent = "❌ Failed to send. Please try again.";
    formStatus.style.color = "red";
  });
});
// Back to Top Button
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
