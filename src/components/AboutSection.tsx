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
          I'm a final-year Computer Science & Engineering (AI & ML) student at SCSVMV University
          with a Minor in AI from IIT Mandi. I have a comprehensive skill set in full-stack
          development including Angular, Next.js, React, Node.js, and AWS. I'm passionate about
          building robust web applications and designing intuitive user interfaces that solve
          real-world problems.
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
