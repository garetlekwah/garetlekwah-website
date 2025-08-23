// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("show");
}


hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

footer {
  background: #273c75;
  color: white;
  text-align: center;
  padding: 40px 20px;
  position: relative;
}

footer .social-icons {
  margin-top: 15px;
}

footer .social-icons a img {
  width: 28px;
  height: 28px;
  margin: 0 10px;
  transition: transform 0.3s;
}

footer .social-icons a img:hover {
  transform: scale(1.2);
}

/* Back to Top Button */
#backToTop {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 100;
  font-size: 24px;
  border: none;
  outline: none;
  background-color: #273c75;
  color: white;
  cursor: pointer;
  padding: 12px 16px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  display: none; /* hidden by default */
  transition: background-color 0.3s, transform 0.3s;
}

#backToTop:hover {
  background-color: #1e60a6;
  transform: scale(1.1);
}



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
