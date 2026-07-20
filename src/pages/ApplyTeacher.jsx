import { useState } from "react" // state hook
import Loader from "../components/Loader.jsx" // loading indicator component
import Button from "../components/Button.jsx" // shared button component
import "./Book_teacher.css" // page styles

const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID" // placeholder form endpoint

function ApplyTeacher() { // teacher application page component
  const [submitted, setSubmitted] = useState(false) // submitted state
  const [loading, setLoading] = useState(false) // loading state

  const handleSubmit = async (e) => { // submit handler
    e.preventDefault() // prevent form refresh
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
      form.reset() // clear form fields
    }
  }

  return (
    <section className="form-page"> {/* page wrapper */}
      <div className="form-page-media"> {/* side media panel */}
        <img src="/images/teacher.png" alt="Teacher teaching online" />
      </div>

      <div className="form-page-panel"> {/* form panel */}
        <div className="form-page-inner"> {/* inner layout */}
          <span className="form-page-eyebrow">Apply as Teacher</span> {/* section label */}
          <h1 className="form-page-heading">Teach with Dizitutor.</h1> {/* page heading */}
          <p className="form-page-subtext"> {/* description text */}
            Tell us about your expertise and we'll get in touch about
            onboarding.
          </p>

          {submitted ? ( // after submission
            <p className="form-success"> {/* success message */}
              Thanks! Your application has been received.
            </p>
          ) : ( // before submission
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
                <Loader size="sm" text="Submitting your application..." />
              ) : (
                <Button className="form-submit">Submit Application</Button>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default ApplyTeacher // default export
