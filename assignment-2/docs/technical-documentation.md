# Technical Documentation

## 1. Architecture Overview
This portfolio is a static front-end web application built using vanilla web technologies (HTML5, CSS3, and JavaScript). It does not rely on any external frameworks or libraries, ensuring fast load times and a lightweight footprint.

## 2. Directory Structure
The project follows a standard and logical file organization:
- `/css/styles.css`: Contains all styling, responsive design rules, and theme variables.
- `/js/script.js`: Contains the logic for interactivity (Theme toggle).
- `/assets/images/`: Stores all static image assets (profile picture, project previews).
- `/docs/`: Contains project documentation (AI Usage Report and Technical Documentation).
- `index.html`: The main entry point structuring the content.

## 3. Styling & Layout Approach
- **CSS Grid:** Utilized in the Projects section (`.project-grid`). The rule `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))` creates a fluid, responsive layout that automatically adjusts the number of columns based on the viewport width without needing complex media queries.
- **CSS Flexbox:** Applied to the Navigation (`nav`), About section (`.about-content`), and Contact Form (`.form-group`) to manage alignment, spacing, and vertical/horizontal centering efficiently.
- **Image Optimization:** The `object-fit: cover;` property is applied to project images to maintain a consistent aspect ratio and prevent distortion regardless of the source image dimensions.

## 4. Interactivity (JavaScript)
The single interactive feature is a Light/Dark theme toggle.
- **State Management:** The current theme state is managed by toggling a `.dark-theme` class on the `<body>` element.
- **Data Persistence:** The user's theme preference is saved to the browser's `localStorage` (`localStorage.setItem`). Upon page reload, the script checks `localStorage.getItem('theme')` to reapply the saved preference, ensuring a consistent user experience.

## 5. CSS Custom Properties (Variables)
Dark mode styling is implemented efficiently by redefining CSS variables based on the active class on the body. Instead of rewriting components, styles inherit the active colors dynamically (e.g., overriding hardcoded hex colors with specific dark-theme overrides for headers, inputs, and backgrounds).