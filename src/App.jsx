import { BrowserRouter, Routes, Route } from "react-router-dom" // routing components
import Navbar from "./components/Navbar.jsx" // site navigation bar
import Footer from "./components/Footer.jsx" // page footer
import Home from "./pages/Home.jsx" // home page component
import BookDemo from "./pages/BookDemo.jsx" // demo booking page component
import ApplyTeacher from "./pages/ApplyTeacher.jsx" // teacher application page component
import SocialSidebar from "./components/SocialSidebar.jsx";

function App() { // root application component
  return (
    <BrowserRouter> {/* client-side routing wrapper */}
      <Navbar /> {/* top navigation bar */}
      <Routes> {/* route switch container */}
        <Route path="/" element={<Home />} /> {/* home route */}
        <Route path="/bookdemo" element={<BookDemo />} /> {/* demo booking route */}
        <Route path="/applyteacher" element={<ApplyTeacher />} /> {/* apply teacher route */}
      </Routes>
      <Footer /> {/* site footer */}
      <SocialSidebar /> {/* floating social media sidebar */}
    </BrowserRouter>
  )
}

export default App // default export for App component
