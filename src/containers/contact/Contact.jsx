import { useState } from "react";
import { CTA } from "../../components";
import "./contact.css";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (message.match(validRegex)) {
      setError(false);
      alert("send successfully");
      setMessage("");
    } else {
      setError(true);
    }
  };

  return (
    <section className="contact__section">
      <h3>Get early access today</h3>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label className="hidden-visually" htmlFor="email">
            email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email@example.com"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {error && (
            <span className="error">Please enter a valid email address</span>
          )}
        </div>
        <CTA title="Get Started For Free" type="submit" />
      </form>
    </section>
  );
};

export default Contact;
