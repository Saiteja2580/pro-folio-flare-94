import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Microservices Platform",
    description: "Scalable e-commerce backend with microservices architecture, Kafka event streaming, Redis caching, and PostgreSQL.",
    tech: ["Node.js", "Kafka", "Redis", "PostgreSQL", "Docker"],
    demo: "https://demo.example.com",
    github: "https://github.com",
  },
  {
    title: "Real-time Chat Application",
    description: "Full-stack chat app with WebSocket connections, message persistence in MongoDB, and React frontend.",
    tech: ["React", "Socket.io", "MongoDB", "Express", "TypeScript"],
    demo: "https://demo.example.com",
    github: "https://github.com",
  },
  {
    title: "eBPF Network Monitor",
    description: "Linux kernel-level network monitoring tool built with eBPF for real-time packet analysis and performance tracing.",
    tech: ["eBPF", "C", "Go", "Linux", "Grafana"],
    demo: "",
    github: "https://github.com",
  },
  {
    title: "Task Management Dashboard",
    description: "Collaborative project management tool with drag-and-drop boards, real-time sync, and role-based access control.",
    tech: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    demo: "https://demo.example.com",
    github: "https://github.com",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="container mx-auto">
      <SectionHeading label="Projects" title="Featured Work" />

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
                    <Github size={18} />
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
