import { StrictMode } from 'react' // use React StrictMode for development checks
import { createRoot } from 'react-dom/client' // create React root renderer
import './index.css' // load global stylesheet
import App from './App.jsx' // main app component

createRoot(document.getElementById('root')).render( // mount the React app into DOM
  <StrictMode> {/* strict mode wrapper for development */}
    <App /> {/* render root component */}
  </StrictMode>,
)
