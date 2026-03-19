// Hamburger menu toggle
const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

const links = document.querySelectorAll('#nav-links a');

links.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});


// Contact form handling with EmailJS
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
const button = document.getElementById('submit-btn');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  button.innerText = 'Sending...';
  button.disabled = true;

  emailjs
    .sendForm(
      'service_xzcywie', // from EmailJS
      'template_0e6u8sf', // from EmailJS
      this,
    )
    .then(() => {
      status.innerText = '✅ Message sent successfully!';
      form.reset();
    })
    .catch(() => {
      status.innerText = '❌ Failed to send message. Try again.';
    })
    .finally(() => {
      button.innerText = 'Send Message';
      button.disabled = false;
    });
});