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

      <div className="max-w-4xl mx-auto relative">
        {/* Center timeline line */}
        <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-border hidden md:block" />

        <div className="space-y-12 md:space-y-16">
          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;

            return (
              <div key={i} className="relative">
                {/* Timeline dot — centered */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 z-10">
                  <div className="w-4 h-4 rounded-full bg-primary border-[3px] border-background shadow-[0_0_12px_hsl(var(--primary)/0.4)]" />
                </div>

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`md:w-[calc(50%-2rem)] ${
                    isLeft ? "md:mr-auto md:pr-0" : "md:ml-auto md:pl-0"
                  }`}
                >
                  <div className="glass-card p-6 hover:border-primary/30 transition-colors relative">
                    {/* Arrow pointer toward center line */}
                    <div
                      className={`hidden md:block absolute top-8 w-3 h-3 rotate-45 border-border bg-card/60 backdrop-blur-xl ${
                        isLeft
                          ? "right-0 translate-x-1/2 border-t border-r"
                          : "left-0 -translate-x-1/2 border-b border-l"
                      }`}
                    />

                    <div className="flex items-start gap-3 mb-3">
                      <Briefcase className="text-primary mt-0.5 shrink-0" size={18} />
                      <div>
                        <h3 className="font-heading font-semibold text-foreground">{exp.role}</h3>
                        <p className="text-primary text-sm font-medium">{exp.company}</p>
                        <p className="text-muted-foreground/60 text-xs mt-0.5">{exp.duration}</p>
                      </div>
                    </div>

                    <ul className="space-y-2 ml-7">
                      {exp.points.map((point, j) => (
                        <li key={j} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-primary inline-block" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
