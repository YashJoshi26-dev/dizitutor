import Button from "../components/Button.jsx" // shared button component
import "./Home.css" // home page styles

function Home() { // home page component
  return (
    <main> {/* page content wrapper */}
      <section className="hero" id="home"> {/* hero section container */}
        <video className="hero-video" src="/videos/Hero.mp4"  poster="/images/hero-poster.jpg" autoPlay loop muted playsInline /> {/* background hero video */}
        <div className="hero-overlay" /> {/* overlay gradient */}

        <div className="hero-content"> {/* hero content panel */}
          <span className="hero-eyebrow">Welcome to Smarter Learning</span> {/* introductory label */}

          <h1 className="hero-heading"> {/* hero heading */}
            Learn from India's best Tutors <br /> from anywhere.
          </h1>

          <p className="hero-subtext"> {/* hero description */}
            Live, personalised classes that fit your schedule. <br />Track
            progress, ask doubts in real time, and grow at your own pace.
          </p>

          <div className="hero-actions"> {/* hero action buttons */}
            <Button>Book a Free Demo</Button> {/* primary action button */}
            <Button variant="ghost">Check Our Courses</Button> {/* secondary action button */}
          </div>

          <div className="hero-trust"> {/* trust section */}
            <div className="hero-avatars"> {/* student avatar group */}
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
            <span>5,000+ Students learning with us</span> {/* trust statement */}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home // default export
