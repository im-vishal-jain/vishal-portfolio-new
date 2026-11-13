
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  Sparkles,
  BriefcaseBusiness,
  GraduationCap,
  Workflow,
  Layers3,
  ExternalLink,
} from "lucide-react";

import "../styles/Projects.css";

const projectsData = [
  {
    id: "01",
    title: "Career Copilot AI",
    category: "Generative AI",
    subtitle: "AI-Powered Career Assistant",
    description:
      "An intelligent career assistant for resume analysis, job discovery, skill-gap intelligence and personalized career guidance.",
    icon: BriefcaseBusiness,
    featured: true,
  },
  {
    id: "02",
    title: "LearnSphere AI",
    category: "AI & Education",
    subtitle: "Personalized Learning Platform",
    description:
      "An AI-powered learning platform offering personalized learning experiences, intelligent assistance and recommendations.",
    icon: GraduationCap,
    featured: false,
  },
  {
    id: "03",
    title: "System Design Generator",
    category: "AI Engineering",
    subtitle: "Intelligent Architecture Designer",
    description:
      "An intelligent platform for generating architecture diagrams and exploring scalable system design decisions.",
    icon: Workflow,
    featured: true,
  },
  {
    id: "04",
    title: "NexusOS",
    category: "Web Development",
    subtitle: "Intelligent SaaS Platform",
    description:
      "A modern SaaS experience featuring interactive dashboards, system management, integrations and graph exploration.",
    icon: Layers3,
    featured: false,
  },
];

function Projects() {
  return (
    <main className="projects-page">

      <div className="projects-background">
        <div className="projects-background-glow glow-one" />
        <div className="projects-background-glow glow-two" />
        <div className="projects-background-grid" />
      </div>

      <header className="projects-topbar">
        <Link to="/" className="projects-brand-mark">
          VK
        </Link>
      </header>

      <section className="projects-showcase">

        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="projects-eyebrow">
            <Sparkles size={15} />
            MY CREATIVE WORK
          </span>

          <h1>
            Projects <span>& Experiences</span>
          </h1>

          <p>
            A collection of ideas transformed into practical
            digital experiences through AI, engineering and software development.
          </p>
        </motion.div>

        <div className="projects-grid">

          {projectsData.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.id}
                className={`project-card project-card-${index + 1}`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
              >

                <div className="project-card-top">
                  <span className="project-card-number">
                    {project.id}
                  </span>

                  {project.featured && (
                    <span className="project-featured">
                      FEATURED
                    </span>
                  )}
                </div>

                <div className="project-card-icon">
                  <Icon size={52} strokeWidth={1.7} />
                </div>

                <span className="project-category">
                  {project.category}
                </span>

                <h2>{project.title}</h2>

                <h3>{project.subtitle}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-card-footer">
                  <span>PROJECT OVERVIEW</span>
                  <ExternalLink size={16} />
                </div>

              </motion.article>
            );
          })}

        </div>
      </section>
    </main>
  );
}

export default Projects;
