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

      <div className="max-w-3xl mx-auto space-y-8">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <h3 className="font-heading font-semibold text-primary text-xs tracking-widest uppercase mb-3">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-4 py-2 rounded-lg border border-border bg-card/40 text-foreground font-medium hover:border-primary/40 hover:bg-primary/5 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
            {i < skillCategories.length - 1 && (
              <div className="border-b border-border/30 mt-8" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
