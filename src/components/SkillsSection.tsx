import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C/C++", "Go", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "Redux"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "GraphQL", "gRPC"],
  },
  {
    title: "Databases & Caching",
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Kubernetes", "Git", "CI/CD", "Linux", "Nginx"],
  },
  {
    title: "Systems & Architecture",
    skills: ["eBPF", "Kafka", "System Design", "Microservices", "Message Queues"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="container mx-auto">
      <SectionHeading label="Skills" title="Tech Stack" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="glass-card p-6 hover:border-primary/30 transition-colors"
          >
            <h3 className="font-heading font-semibold text-foreground text-sm mb-4">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
