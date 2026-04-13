import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Development Intern",
    company: "eMudhra Ltd",
    duration: "Ongoing",
    points: [
      // "Engineered robust backend solutions using Spring Boot, focusing on bug resolution and system optimization.",
      "Developed core product functionalities utilizing eBPF, Kafka, and Microservices architecture.",
      "Integrated secure eSignature APIs to implement electronic signing features for a University LMS platform.",
      "Acquired fundamental knowledge of AWS cloud technologies through professional training and exploration.",
      "Designed high-fidelity UI/UX wireframes and hierarchical screen structures using Figma.",
    ],
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Student LMS Project (Startup)",
    duration: "Recent",
    points: [
      "Architected and developed a modular Student Learning Management System (LMS) backend using NestJS.",
      "Engineered features for multimedia content (Audio/Video), attendance tracking, and comprehensive analytics.",
      "Integrated AI-driven modules to automate educational workflows and enhance learning experiences.",
      "Ensured scalable and maintainable code architecture for a growing startup environment.",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding">
    <div className="container mx-auto">
      <SectionHeading label="Experience" title="Work Experience" />

      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-border hidden md:block" />

        <div className="space-y-12 md:space-y-16">
          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;

            return (
              <div key={i} className="relative">
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 z-10">
                  <div className="w-4 h-4 rounded-full bg-primary border-[3px] border-background shadow-[0_0_12px_hsl(var(--primary)/0.4)]" />
                </div>

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
