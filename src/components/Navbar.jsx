import { useState } from "react" // state hook
import { Link } from "react-router-dom" // internal link component
import Button from "./Button.jsx" // shared button component
import { navLinks } from "../data/navLinks.js" // navbar link data
import "./Navbar.css" // navbar styles

function Navbar() { // navigation bar component
  const [menuOpen, setMenuOpen] = useState(false) // mobile menu open state

  const closeMenu = () => setMenuOpen(false) // close mobile menu handler

  return (
    <header className="navbar"> {/* navbar wrapper */}
      <div className="container navbar-inner"> {/* inner navbar container */}
        <Link to="/" className="logo" onClick={closeMenu}> {/* logo link */}
          <img src="/images/logo.png" alt="Dizitutor logo" className="logo-img" /> {/* logo image */}
        </Link>

        <div className={`navbar-menu ${menuOpen ? "navbar-menu-open" : ""}`}> {/* navigation menu wrapper */}
          <nav className="navbar-links"> {/* navigation links container */}
            {navLinks.map((link) => (
              <Link key={link.label} to={link.href} onClick={closeMenu}> {/* individual nav link */}
                {link.label} {/* display link label */}
              </Link>
            ))}
          </nav>

          <div className="navbar-actions"> {/* navbar action buttons */}
            <Button size="sm" to="/bookdemo" onClick={closeMenu}> {/* book demo button */}
              Book a Demo
            </Button>
            <Button size="sm" to="/applyteacher" className="applybtn" onClick={closeMenu}> {/* apply teacher button */}
              Apply as Teacher
            </Button>
          </div>
        </div>

        <button className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"> {/* mobile menu toggle button */}
          <span></span> {/* bar 1 */}
          <span></span> {/* bar 2 */}
          <span></span> {/* bar 3 */}
        </button>
      </div>
    </header>
  )
}

export default Navbar // default export
