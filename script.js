// Deliverable 1: DOM Interaction (Show / Hide More Info)
const toggleBtn = document.querySelector('#toggle-info-btn');
const extraInfo = document.querySelector('#extra-info');

if (toggleBtn && extraInfo) {
    toggleBtn.addEventListener('click', () => {
        const isHidden = extraInfo.hasAttribute('hidden');

        if (isHidden) {
            extraInfo.removeAttribute('hidden');
            toggleBtn.setAttribute('aria-expanded', 'true');
            toggleBtn.textContent = 'Hide More Info';
        } else {
            extraInfo.setAttribute('hidden', '');
            toggleBtn.setAttribute('aria-expanded', 'false');
            toggleBtn.textContent = 'Show More Info';
        }
    });
}

// Deliverable 2: Accessible Form Validation
const contactForm = document.querySelector('#contact-form');

if (contactForm) {
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');

    const nameError = document.querySelector('#name-error');
    const emailError = document.querySelector('#email-error');
    const messageError = document.querySelector('#message-error');
    const formStatus = document.querySelector('#form-status');

    function clearFieldError(input, errorEl) {
        errorEl.textContent = '';
        input.removeAttribute('aria-invalid');
    }

    function setFieldError(input, errorEl, message) {
        errorEl.textContent = message;
        input.setAttribute('aria-invalid', 'true');
    }

    function validateName() {
        if (nameInput.value.trim() === '') {
            setFieldError(nameInput, nameError, 'Please enter your name.');
            return false;
        }
        clearFieldError(nameInput, nameError);
        return true;
    }

    function validateEmail() {
        const value = emailInput.value.trim();
        if (value === '') {
            setFieldError(emailInput, emailError, 'Please enter your email address.');
            return false;
        }
        if (!value.includes('@') || !value.includes('.')) {
            setFieldError(emailInput, emailError, 'Please enter a valid email address.');
            return false;
        }
        clearFieldError(emailInput, emailError);
        return true;
    }

    function validateMessage() {
        if (messageInput.value.trim() === '') {
            setFieldError(messageInput, messageError, 'Please enter a message.');
            return false;
        }
        clearFieldError(messageInput, messageError);
        return true;
    }

    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    messageInput.addEventListener('input', validateMessage);

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        formStatus.textContent = '';

        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();

        if (!isNameValid) {
            nameInput.focus();
            return;
        }
        if (!isEmailValid) {
            emailInput.focus();
            return;
        }
        if (!isMessageValid) {
            messageInput.focus();
            return;
        }

        formStatus.textContent = 'Form looks good! Ready to send.';
        contactForm.reset();
    });
}