import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ExternalLink, Code2, Folder } from "lucide-react";

const projects = [
  {
    title: "Learn Pro: AI Student Assistant",
    description: "Full-stack student assistant using Angular, NestJS and MongoDB for task management and quiz generation through the GEMINI API and Langchain JS. Users can manage schedules via prompt or form-based input.",
    tech: ["Angular", "NestJS", "MongoDB", "Gemini API", "LangChain JS"],
    demo: "",
    github: "https://github.com/Saiteja2580/CIP",
  },
  {
    title: "Wanderlast – Airbnb Clone",
    description: "Full-stack web application using the MERN stack (MongoDB, Express.js, React, Node.js), implementing a RESTful API for seamless frontend-backend communication.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "REST API"],
    demo: "",
    github: "https://github.com/Saiteja2580/Wanderlast",
  },
  {
    title: "Check Details Extraction Web App",
    description: "Data extraction application with Next.js, leveraging the Gemini API and Genkit to process user-uploaded images with high accuracy. Intuitive interface for editing and copying extracted data.",
    tech: ["Next.js", "Gemini API", "Genkit", "TypeScript"],
    demo: "",
    github: "https://github.com/Saiteja2580/Check",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="container mx-auto">
      <SectionHeading label="Projects" title="Featured Work" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass-card p-6 flex flex-col hover:border-primary/30 transition-colors group"
          >
            <div className="flex items-center justify-between mb-4">
              <Folder className="text-primary" size={24} />
              <div className="flex items-center gap-3">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Code2 size={18} />
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground font-medium">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
