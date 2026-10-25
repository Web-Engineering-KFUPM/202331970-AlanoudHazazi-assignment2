# Technical Documentation – Assignment 2

## 1. System Architecture & Features
This application is built as a dynamic, client-side portfolio using standard HTML5, CSS3, and modern ECMAScript (Vanilla JavaScript). It operates without external frameworks, maximizing execution speed and maintaining zero third-party dependencies.

---

## 2. Dynamic Features & State Management

### A. Dark/Light Theme Switching (`localStorage`)
- **Implementation:** Managed via JavaScript class manipulation on the `<body>` element (`.dark-theme`).
- **Persistence:** The chosen theme state is written to the browser's persistent storage using `localStorage.setItem('theme', isDark ? 'dark' : 'light')`.
- **Initialization:** Upon `DOMContentLoaded`, the script evaluates `localStorage.getItem('theme')` to reapply saved user preferences instantly, preventing visual flicker during page loads.

### B. Live Project Filtering (Search Bar)
- **Implementation:** An active event listener monitors the `input` event on `#project-search`.
- **Matching Algorithm:** Query strings are normalized (`toLowerCase().trim()`) and evaluated against the `<h3>` (title) and `<p>` (description) content of each `.project-card` using `String.prototype.includes()`.
- **DOM Updates:** Matching elements retain default layout display styles (`display: block`), while non-matching elements are hidden (`display: none`). An empty-state message (`#no-projects-message`) renders dynamically when the visible count equals zero.

---

## 3. Form Validation, Error Handling & Feedback

### A. Input Validation Logic
- **Prevention:** Form submission default behavior is interrupted using `e.preventDefault()`.
- **Validation Rules:**
  - **Required Fields:** Ensures `Name`, `Email`, and `Message` inputs are non-empty after trimming whitespace.
  - **Email Format:** Validated against a standard Regular Expression pattern (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`).
- **Visual Feedback:** Invalid fields dynamically receive an `.invalid` CSS class (triggering red border styling) and display contextual error text beneath the input field.

### B. Asynchronous Feedback Simulation
- **Loading State:** Upon successful validation, the submit button locks (`disabled = true`), displays a text update ("Sending..."), and shows a CSS keyframe animation spinner (`.spinner`).
- **Completion Alert:** A 1.5-second `setTimeout` simulates network latency, clearing inputs via `form.reset()` and presenting a confirmation banner (`.alert-success`).

---

## 4. Performance & CSS Transitions
- **Smooth UX:** Interactivity utilizes GPU-accelerated CSS properties (`transform: translateY(-6px)`, `opacity`, `transition: 0.3s ease`) to deliver fluid visual transitions without rendering bottlenecks.