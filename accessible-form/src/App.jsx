import { useState } from "react";

function App() {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the form elements
    const form = e.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const message = form.elements.message.value;

    if (!name || !email || !message) {
      setError("All fields are required");
    } else {
      setError("");
      alert("Form submitted successfully!");
      form.reset(); // Clear the form
    }
  };

  return (
    <main className="main-container">
      <h1 className="title">Contact Form</h1>

      <form onSubmit={handleSubmit} className="contact-form">
        <p role="alert" aria-live="assertive" className="error-message">
          {error}
        </p>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" required className="form-input" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            required
            aria-describedby="email-info"
            className="form-input"
          />
          <small id="email-info" className="help-text">
            We will not share your email
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="4" required className="form-input"></textarea>
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </main>
  );
}

export default App;
