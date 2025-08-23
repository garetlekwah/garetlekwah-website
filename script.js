document.addEventListener("DOMContentLoaded", () => {

  // Hamburger Menu Toggle
  const hamburger = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Project Cards Animation
  const projectCards = document.querySelectorAll('.card'); // corrected selector
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
  emailjs.init("wUyrTx0kMvfdK-B-h"); // your public key

  // Contact form submission
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  if(contactForm) {
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
  }

  // Firebase config
  const firebaseConfig = { 
    apiKey: "YOUR_API_KEY", 
    authDomain: "YOUR_AUTH_DOMAIN", 
    projectId: "YOUR_PROJECT_ID" 
  };
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  // Login
  const loginForm = document.getElementById('login-form');
  const loginStatus = document.getElementById('login-status');

  if(loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => { window.location.href = 'dashboard.html'; })
        .catch(error => { loginStatus.textContent = "❌ "+error.message; });
    });
  }

});
