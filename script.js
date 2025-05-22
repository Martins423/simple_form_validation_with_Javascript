
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';
    // document.getElementById('formError').textContent = '';
    document.getElementById('formSuccess').textContent = '';

    //  Get input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // declare valid
    let valid = true;

    // Name validation
    if (name === '') {
      document.getElementById('nameError').textContent = 'Name is required';
      valid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
      document.getElementById('emailError').textContent = 'Email is required';
      valid = false;
    } else if (!emailPattern.test(email)) {
      document.getElementById('emailError').textContent = 'Invalid email format';
      valid = false;
    }

    // Message validation
    if (message.length < 10) {
      document.getElementById('messageError').textContent = 'Message must be at least 10 characters';
      valid = false;
    }

    if (valid) {
      document.getElementById('formSuccess').textContent = 'Form submitted successfully';
    }
  });
});