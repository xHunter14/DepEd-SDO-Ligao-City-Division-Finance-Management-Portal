# DepEd Ligao Finance Portal

## Overview
This project is a responsive landing page for the DepEd Ligao City Division Finance Management Portal. It is designed to present finance services, announcements, reports, and contact access in a clear and approachable way for school personnel, school heads, BAC members, and finance staff.

## Structural Choices
- The page uses a single-page layout with clearly separated sections for:
  - hero introduction
  - features/pathways
  - support services
  - announcements
  - reports
  - contact form
  - access CTA
  - footer
- Semantic HTML is used throughout, including header, main, section, article, footer, and form elements.
- Navigation is organized around anchor links to keep the experience simple and fast for users moving between sections.
- The layout uses a mobile-first approach, with content stacking vertically on smaller screens and expanding into multi-column layouts on larger screens.

## CSS Methodology and Styling Approach
- Styling is handled through a single custom stylesheet, styles.css.
- The project uses CSS custom properties (variables) for colors, spacing, and reusable design tokens.
- Layout patterns rely on modern CSS features such as:
  - Flexbox for header and button groups
  - CSS Grid for responsive card and section layouts
  - Media queries for mobile and tablet adaptation
- The visual system uses a calm blue-and-teal palette to reflect a formal education and governance theme.
- Components such as cards, buttons, forms, modals, and the footer share consistent spacing, borders, and shadows for a cohesive design.

## Frameworks or Libraries
- No external CSS framework was used.
- The site uses plain HTML, CSS, and JavaScript.
- Google Fonts is loaded for the Inter typeface to support a clean and readable interface.

## Accessibility Considerations
The layout is built with accessibility in mind for diverse school personnel, including users with different technical comfort levels and device access.

### Key accessibility practices
- Clear heading hierarchy for easier scanning with screen readers.
- Descriptive link text and button labels.
- Form controls include labels and inline validation messages.
- Color contrast is tuned to remain readable in both light and dark mode.
- The navigation includes a hamburger menu for small screens, making mobile access easier.
- Buttons and interactive elements are large enough for touch interaction.
- The site supports keyboard-friendly modal interactions and close actions.
- The dark mode toggle helps users with low-light viewing needs.

## Notes for Future Improvement
- Add real downloadable documents and report links.
- Expand form handling with a real backend or form service.
- Consider adding ARIA-enhanced notifications for successful submissions and modal actions.
