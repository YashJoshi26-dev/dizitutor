import { useState } from "react" // state hook
import Loader from "../components/Loader.jsx" // loading indicator component
import Button from "../components/Button.jsx" // shared button component
import "./Book_teacher.css" // page styles

const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID" // placeholder form endpoint

function BookDemo() { // book demo page component
  const [submitted, setSubmitted] = useState(false) // submission state
  const [loading, setLoading] = useState(false) // loading state

  const handleSubmit = async (e) => { // submit handler
    e.preventDefault() // prevent page refresh
    setLoading(true) // show loader
    const form = e.target // current form element
    const response = await fetch(FORM_ENDPOINT, { // send form data
      method: "POST", // HTTP method
      body: new FormData(form), // form payload
      headers: { Accept: "application/json" }, // expect JSON response
    })

    setLoading(false) // hide loader

    if (response.ok) { // success path
      setSubmitted(true) // set submitted state
      form.reset() // reset form fields
    }
  }

  return (
    <section className="form-page"> {/* page wrapper */}
      <div className="form-page-media"> {/* side image panel */}
        <img src="/images/student.png" alt="Student learning online" />
      </div>

      <div className="form-page-panel"> {/* form panel */}
        <div className="form-page-inner"> {/* inner content wrapper */}
          <span className="form-page-eyebrow">Book a Free Demo</span> {/* section label */}
          <h1 className="form-page-heading">Let's find you the right tutor.</h1> {/* page heading */}
          <p className="form-page-subtext"> {/* description text */}
            Share a few details and our team will reach out to schedule your
            free demo class.
          </p>

          {submitted ? ( // after submission
            <p className="form-success"> {/* success message */}
              Thanks! We've received your request and will contact you soon.
            </p>
          ) : ( // before submission
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
                <Loader size="sm" text="Sending your request..." />
              ) : (
                <Button className="form-submit">Request Demo</Button>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default BookDemo // default export
