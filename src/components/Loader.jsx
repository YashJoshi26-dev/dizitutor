import "./Loader.css" // loader styles

function Loader({ size = "md", text }) { // loading indicator component
  return (
    <div className="loader"> {/* loader wrapper */}
      <span className={`loader-spinner loader-spinner-${size}`} /> {/* animated spinner */}
      {text && <p className="loader-text">{text}</p>} {/* optional helper text */}
    </div>
  )
}

export default Loader // default export
