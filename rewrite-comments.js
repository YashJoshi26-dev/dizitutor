const fs = require('fs');
const files = [
  {
    path: 'index.html',
    content: `<!doctype html> <!-- HTML5 document -->
<html lang="en"> <!-- page language -->
  <head> <!-- page metadata -->
    <meta charset="UTF-8" /> <!-- charset -->
    <meta name="description" content="Dizitutor connects students with India's best tutors for live, personalised online classes." /> <!-- page description -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <!-- responsive layout -->
    <title>Dizitutor — Learn from India's Best Tutors</title> <!-- page title -->
    <link rel="preconnect" href="https://fonts.googleapis.com" /> <!-- font preconnect -->
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> <!-- fonts static assets -->
    <link
      href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap"
      rel="stylesheet"
    /> <!-- load fonts -->
    <link rel="preload" href="/videos/Hero.mp4" as="video" type="video/mp4" /> <!-- preload hero video -->
  </head>
  <body> <!-- app mount point -->
    <div id="root"></div> <!-- React root element -->
    <script type="module" src="/src/main.jsx"></script> <!-- entry module -->
  </body>
</html> <!-- end html document -->
`,
  },
  {
    path: 'vite.config.js',
    content: `import { defineConfig } from 'vite' // Vite config helper
import react from '@vitejs/plugin-react' // React plugin for Vite

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], // enable React support
})
`,
  },
  {
    path: 'eslint.config.js',
    content: `import js from '@eslint/js' // ESLint JS rules
import globals from 'globals' // browser globals definitions
import reactHooks from 'eslint-plugin-react-hooks' // React hooks lint plugin
import reactRefresh from 'eslint-plugin-react-refresh' // Vite refresh lint plugin
import { defineConfig, globalIgnores } from 'eslint/config' // ESLint config helpers

export default defineConfig([
  globalIgnores(['dist']), // ignore build outputs
  {
    files: ['**/*.{js,jsx}'], // lint JS and JSX files
    extends: [
      js.configs.recommended, // base JS rules
      reactHooks.configs.flat.recommended, // React hooks rules
      reactRefresh.configs.vite, // Vite React refresh rules
    ],
    languageOptions: {
      globals: globals.browser, // browser globals available
      parserOptions: { ecmaFeatures: { jsx: true } }, // enable JSX parsing
    },
  },
])
`,
  },
  {
    path: 'src/main.jsx',
    content: `import { StrictMode } from 'react' // use React StrictMode for development checks
import { createRoot } from 'react-dom/client' // create a root React DOM renderer
import './index.css' // load global styles
import App from './App.jsx' // main app component

createRoot(document.getElementById('root')).render( // mount the React app into DOM
  <StrictMode> {/* strict mode wrapper */}
    <App /> {/* render the top-level app */}
  </StrictMode>,
)
`,
  },
  {
    path: 'src/App.jsx',
    content: `import { BrowserRouter, Routes, Route } from "react-router-dom" // routing components
import Navbar from "./components/Navbar.jsx" // site navigation bar
import Footer from "./components/Footer.jsx" // page footer
import Home from "./pages/Home.jsx" // home page
import BookDemo from "./pages/BookDemo.jsx" // demo booking page
import ApplyTeacher from "./pages/ApplyTeacher.jsx" // teacher application page

function App() { // root application component
  return (
    <BrowserRouter> {/* client-side routing wrapper */}
      <Navbar /> {/* header navigation */}
      <Routes> {/* route switch container */}
        <Route path="/" element={<Home />} />
        <Route path="/bookdemo" element={<BookDemo />} />
        <Route path="/applyteacher" element={<ApplyTeacher />} />
      </Routes>
      <Footer /> {/* persistent footer */}
    </BrowserRouter>
  )
}

export default App // default export for App component
`,
  },
  {
    path: 'src/App.css',
    content: `/* App.css is intentionally empty */
/* This file can hold shared layout styles if needed later */
`,
  },
  {
    path: 'src/index.css',
    content: `:root { /* design tokens and theme variables */
  --color-bg: #f4f5fd; /* page background color */
  --color-primary: #6c5ce7; /* primary brand color */
  --color-primary-dark: #5a4bd6; /* darker primary color */
  --color-text: #171833; /* default text color */
  --color-text-muted: #6b6d85; /* muted text color */
  --color-white: #ffffff; /* white color */
  --color-accent-soft: #e3e1fb; /* soft accent shade */
  --color-border: #e4e4f0; /* border color */

  --font-heading: "Plus Jakarta Sans", sans-serif; /* heading font family */
  --font-body: "Inter", sans-serif; /* body font family */

  --radius-lg: 32px; /* large border radius */
  --radius-pill: 999px; /* pill shape radius */

  --max-width: 1200px; /* maximum content width */
}

* { /* base reset for all elements */
  margin: 0; /* remove default margins */
  padding: 0; /* remove default padding */
  box-sizing: border-box; /* include border in width/height */
}

body { /* global body styles */
  background: var(--color-bg); /* body background */
  color: var(--color-text); /* default text color */
  font-family: var(--font-body); /* default font family */
}

img, video { /* media elements */
  display: block; /* remove inline spacing */
  max-width: 100%; /* responsive width */
}

a { /* anchor reset */
  text-decoration: none; /* remove underline */
  color: inherit; /* inherit text color */
}

button { /* button reset */
  font: inherit; /* inherit parent font */
  cursor: pointer; /* pointer cursor for buttons */
  border: none; /* remove default border */
  background: none; /* remove default background */
}

.container { /* page wrapper container */
  max-width: var(--max-width); /* maximum width */
  margin: 0 auto; /* center horizontally */
  padding: 0 24px; /* horizontal padding */
}
`,
  },
  {
    path: 'src/data/navLinks.js',
    content: `export const navLinks = [ // navigation item list
  { label: "Home", href: "#home" }, // home section
  { label: "Teachers", href: "#teachers" }, // teachers link
  { label: "Courses", href: "#courses" }, // courses section
  { label: "Contact", href: "#contact" }, // contact section
]
`,
  },
  {
    path: 'src/components/Navbar.jsx',
    content: `import { useState } from "react" // state hook
import { Link } from "react-router-dom" // internal link component
import Button from "./Button.jsx" // shared button component
import { navLinks } from "../data/navLinks.js" // navbar links
import "./Navbar.css" // navbar styles

function Navbar() { // navigation bar component
  const [menuOpen, setMenuOpen] = useState(false) // mobile menu state

  const closeMenu = () => setMenuOpen(false) // close mobile menu handler

  return (
    <header className="navbar"> {/* navbar wrapper */}
      <div className="container navbar-inner"> {/* inner navbar layout */}
        <Link to="/" className="logo" onClick={closeMenu}> {/* logo link */}
          <img src="/images/logo.png" alt="Dizitutor logo" className="logo-img" />
        </Link>

        <div className={`navbar-menu ${menuOpen ? "navbar-menu-open" : ""}`}> {/* menu wrapper */}
          <nav className="navbar-links"> {/* navigation links */}
            {navLinks.map((link) => (
              <Link key={link.label} to={link.href} onClick={closeMenu}> {/* each nav link */}
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="navbar-actions"> {/* action buttons */}
            <Button size="sm" to="/bookdemo" onClick={closeMenu}> {/* book demo button */}
              Book a Demo
            </Button>
            <Button size="sm" to="/applyteacher" className="applybtn" onClick={closeMenu}> {/* apply teacher button */}
              Apply as Teacher
            </Button>
          </div>
        </div>

        <button className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"> {/* mobile toggle */}
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Navbar // default export
`,
  },
  {
    path: 'src/components/Button.jsx',
    content: `import { Link } from "react-router-dom" // internal navigation link
import "./Button.css" // button styles

function Button({ children, variant = "primary", size = "md", icon, to, onClick, className = "" }) { // reusable button component
  const classes = `btn btn-${variant} btn-${size} ${className}`.trim() // compute CSS classes

  if (to) { // render React Router link if destination provided
    return (
      <Link to={to} className={classes}> {/* router link button */}
        {icon && <span className="btn-icon">{icon}</span>} {/* optional icon */}
        {children} {/* button content */}
      </Link>
    )
  }

  return (
    <button className={classes} onClick={onClick}> {/* regular button */}
      {icon && <span className="btn-icon">{icon}</span>} {/* optional icon */}
      {children} {/* button text */}
    </button>
  )
}

export default Button // default export
`,
  },
  {
    path: 'src/components/Footer.jsx',
    content: `import { Link } from "react-router-dom" // internal link component
import "./Footer.css" // footer styles

function Footer() { // footer component
  const year = new Date().getFullYear() // current year

  return (
    <footer className="footer"> {/* footer wrapper */}
      <div className="container footer-inner"> {/* footer inner layout */}
        <Link to="/" className="logo"> {/* footer logo link */}
          <svg width="50" height="50" viewBox="0 0 34 34" fill="none"> {/* SVG background */}
            <rect width="50" height="50" rx="10" />
            <image href="/images/logo.png" width="34" height="34" /> {/* logo image inside SVG */}
          </svg>
          <span>Dizitutor</span> {/* footer brand text */}
        </Link>

        <p>© {year} Dizitutor. All rights reserved.</p> {/* copyright notice */}
        {/* <p>enquiry@dizitutor.com</p> */} {/* commented optional email */}
      </div>
    </footer>
  )
}

export default Footer // default export
`,
  },
  {
    path: 'src/components/Loader.jsx',
    content: `import "./Loader.css" // loader styles

function Loader({ size = "md", text }) { // loading indicator component
  return (
    <div className="loader"> {/* loader wrapper */}
      <span className={`loader-spinner loader-spinner-${size}`} /> {/* pulsating spinner */}
      {text && <p className="loader-text">{text}</p>} {/* optional loader text */}
    </div>
  )
}

export default Loader // default export
`,
  },
  {
    path: 'src/pages/Home.jsx',
    content: `import Button from "../components/Button.jsx" // shared button component
import "./Home.css" // home page styles

function Home() { // home page component
  return (
    <main> {/* page content wrapper */}
      <section className="hero" id="home"> {/* hero section */}
        <video className="hero-video" src="/videos/Hero.mp4" autoPlay loop muted playsInline /> {/* background hero video */}
        <div className="hero-overlay" /> {/* dark gradient overlay */}

        <div className="hero-content"> {/* hero content container */}
          <span className="hero-eyebrow">Welcome to Smarter Learning</span> {/* eyebrow label */}

          <h1 className="hero-heading"> {/* hero heading */}
            Learn from India's best Tutors <br /> from anywhere.
          </h1>

          <p className="hero-subtext"> {/* hero description */}
            Live, personalised classes that fit your schedule. <br />Track
            progress, ask doubts in real time, and grow at your own pace.
          </p>

          <div className="hero-actions"> {/* hero action buttons */}
            <Button>Book a Free Demo</Button> {/* primary action */}
            <Button variant="ghost">Check Our Courses</Button> {/* secondary action */}
          </div>

          <div className="hero-trust"> {/* trust section */}
            <div className="hero-avatars"> {/* avatar group */}
              <span className="hero-avatar"> {/* avatar item */}
                <img src="/images/3.jpeg" alt="Student 1" />
              </span>
              <span className="hero-avatar"> {/* avatar item */}
                <img src="/images/2.jpeg" alt="Student 2" />
              </span>
              <span className="hero-avatar"> {/* avatar item */}
                <img src="/images/5.jpeg" alt="Student 3" />
              </span>
              <span className="hero-avatar"> {/* avatar item */}
                <img src="/images/4.jpeg" alt="Student 4" />
              </span>
            </div>
            <span>5,000+ Students learning with us</span> {/* trust text */}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home // default export
`,
  },
  {
    path: 'src/pages/BookDemo.jsx',
    content: `import { useState } from "react" // state hook
import Loader from "../components/Loader.jsx" // loading indicator component
import Button from "../components/Button.jsx" // shared button component
import "./Book_teacher.css" // page styles

const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID" // placeholder form endpoint

function BookDemo() { // book demo page component
  const [submitted, setSubmitted] = useState(false) // submitted state
  const [loading, setLoading] = useState(false) // loading state

  const handleSubmit = async (e) => { // submit handler
    e.preventDefault() // prevent page reload
    setLoading(true) // show loader
    const form = e.target // current form element
    const response = await fetch(FORM_ENDPOINT, { // send form data
      method: "POST", // POST request
      body: new FormData(form), // form values
      headers: { Accept: "application/json" }, // accept JSON response
    })

    setLoading(false) // hide loader

    if (response.ok) { // success path
      setSubmitted(true) // mark as submitted
      form.reset() // reset form fields
    }
  }

  return (
    <section className="form-page"> {/* form page wrapper */}
      <div className="form-page-media"> {/* side media panel */}
        <img src="/images/student.png" alt="Student learning online" />
      </div>

      <div className="form-page-panel"> {/* form panel */}
        <div className="form-page-inner"> {/* inner content wrapper */}
          <span className="form-page-eyebrow">Book a Free Demo</span> {/* section label */}
          <h1 className="form-page-heading">Let's find you the right tutor.</h1> {/* page heading */}
          <p className="form-page-subtext"> {/* page description */}
            Share a few details and our team will reach out to schedule your
            free demo class.
          </p>

          {submitted ? ( // show success message after submit
            <p className="form-success">
              Thanks! We've received your request and will contact you soon.
            </p>
          ) : ( // show form before submission
            <form onSubmit={handleSubmit}> {/* booking form */}
              <div className="form-field"> {/* field wrapper */}
                <label htmlFor="name">Full Name</label>
                <input id="name" name="name" type="text" required />
              </div>

              <div className="form-field"> {/* field wrapper */}
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" name="phone" type="tel" required />
              </div>

              <div className="form-field"> {/* field wrapper */}
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required />
              </div>

              <div className="form-field"> {/* field wrapper */}
                <label htmlFor="subject">Subject / Class</label>
                <input id="subject" name="subject" type="text" placeholder="e.g. Class 10 Maths" required />
              </div>

              <div className="form-field"> {/* field wrapper */}
                <label htmlFor="message">Message (optional)</label>
                <textarea id="message" name="message" />
              </div>
              {loading ? (
                <Loader size="sm" text="Sending your request..." /> {/* loading state */}
              ) : (
                <Button className="form-submit">Request Demo</Button> {/* submit button */}
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default BookDemo // default export
`,
  },
  {
    path: 'src/pages/ApplyTeacher.jsx',
    content: `import { useState } from "react" // state hook
import Loader from "../components/Loader.jsx" // loading indicator component
import Button from "../components/Button.jsx" // shared button component
import "./Book_teacher.css" // page styles

const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID" // placeholder form endpoint

function ApplyTeacher() { // teacher application page component
  const [submitted, setSubmitted] = useState(false) // submitted state
  const [loading, setLoading] = useState(false) // loading state

  const handleSubmit = async (e) => { // submit handler
    e.preventDefault() // prevent reload
    setLoading(true) // show loader
    const form = e.target // form element
    const response = await fetch(FORM_ENDPOINT, { // send form data
      method: "POST", // HTTP POST
      body: new FormData(form), // include form values
      headers: { Accept: "application/json" }, // expect JSON response
    })

    setLoading(false) // hide loader

    if (response.ok) { // success path
      setSubmitted(true) // mark submitted
      form.reset() // clear the form
    }
  }

  return (
    <section className="form-page"> {/* page wrapper */}
      <div className="form-page-media"> {/* side media panel */}
        <img src="/images/teacher.png" alt="Teacher teaching online" />
      </div>

      <div className="form-page-panel"> {/* form panel */}
        <div className="form-page-inner"> {/* inner layout */}
          <span className="form-page-eyebrow">Apply as Teacher</span> {/* label */}
          <h1 className="form-page-heading">Teach with Dizitutor.</h1> {/* heading */}
          <p className="form-page-subtext"> {/* description */}
            Tell us about your expertise and we'll get in touch about
            onboarding.
          </p>

          {submitted ? ( // success message after submit
            <p className="form-success">
              Thanks! Your application has been received.
            </p>
          ) : ( // form before submission
            <form onSubmit={handleSubmit}> {/* application form */}
              <div className="form-field"> {/* field wrapper */}
                <label htmlFor="name">Full Name</label>
                <input id="name" name="name" type="text" required />
              </div>

              <div className="form-field"> {/* field wrapper */}
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" name="phone" type="tel" required />
              </div>

              <div className="form-field"> {/* field wrapper */}
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required />
              </div>

              <div className="form-field"> {/* field wrapper */}
                <label htmlFor="expertise">Subject Expertise</label>
                <input id="expertise" name="expertise" type="text" placeholder="e.g. Physics, English" required />
              </div>

              <div className="form-field"> {/* field wrapper */}
                <label htmlFor="experience">Years of Experience</label>
                <input id="experience" name="experience" type="number" min="0" required />
              </div>

              <div className="form-field"> {/* field wrapper */}
                <label htmlFor="message">Anything else? (optional)</label>
                <textarea id="message" name="message" />
              </div>
              {loading ? (
                <Loader size="sm" text="Submitting your application..." /> {/* loading state */}
              ) : (
                <Button className="form-submit">Submit Application</Button> {/* submit button */}
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default ApplyTeacher // default export
`,
  },
  {
    path: 'src/components/Navbar.css',
    content: `.navbar { /* navbar wrapper */
  position: sticky; /* stick to top */
  top: 0; /* top offset */
  z-index: 50; /* make sure navbar stays above */
  background: var(--color-bg); /* background color */
}

.navbar-inner { /* inner navbar container */
  display: flex; /* align child elements horizontally */
  align-items: center; /* center items vertically */
  justify-content: space-between; /* space between left and right */
  padding: 12px 0; /* vertical padding */
  position: relative; /* position context for overlay */
}

.logo { /* logo wrapper */
  display: flex; /* keep logo item inline */
  align-items: center; /* center vertically */
  margin-left: 0; /* no extra left offset */
}
.logo-img { /* logo image */
  height: 56px; /* image height */
  width: auto; /* preserve aspect ratio */
}

.navbar-menu { /* menu container */
  display: flex; /* row layout for menu */
  align-items: center; /* center items */
  gap: 36px; /* spacing between items */
}

.navbar-links { /* navigation link group */
  display: flex; /* horizontal links */
  align-items: center; /* center vertically */
  gap: 36px; /* gap between links */
}

.navbar-links a { /* individual link style */
  font-family: var(--font-heading); /* brand font */
  font-weight: 500; /* medium weight */
  font-size: 0.95rem; /* text size */
  color: var(--color-text); /* default color */
}

.navbar-links a:hover { /* link hover state */
  color: var(--color-primary); /* primary highlight */
}

.navbar-actions { /* action button group */
  display: flex; /* inline buttons */
  align-items: center; /* center vertically */
  gap: 12px; /* space between buttons */
}

.applybtn { /* apply button variant */
  background: var(--color-white); /* white background */
  color: var(--color-primary); /* primary text */
  border: 1px solid var(--color-primary); /* border color */
  box-shadow: none; /* no shadow */
}

.navbar-toggle { /* mobile menu toggle */
  display: none; /* hidden on desktop */
  flex-direction: column; /* bars stacked */
  gap: 5px; /* spacing between bars */
  padding: 6px; /* button padding */
}

.navbar-toggle span { /* toggle bar */
  width: 24px; /* bar width */
  height: 2px; /* bar height */
  background: var(--color-text); /* bar color */
  border-radius: 2px; /* rounded ends */
}

@media (max-width: 860px) { /* mobile responsive */
  .navbar-menu { /* mobile menu panel */
    display: none; /* hide by default */
    position: absolute; /* overlay menu */
    top: 100%; /* below navbar */
    left: 0; /* left edge */
    right: 0; /* right edge */
    background: var(--color-bg); /* background color */
    flex-direction: column; /* stack items vertically */
    align-items: flex-start; /* left align */
    gap: 20px; /* spacing */
    padding: 24px; /* inner padding */
    border-bottom: 1px solid var(--color-border); /* bottom border */
  }

  .navbar-menu-open { /* displayed mobile menu */
    display: flex; /* show menu */
  }

  .navbar-links { /* mobile link list */
    flex-direction: column; /* vertical links */
    align-items: flex-start; /* left align */
    gap: 16px; /* spacing between links */
  }

  .navbar-toggle { /* show toggle button */
    display: flex; /* visible on mobile */
  }
}
`,
  },
  {
    path: 'src/components/Button.css',
    content: `.btn { /* base button style */
  display: inline-flex; /* inline flex container */
  align-items: center; /* center contents */
  gap: 8px; /* gap between icon and text */
  font-family: var(--font-heading); /* button font */
  font-weight: 600; /* medium-bold weight */
  border-radius: var(--radius-pill); /* pill shaped corners */
  transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease; /* smooth transitions */
  white-space: nowrap; /* prevent text wrap */
}

.btn:active { /* pressed state */
  transform: scale(0.97); /* shrink slightly on click */
}

.btn-sm { /* small button size */
  padding: 9px 20px; /* smaller padding */
  font-size: 0.85rem; /* smaller text */
}

.btn-md { /* medium button size */
  padding: 13px 28px; /* medium padding */
  font-size: 0.95rem; /* default text size */
}

.btn-primary { /* primary variant */
  background: var(--color-primary); /* brand background */
  color: var(--color-white); /* white text */
  box-shadow: 0 8px 20px -6px rgba(108, 92, 231, 0.55); /* subtle shadow */
}

.btn-primary:hover { /* hover state */
  background: var(--color-primary-dark); /* darker background */
}

.btn-outline { /* outline variant */
  background: var(--color-white); /* white background */
  color: var(--color-text); /* dark text */
  border: 1px solid var(--color-border); /* light border */
}

.btn-outline:hover { /* hover state */
  border-color: var(--color-primary); /* accent border */
  color: var(--color-primary); /* accent text */
}

.btn-ghost { /* ghost variant */
  background: var(--color-accent-soft); /* soft background */
  color: var(--color-primary-dark); /* text color */
}

.btn-ghost:hover { /* hover state */
  background: #d6d3fa; /* stronger accent */
}
`,
  },
  {
    path: 'src/components/Footer.css',
    content: `.footer { /* footer wrapper */
  border-top: 1px solid var(--color-border); /* top border */
  padding: 24px 0; /* vertical padding */
}

.footer-inner { /* inner footer layout */
  display: flex; /* horizontal layout */
  align-items: center; /* center items */
  justify-content: space-between; /* separate items */
  padding: 22px 0; /* vertical padding */
  position: relative; /* position context */
}

.logo { /* footer logo style */
  display: flex; /* icon and text inline */
  align-items: center; /* center vertically */
  gap: 10px; /* spacing */
  font-family: var(--font-heading); /* heading font */
  font-weight: 800; /* bold text */
  font-size: 1.15rem; /* text size */
}
`,
  },
  {
    path: 'src/components/Loader.css',
    content: `.loader { /* loader wrapper */
  display: flex; /* vertical layout */
  flex-direction: column; /* stack elements */
  align-items: center; /* center horizontally */
  gap: 10px; /* spacing */
  padding: 20px; /* padding */
}

.loader-spinner { /* spinner base */
  border: 3px solid var(--color-accent-soft); /* spinner border */
  border-top-color: var(--color-primary); /* active accent color */
  border-radius: 50%; /* circular shape */
  animation: spin 0.7s linear infinite; /* continuous rotation */
}

.loader-spinner-sm { /* small spinner */
  width: 18px; /* width */
  height: 18px; /* height */
}

.loader-spinner-md { /* medium spinner */
  width: 32px; /* width */
  height: 32px; /* height */
}

.loader-spinner-lg { /* large spinner */
  width: 48px; /* width */
  height: 48px; /* height */
}

.loader-text { /* loader label text */
  font-family: var(--font-heading); /* heading font */
  font-size: 0.9rem; /* text size */
  color: var(--color-text-muted); /* muted color */
}

@keyframes spin { /* spinner animation */
  from { transform: rotate(0deg); } /* start rotation */
  to { transform: rotate(360deg); } /* end rotation */
}
`,
  },
  {
    path: 'src/pages/Home.css',
    content: `.hero { /* hero section wrapper */
  position: relative; /* allow overlay positioning */
  min-height: 640px; /* minimum hero height */
  display: flex; /* layout container */
  align-items: center; /* center content */
  overflow: hidden; /* clip overflow */
}

.hero-video { /* background video */
  position: absolute; /* fill the area */
  inset: 0; /* cover top/right/bottom/left */
  width: 100%; /* full width */
  height: 100%; /* full height */
  object-fit: cover; /* cover the container */
  z-index: 0; /* behind content */
}

.hero-overlay { /* overlay gradient */
  position: absolute; /* fill the hero */
  inset: 0; /* full coverage */
  background: linear-gradient(90deg, rgba(23, 24, 51, 0.75) 0%, rgba(23, 24, 51, 0.35) 60%, rgba(23, 24, 51, 0.15) 100%); /* dark gradient */
  z-index: 1; /* above video */
}

.hero-content { /* hero text container */
  position: relative; /* above overlay */
  z-index: 2; /* top layer */
  max-width: 640px; /* max width */
  padding: 100px 24px 100px 80px; /* content padding */
}

.hero-eyebrow { /* small badge */
  display: inline-block; /* shrink to content */
  padding: 8px 18px; /* badge padding */
  border-radius: var(--radius-pill); /* pill shape */
  background: var(--color-accent-soft); /* accent background */
  color: var(--color-primary-dark); /* accent text */
  font-family: var(--font-heading); /* heading font */
  font-weight: 600; /* semibold */
  font-size: 0.85rem; /* small text */
  margin-bottom: 24px; /* bottom spacing */
}

.hero-heading { /* hero title */
  font-family: var(--font-heading); /* heading font */
  font-weight: 800; /* bold text */
  font-size: 3.2rem; /* large size */
  line-height: 1.12; /* line spacing */
  letter-spacing: -0.02em; /* tighter letters */
  color: #ffffff; /* white text */
  margin-bottom: 22px; /* spacing below */
}

.hero-subtext { /* hero description */
  font-size: 1.05rem; /* readable size */
  line-height: 1.6; /* line spacing */
  color: rgba(255, 255, 255, 0.85); /* translucent white */
  max-width: 460px; /* width cap */
  margin-bottom: 34px; /* bottom spacing */
}

.hero-actions { /* button row */
  display: flex; /* row layout */
  align-items: center; /* center vertically */
  gap: 14px; /* spacing between buttons */
  margin-bottom: 40px; /* bottom spacing */
}

.hero-trust { /* trust section row */
  display: flex; /* row layout */
  align-items: center; /* vertical center */
  gap: 14px; /* spacing */
}

.hero-avatars { /* avatar group */
  display: flex; /* row layout */
}

.hero-avatar { /* avatar circle */
  width: 34px; /* width */
  height: 34px; /* height */
  border-radius: 50%; /* circular shape */
  border: 2px solid var(--color-bg); /* white border */
  margin-left: -10px; /* overlap effect */
  overflow: hidden; /* hide overflow */
  display: block; /* block layout */
}

.hero-avatar:first-child { /* first avatar reset */
  margin-left: 0; /* remove overlap on first item */
}

.hero-avatar img { /* avatar image */
  width: 100%; /* fill avatar */
  height: 100%; /* fill avatar */
  object-fit: cover; /* cover container */
}

.hero-trust span:last-child { /* trust text */
  font-size: 0.9rem; /* smaller text */
  font-weight: 500; /* medium weight */
  color: rgba(255, 255, 255, 0.85); /* soft white */
}

@media (max-width: 900px) { /* responsive adjustments */
  .hero-heading { /* mobile heading size */
    font-size: 2.2rem; /* smaller heading */
  }

  .hero-content { /* mobile padding */
    padding: 60px 20px; /* compact spacing */
  }
}
`,
  },
  {
    path: 'src/pages/Book_teacher.css',
    content: `.form-page { /* form page layout */
  display: grid; /* grid layout */
  grid-template-columns: 1fr 1fr; /* two columns */
  min-height: calc(100vh - 78px); /* full height with header offset */
}

.form-page-media { /* media side panel */
  position: relative; /* positioning context */
  overflow: hidden; /* hide overflow */
  display: flex; /* center content */
  align-items: center; /* vertical centering */
  justify-content: flex-end; /* right align */
  background: var(--color-bg); /* background color */
}

.form-page-media img { /* media image */
  margin-left: 40px; /* spacing from left */
  width: 100%; /* full width */
  height: 75%; /* height ratio */
  object-fit: cover; /* cover the area */
  border-radius: var(--radius-lg); /* rounded corners */
}

.form-page-panel { /* form panel container */
  display: flex; /* center content */
  align-items: center; /* vertical centering */
  padding: 60px 64px; /* panel padding */
}

.form-page-inner { /* content wrapper */
  width: 100%; /* full width */
  max-width: 440px; /* content max width */
}

.form-page-eyebrow { /* section label */
  display: inline-block; /* shrink to text */
  padding: 8px 18px; /* badge padding */
  border-radius: var(--radius-pill); /* pill shape */
  background: var(--color-accent-soft); /* soft background */
  color: var(--color-primary-dark); /* accent text */
  font-family: var(--font-heading); /* heading font */
  font-weight: 600; /* medium weight */
  font-size: 0.85rem; /* small text */
  margin-bottom: 20px; /* spacing */
}

.form-page-heading { /* heading */
  font-family: var(--font-heading); /* heading font */
  font-weight: 800; /* bold */
  font-size: 2.2rem; /* heading size */
  line-height: 1.2; /* line spacing */
  margin-bottom: 12px; /* spacing */
}

.form-page-subtext { /* subtext */
  color: var(--color-text-muted); /* muted color */
  margin-bottom: 32px; /* spacing */
  line-height: 1.6; /* line spacing */
}

.form-field { /* form field wrapper */
  margin-bottom: 18px; /* spacing */
}

.form-field label { /* field label */
  display: block; /* full width */
  font-family: var(--font-heading); /* heading font */
  font-weight: 600; /* medium-bold */
  font-size: 0.85rem; /* label text size */
  margin-bottom: 6px; /* spacing */
}

.form-field input,
.form-field select,
.form-field textarea { /* form controls */
  width: 100%; /* full width */
  padding: 12px 16px; /* control padding */
  border: 1px solid var(--color-border); /* control border */
  border-radius: 12px; /* rounded corners */
  font-family: var(--font-body); /* body font */
  font-size: 0.95rem; /* text size */
  background: var(--color-white); /* white background */
}

.form-field input:focus,
.form-field select:focus,
.form-field textarea:focus { /* focus state */
  outline: none; /* remove outline */
  border-color: var(--color-primary); /* accent border */
}

.form-field textarea { /* textarea adjustments */
  resize: vertical; /* vertical resize only */
  min-height: 90px; /* minimum height */
}

.form-submit { /* submit button layout */
  width: 100%; /* full width */
  justify-content: center; /* center button content */
  margin-top: 8px; /* spacing above button */
}

.form-success { /* success message styling */
  font-family: var(--font-heading); /* heading font */
  font-weight: 600; /* semibold */
  color: var(--color-primary-dark); /* accent text */
  background: var(--color-accent-soft); /* background highlight */
  padding: 14px 18px; /* padding */
  border-radius: 12px; /* rounded corners */
}

@media (max-width: 900px) { /* responsive mobile layout */
  .form-page { /* stack sections */
    grid-template-columns: 1fr; /* one column */
  }

  .form-page-media { /* image panel height */
    height: 260px; /* fixed mobile height */
  }

  .form-page-panel { /* panel padding adjustment */
    padding: 40px 24px; /* mobile padding */
  }
}
`,
  }
];

for (const file of files) {
  fs.writeFileSync(file.path, file.content, 'utf8');
}
