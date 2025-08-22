// ===== Hamburger Menu =====
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close menu on link click
document.querySelectorAll(".nav-menu a").forEach(link =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// ===== Scroll Animation =====
const animateElements = document.querySelectorAll('.project-card, .blog-post');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

animateElements.forEach(el => observer.observe(el));

// ===== Contact Form (EmailJS) =====
(function(){
  emailjs.init("wUyrTx0kMvfdK-B-h"); // <-- replace with your Public Key
})();

document.getElementById("contact-form").addEventListener("submit", function(e){
  e.preventDefault();

  emailjs.send("service_5wq5uwc", "template_jrovvhw", {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value
  })
  .then(() => {
    document.getElementById("form-status").innerText = "✅ Message sent successfully!";
  }, () => {
    document.getElementById("form-status").innerText = "❌ Failed to send. Please try again.";
  });
});
