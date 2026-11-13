
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, BrainCircuit } from "lucide-react";

import "../styles/Skills.css";

const skills = [
  {
    id: "01",
    name: "Machine Learning",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
  },
  {
    id: "02",
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    id: "03",
    name: "SQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    id: "04",
    name: "Generative AI",
    logo: "",
  },
  {
    id: "05",
    name: "Agentic AI",
    logo: "https://cdn.simpleicons.org/langchain/FFFFFF",
  },
  {
    id: "06",
    name: "LLMs",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/huggingface/huggingface-original.svg",
  },
  {
    id: "07",
    name: "Data Analytics",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
  },
  {
    id: "08",
    name: "C++",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  },
];

function Skills() {
  return (
    <main className="skills-page">
      <header className="skills-topbar">
        <Link to="/" className="skills-brand-mark">
        </Link>
      </header>

      <section className="skills-showcase">
        <motion.div
          className="skills-heading"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="skills-eyebrow">
            <Sparkles size={15} />
            MY TECHNICAL EXPERTISE
          </span>

          <h1>
            Skills <span>& Technologies</span>
          </h1>

          <p>
            Exploring technologies and building intelligent
            solutions through AI, programming and data analytics.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.article
              className="skill-card"
              key={skill.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
                scale: 1.04,
              }}
            >
              <div className="skill-icon">
                {skill.id === "04" ? (
                  <BrainCircuit
                    className="generative-ai-icon"
                    size={65}
                    strokeWidth={1.8}
                  />
                ) : (
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    loading="lazy"
                  />
                )}
              </div>

              <h3>{skill.name}</h3>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Skills;
