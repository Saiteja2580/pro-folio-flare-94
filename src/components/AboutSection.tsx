import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Code2, Server, Database, Cloud } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Frontend", desc: "Angular, React, Next.js" },
  { icon: Server, label: "Backend", desc: "Node.js, Express, NestJS" },
  { icon: Database, label: "Databases", desc: "MongoDB, MySQL" },
  { icon: Cloud, label: "Cloud", desc: "AWS, Git, DevTools" },
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto">
      <SectionHeading label="About" title="Who I Am" />

      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-muted-foreground text-center text-lg leading-relaxed mb-12"
        >
          I'm a 4th year Computer Science & Engineering student with a deep passion for full-stack
          web development. While my core focus lies in building scalable web applications, I also
          nurture a growing interest in Machine Learning and Generative AI. What drives me most is
          the thrill of exploring new technologies, experimenting with cutting-edge APIs, and
          architecting systems that can scale. I thrive on challenges—when a project demands learning
          a new tech stack, I dive in with genuine curiosity and excitement. Adaptable to modern
          development workflows and always hungry to learn, I constantly push myself to stay ahead
          of the curve in this ever-evolving tech landscape.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map(({ icon: Icon, label, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card p-5 text-center group hover:border-primary/30 transition-colors"
            >
              <Icon className="mx-auto mb-3 text-primary" size={24} />
              <h3 className="font-heading font-semibold text-foreground text-sm mb-1">{label}</h3>
              <p className="text-muted-foreground text-xs">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
