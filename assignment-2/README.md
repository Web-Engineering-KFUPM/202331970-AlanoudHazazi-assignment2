# Personal Portfolio Web Application

## Project Description
This is a responsive personal portfolio website developed as the foundational assignment for my web development coursework. It serves as a digital showcase of my background as a Computer Science student, highlighting my technical skills and selected academic projects, including SilverNest, KFUPM Clinic System, and Semantic Guardian. 

## Features & User Experience (UX)
- **Responsive Layout:** The interface dynamically adapts to desktop, tablet, and mobile screens using CSS Grid and Flexbox for optimal readability.
- **Interactive Dark/Light Theme:** Users can toggle between a light and dark theme. The preference is saved locally using JavaScript `localStorage`, ensuring a seamless experience across page reloads.
- **Accessible Design:** Clear visual hierarchy, readable typography, and distinct hover states provide intuitive navigation and a user-friendly experience.

## Technical Details
The application is built entirely from scratch without the use of external CSS frameworks or libraries.
- **HTML5:** Semantic tags (`<nav>`, `<main>`, `<section>`, `<article>`) are used to structure the content logically.
- **CSS3:** Custom variables (`:root`) handle the theme switching. `repeat(auto-fit, minmax())` is utilized for the fluid project grid. 
- **JavaScript (Vanilla):** Implements the DOM manipulation for the theme toggle and manages browser `localStorage`.

## Setup & Installation Instructions
To run this project locally, no build tools or servers are required:
1. Clone or download this repository to your local machine.
2. Ensure the folder structure is intact (`css/`, `js/`, `images/`).
3. Open the `index.html` file directly in any modern web browser (e.g., Chrome, Edge, Safari).
4. Click the "Toggle Theme" button in the navigation bar to test the JavaScript functionality.

## AI Integration Summary
Artificial Intelligence tools were utilized responsibly during the development of this project to enhance code quality and problem-solving. Specifically, AI assisted in optimizing the CSS Grid logic for responsiveness and structuring the JavaScript `localStorage` syntax for the theme toggle. A comprehensive breakdown of the tools used, challenges, and learning outcomes can be found in `docs/ai-usage-report.md`.