
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Send,
  BriefcaseBusiness,
  Sparkles,
} from "lucide-react";

import "../styles/Contact.css";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.04c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.59 1.21 3.22.92.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.06 1.15a10.64 10.64 0 0 1 5.57 0c2.13-1.45 3.06-1.15 3.06-1.15.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3 0 4.29-2.61 5.23-5.1 5.51.4.35.75 1.03.75 2.08V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.9H4.98V9.38h2.95v9.52ZM6.45 8.08a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.47 10.82h-2.95v-4.63c0-1.1-.02-2.52-1.54-2.52-1.55 0-1.79 1.2-1.79 2.44v4.71H9.69V9.38h2.83v1.3h.04c.39-.74 1.36-1.52 2.8-1.52 2.99 0 3.56 1.97 3.56 4.53v5.21Z" />
    </svg>
  );
}

const EMAIL = "vishalkumar.977168@gmail.com";
const GITHUB = "https://github.com/im-vishal-jain";
const LINKEDIN = "https://www.linkedin.com/in/vishal-kumar-8761022b0/";

export default function Contact() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const subject = String(formData.get("subject") || "Portfolio enquiry");
    const message = String(formData.get("message") || "");

    const body = [
      "Hi Vishal,",
      "",
      message,
      "",
      "Regards,",
      name,
      `Email: ${email}`,
    ].join("\n");

    window.location.href =
      `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="contact-page">
      <div className="contact-ambient contact-ambient-one" />
      <div className="contact-ambient contact-ambient-two" />

      {/* HEADER */}
      <motion.header
        className="contact-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="contact-header-top">
          <div className="contact-label">
            <span className="contact-label-line" />
            CONTACT
            <span className="contact-number">06 / 06</span>
          </div>

          <div className="contact-status">
            <span className="contact-status-dot" />
            Available for opportunities
          </div>
        </div>

        <h1>
          Let's connect <span>beyond boundaries.</span>
        </h1>

        <p className="contact-header-description">
          Great ideas begin with a conversation. Let's connect, exchange ideas
          and create something meaningful together.
        </p>
      </motion.header>

      {/* MAIN ORBITAL LAYOUT */}
      <section className="contact-orbital-layout">

        {/* LEFT ORBITAL VISUAL */}
        <motion.div
          className="contact-orbital-section"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="orbital-scene">

            <div className="orbit orbit-outer">
              <span className="orbit-dot orbit-dot-one" />
              <span className="orbit-dot orbit-dot-two" />
            </div>

            <div className="orbit orbit-middle">
              <span className="orbit-dot orbit-dot-three" />
            </div>

            <div className="orbit orbit-inner" />

            <div className="orbit-center-glow" />

            <div className="orbit-center">
              <div className="orbit-center-icon">
                <Sparkles size={24} />
              </div>
              <span className="orbit-center-small">LET'S CREATE</span>
              <h2>Something<br />Amazing.</h2>
              <span className="orbit-center-line" />
              <p>One conversation can start it all.</p>
            </div>

            {/* FLOATING EMAIL */}
            <a href={`mailto:${EMAIL}`} className="orbit-float orbit-email">
              <span className="orbit-float-icon">
                <Mail size={17} />
              </span>
              <span>Email</span>
              <ArrowUpRight size={13} />
            </a>

            {/* FLOATING GITHUB */}
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="orbit-float orbit-github"
            >
              <span className="orbit-float-icon">
                <GithubIcon size={17} />
              </span>
              <span>GitHub</span>
              <ArrowUpRight size={13} />
            </a>

            {/* FLOATING LINKEDIN */}
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="orbit-float orbit-linkedin"
            >
              <span className="orbit-float-icon">
                <LinkedinIcon size={17} />
              </span>
              <span>LinkedIn</span>
              <ArrowUpRight size={13} />
            </a>

            {/* FLOATING LOCATION */}
            <div className="orbit-float orbit-location">
              <span className="orbit-float-icon">
                <MapPin size={17} />
              </span>
              <span>India</span>
            </div>
          </div>

          <div className="orbital-caption">
            <span className="orbital-caption-line" />
            <span>CONNECTED BY IDEAS. UNITED BY INNOVATION.</span>
            <span className="orbital-caption-line" />
          </div>

          {/* QUICK INFORMATION */}
          <div className="contact-quick-info">
            <div className="quick-info-item">
              <Clock3 size={16} />
              <div>
                <span>RESPONSE TIME</span>
                <strong>24–48 Hours</strong>
              </div>
            </div>

            <div className="quick-info-item">
              <BriefcaseBusiness size={16} />
              <div>
                <span>OPEN TO</span>
                <strong>Internships & Projects</strong>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT CONTACT FORM */}
        <motion.div
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <div className="contact-form-header">
            <div>
              <div className="contact-section-heading">
                <span className="contact-section-number">01</span>
                <span>GET IN TOUCH</span>
              </div>

              <h2>Send me a message.</h2>
              <p>
                Have an idea or opportunity? I'd love to hear about it.
              </p>
            </div>

            <div className="contact-form-header-icon">
              <Send size={21} />
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="contact-name">Full name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">Email address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="What would you like to discuss?"
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">Your message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={6}
                placeholder="Tell me about your idea, project or opportunity..."
                required
              />
            </div>

            <button className="contact-submit" type="submit">
              <span>Send message</span>
              <ArrowRight size={17} />
            </button>
          </form>

          <div className="contact-form-note">
            <span className="contact-note-dot" />
            Your default email application will open with your message.
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="contact-footer">
        <span className="contact-footer-name">VISHAL KUMAR</span>
        <span className="contact-footer-message">
          CONNECT. COLLABORATE. CREATE.
        </span>
        <span className="contact-footer-year">
          © {new Date().getFullYear()}
        </span>
      </footer>
    </main>
  );
}
