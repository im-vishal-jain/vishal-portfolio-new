
import {
  Award,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

import "../styles/Certifications.css";

const certifications = [
  {
    id: "01",
    category: "DATA FUNDAMENTALS",
    title: "Data Fundamentals",
    organization: "IBM SkillsBuild",
    date: "August 29, 2025",
    credentialUrl:
      "https://drive.google.com/file/d/1j9GpmBfe5QSiwb06W_9E-yfYxEd9O5GL/view",
    featured: true,
  },
  {
    id: "02",
    category: "PYTHON & DATA SCIENCE",
    title: "Python 101 for Data Science",
    organization: "IBM SkillsBuild",
    date: "November 27, 2025",
    credentialUrl:
      "https://drive.google.com/file/d/1fEViT6InW-d2LRA5_b1lIrU94D5qi5g3/view",
    featured: true,
  },
  {
    id: "03",
    category: "CERTIFICATION",
    title: "Add Certificate Name",
    organization: "Add Organization",
    date: "Add Issue Date",
    credentialUrl:
      "https://drive.google.com/file/d/14gFyklKV4QaKdi0fPKYMWtXIgM9k5K3O/view",
    featured: false,
  },
];

export default function Certifications() {
  return (
    <main className="certifications-page">

      {/* PREMIUM HERO HEADING */}
      <header className="certifications-heading">

        <div className="cert-heading-label">
          <span className="cert-heading-line" />
          <span className="cert-heading-dot" />
          PROFESSIONAL JOURNEY
          <span className="cert-heading-dot" />
          <span className="cert-heading-line" />
        </div>

        <h1 className="cert-heading-title">
          My <span>Certifications</span>
          <span className="cert-heading-period">.</span>
        </h1>

        <div className="cert-heading-bottom">
          <span className="cert-heading-accent" />
          <span>LEARNING • GROWTH • RECOGNITION</span>
          <span className="cert-heading-accent" />
        </div>

      </header>

      {/* CERTIFICATION CARDS */}
      <section className="certifications-grid-cards">

        {certifications.map((cert) => (
          <article
            className="certification-card"
            key={cert.id}
          >

            <div className="certification-top">
              <span className="certification-number">
                {cert.id}
              </span>

              {cert.featured && (
                <span className="certification-featured">
                  FEATURED
                </span>
              )}
            </div>

            <div className="certification-icon">
              <Award size={29} strokeWidth={1.6} />
              <div className="certification-icon-glow" />
            </div>

            <div className="certification-content">

              <span className="certification-category">
                {cert.category}
              </span>

              <h3>{cert.title}</h3>

              <p className="certification-organization">
                {cert.organization}
              </p>

              <span className="certification-date">
                {cert.date}
              </span>

            </div>

            <div className="certification-divider" />

            <div className="certification-footer">

              <span className="certification-verified">
                <ShieldCheck size={15} />
                VERIFIED CREDENTIAL
              </span>

              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="certification-link"
              >
                VIEW CREDENTIAL
                <ArrowUpRight size={16} />
              </a>

            </div>

          </article>
        ))}

      </section>

    </main>
  );
}
