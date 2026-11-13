
import { motion } from "framer-motion";
import {
  GraduationCap,
  CalendarDays,
  MapPin,
  BookOpen,
} from "lucide-react";

import "../styles/Education.css";

const education = [
  {
    id: "01",
    level: "UNDERGRADUATE",
    degree: "Bachelor of Technology",
    specialization: "Electronics & Communication Engineering",
    institution: "Gurukul Kangri University",
    location: "Haridwar, Uttarakhand, India",
    duration: "August 2023 — May 2027",
    status: "Currently Pursuing",
    result: "Expected 2027",
    icon: GraduationCap,
    current: true,
  },
  {
    id: "02",
    level: "SENIOR SECONDARY",
    degree: "Intermediate — Class XII",
    specialization: "Physics, Chemistry & Mathematics (PCM)",
    institution: "Dr. K.K. Mandal College",
    location: "Arrah, Bihar, India",
    duration: "January 2020 — April 2022",
    status: "Completed",
    result: "82%",
    icon: BookOpen,
    current: false,
  },
  {
    id: "03",
    level: "SECONDARY",
    degree: "Matriculation — Class X",
    specialization: "Science & Mathematics",
    institution: "SS High School",
    location: "Arrah, Bihar, India",
    duration: "January 2019 — March 2020",
    status: "Completed",
    result: "83%",
    icon: BookOpen,
    current: false,
  },
];

export default function Education() {
  return (
    <main className="education-page">
      {/* HEADER */}
      <motion.header
        className="education-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        <div className="education-eyebrow">
          <span className="education-eyebrow-line" />
          MY ACADEMIC JOURNEY
          <span className="education-index">03 / 06</span>
        </div>

        <div className="education-heading-row">
          <div>
            <h1>
              Education & <span>Learning.</span>
            </h1>
          </div>

          <div className="education-header-icon">
            <GraduationCap size={34} strokeWidth={1.4} />
          </div>
        </div>
      </motion.header>

      {/* EDUCATION CARDS */}
      <section className="education-section">
        <div className="education-timeline">
          {education.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className={`education-card ${
                  item.current ? "education-card-current" : ""
                }`}
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {/* CARD TOP */}
                <div className="education-card-top">
                  <div className="education-card-icon">
                    <Icon size={24} strokeWidth={1.6} />
                  </div>

                  <div className="education-card-meta">
                    <span className="education-level">
                      {item.level}
                    </span>

                    <span
                      className={`education-status ${
                        item.current
                          ? "status-current"
                          : "status-completed"
                      }`}
                    >
                      <span />
                      {item.status}
                    </span>
                  </div>

                  <span className="education-card-id">
                    {item.id}
                  </span>
                </div>

                {/* CARD CONTENT */}
                <div className="education-card-content">
                  <h3>{item.degree}</h3>

                  <h4>{item.specialization}</h4>

                  <div className="education-institution">
                    {item.institution}
                  </div>

                  <div className="education-card-details">
                    <div>
                      <CalendarDays size={15} />
                      <span>{item.duration}</span>
                    </div>

                    <div>
                      <MapPin size={15} />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* CARD BOTTOM */}
                <div className="education-card-bottom">
                  <div className="education-result">
                    <span>
                      {item.current
                        ? "EXPECTED COMPLETION"
                        : "ACADEMIC RESULT"}
                    </span>

                    <strong>{item.result}</strong>
                  </div>

                  {item.current && (
                    <div className="education-progress-label">
                      <span className="education-progress-dot" />
                      In Progress
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="education-footer">
        <span>VISHAL KUMAR</span>
        <span>LEARN. BUILD. EVOLVE.</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}
