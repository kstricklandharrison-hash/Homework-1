## Accessibility Fixes (Milestone 3)

* **index.html:** Added the `lang="en"` attribute to the opening `<html>` tag to ensure screen readers correctly identify the language of the home page.
* **index.html:** Added a descriptive `<title>Personal Portfolio - Home</title>` tag to eliminate the WAVE missing title error.
* **index.html:** Structured content using semantic HTML elements (`<header>`, `<nav>`, `<main>`, and `<footer>`) to establish clear page regions for screen reader navigation.
* **index.html:** Added an `<h1>` heading tag to create a proper heading hierarchy across the entire home page layout.
* **projects.html:** Verified all image elements include descriptive `alt` attributes to provide text alternatives for non-text content.
* **about.html:** Wrapped form inputs with explicit `<label for="...">` elements to ensure all contact form fields are accessible to assistive technologies.

## Color Contrast & Palette (WCAG AA)

* **Color Palette:** Primary Text (`#2C3E50`) on White Background (`#FFFFFF`).
* **WCAG AA Compliance:** Tested using the WebAIM Contrast Checker. The primary text color (`#2C3E50`) against the white background (`#FFFFFF`) achieves a contrast ratio of **10.98:1**, passing both WCAG AA and AAA standards (minimum requirement is 4.5:1).
