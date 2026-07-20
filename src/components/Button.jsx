import { Link } from "react-router-dom" // internal navigation link component
import "./Button.css" // button styles

function Button({ children, variant = "primary", size = "md", icon, to, onClick, className = "" }) { // reusable button component
  const classes = `btn btn-${variant} btn-${size} ${className}`.trim() // compute CSS classes

  if (to) { // render link when destination is provided
    return (
      <Link to={to} className={classes} onClick={onClick}> {/* router link button */}
        {icon && <span className="btn-icon">{icon}</span>} {/* optional icon */}
        {children} {/* button label */}
      </Link>
    )
  }

  return (
    <button className={classes} onClick={onClick}> {/* regular button element */}
      {icon && <span className="btn-icon">{icon}</span>} {/* optional icon */}
      {children} {/* button label */}
    </button>
  )
}

export default Button // default export
