import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Company Name",
    duration: "Jun 2025 – Present",
    points: [
      "Built and deployed microservices handling 10K+ RPM using Node.js and Kafka",
      "Implemented Redis caching layer reducing API response time by 60%",
      "Designed database schemas and optimized SQL queries for performance",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Company Name",
    duration: "Jan 2025 – May 2025",
    points: [
      "Developed responsive web applications with React and TypeScript",
      "Integrated RESTful APIs and managed MongoDB collections",
      "Collaborated with cross-functional teams using Agile methodologies",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding">
    <div className="container mx-auto">
      <SectionHeading label="Experience" title="Work Experience" />

      <div className="max-w-2xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border hidden md:block" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-6 md:ml-12 relative hover:border-primary/30 transition-colors"
            >
              {/* Timeline dot */}
              <div className="hidden md:flex absolute -left-[calc(3rem+7px)] top-6 w-3.5 h-3.5 rounded-full bg-primary border-2 border-background" />

              <div className="flex items-start gap-3 mb-3">
                <Briefcase className="text-primary mt-0.5 shrink-0" size={18} />
                <div>
                  <h3 className="font-heading font-semibold text-foreground">{exp.role}</h3>
                  <p className="text-primary text-sm font-medium">{exp.company}</p>
                  <p className="text-muted-foreground/60 text-xs">{exp.duration}</p>
                </div>
              </div>
              <ul className="space-y-2 ml-7">
                {exp.points.map((point, j) => (
                  <li key={j} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="text-primary mt-1.5 shrink-0 w-1 h-1 rounded-full bg-primary inline-block" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
