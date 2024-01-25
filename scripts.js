function validateAndSubmit() {
    
    // Clear error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';

    // Get form values
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Validate full name
    // For simplicity, this example checks if the full name has at least 5 characters
    if (fullName.length < 5) {
        document.getElementById('nameError').textContent = 'Full Name must be at least 5 characters';
        return;
    }

    // Validate Email Format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById('emailError').textContent = 'Invalid email format';
      return;
    }

    // Validate password strength
    // For simplicity, this example checks if the password has at least 8 characters
    if (password.length < 8) {
      document.getElementById('passwordError').textContent = 'Password must be at least 8 characters';
      return;
    }

    // Check for the presence of at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
      document.getElementById('passwordError').textContent = 'Password must have at least 1 Uppercase Character';
      return;
    }

    // Check for the presence of at least one lowercase letter
    if (!/[a-z]/.test(password)) {
      document.getElementById('passwordError').textContent = 'Password must have at least 1 lowercase Character';
      return;
    }

    // Check for the presence of at least one digit
    if (!/\d/.test(password)) {
      document.getElementById('passwordError').textContent = 'Password must have at least 1 digit';
      return;
    }

    // Check for the presence of at least one special character
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
      document.getElementById('passwordError').textContent = 'Password must have at least 1 special Character';
      return;
    }

    // Validate password and confirm password match
    if (password !== confirmPassword) {
    document.getElementById('confirmPasswordError').innerHTML = 'Passwords do not match';
    return;
    }

    // If all validations pass
    alert('Registration successful!');
    }
