document.addEventListener('DOMContentLoaded', () => {
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
            }
            else {
                noProjectsMsg.classList.add('hidden-message');
            }
        });
    }