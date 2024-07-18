document.getElementById('validationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Name validation
    if (name.length < 5) {
        document.getElementById('nameError').innerText = 'Name must be at least 5 characters long';
        isValid = false;
    } else {
        document.getElementById('nameError').innerText = '';
    }

    // Email validation
    if (!email.includes('@')) {
        document.getElementById('emailError').innerText = 'Email must contain @';
        isValid = false;
    } else {
        document.getElementById('emailError').innerText = '';
    }

    // Phone validation
    if (phone === '123456789' || phone.length !== 10 || isNaN(phone)) {
        document.getElementById('phoneError').innerText = 'Phone number must be 10 digits and cannot be 123456789';
        isValid = false;
    } else {
        document.getElementById('phoneError').innerText = '';
    }

    // Password validation
    if (password.length < 8 || password.toLowerCase() === 'password' || password === name) {
        document.getElementById('passwordError').innerText = 'Password must be at least 8 characters and cannot be "password" or your name';
        isValid = false;
    } else {
        document.getElementById('passwordError').innerText = '';
    }

    // Confirm Password validation
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerText = 'Passwords do not match';
        isValid = false;
    } else {
        document.getElementById('confirmPasswordError').innerText = '';
    }

    if (isValid) {
        alert('Form submitted successfully!');
        // Perform form submission or other actions
    }
});
