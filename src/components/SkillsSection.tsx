import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Code2, Server, Database, Cpu, Wrench, Globe } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["JavaScript", "TypeScript", "Python", "C/C++", "Go", "SQL"],
  },
  {
    title: "Frontend",
    icon: Globe,
    skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "Redux"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "REST APIs", "GraphQL", "gRPC"],
  },
  {
    title: "Databases & Caching",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    skills: ["Docker", "Kubernetes", "Git", "CI/CD", "Linux", "Nginx"],
  },
  {
    title: "Systems & Architecture",
    icon: Cpu,
    skills: ["eBPF", "Kafka", "System Design", "Microservices", "Message Queues"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="container mx-auto">
      <SectionHeading label="Skills" title="Tech Stack" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {skillCategories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="glass-card p-5 hover:border-primary/40 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={18} />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-sm">
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-md bg-secondary/80 text-muted-foreground font-medium hover:text-primary hover:bg-primary/10 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default SkillsSection;
