document.addEventListener('DOMContentLoaded', () => {
    // 1. Dark Mode & LocalStorage
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.textContent = '☀️ Light Mode';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const isDark = body.classList.contains('dark-theme');

        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
    });

    // 2. Live Search & Filter Projects
    const searchInput = document.getElementById('project-search');
    const projectCards = document.querySelectorAll('.project-card');
    const noProjectsMsg = document.getElementById('no-projects-message');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            let visibleCount = 0;

            projectCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                
                if (title.includes(query) || description.includes(query)) {
                    card.style.display = 'block';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            if (visibleCount === 0) {
                noProjectsMsg.classList.remove('hidden-message');
            } else {
                noProjectsMsg.classList.add('hidden-message');
            }
        });
    }

    // 3. Contact Form Validation & Feedback
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    const formAlert = document.getElementById('form-alert');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const btnSpinner = document.getElementById('btn-spinner');

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            let isValid = true;
            [nameError, emailError, messageError].forEach(el => el.textContent = '');
            [nameInput, emailInput, messageInput].forEach(el => el.classList.remove('invalid'));
            formAlert.className = 'alert hidden-message';

            if (!nameInput.value.trim()) {
                nameError.textContent = 'Please enter your name.';
                nameInput.classList.add('invalid');
                isValid = false;
            }

            if (!emailInput.value.trim()) {
                emailError.textContent = 'Please enter your email address.';
                emailInput.classList.add('invalid');
                isValid = false;
            } else if (!validateEmail(emailInput.value.trim())) {
                emailError.textContent = 'Please enter a valid email address.';
                emailInput.classList.add('invalid');
                isValid = false;
            }

            if (!messageInput.value.trim()) {
                messageError.textContent = 'Please enter a message.';
                messageInput.classList.add('invalid');
                isValid = false;
            }

            if (!isValid) {
                formAlert.textContent = 'Please fix the errors in the form above.';
                formAlert.className = 'alert alert-error';
                return;
            }

            submitBtn.disabled = true;
            btnText.textContent = 'Sending...';
            btnSpinner.classList.remove('hidden-message');
            setTimeout(() => {
                submitBtn.disabled = false;
                btnText.textContent = 'Send Message';
                btnSpinner.classList.add('hidden-message');

                formAlert.textContent = 'Thank you! Your message has been sent successfully.';
                formAlert.className = 'alert alert-success';

                contactForm.reset();
            }, 1500);
        });
    }
});