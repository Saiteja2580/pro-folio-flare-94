import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Code2, Server, Database, Cpu } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Frontend", desc: "React, TypeScript, Tailwind" },
  { icon: Server, label: "Backend", desc: "Node.js, Express, REST/GraphQL" },
  { icon: Database, label: "Databases", desc: "PostgreSQL, MongoDB, Redis" },
  { icon: Cpu, label: "Systems", desc: "eBPF, Kafka, System Design" },
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
          I'm a 4th year Computer Science & Engineering student with deep expertise in
          full-stack development and distributed systems. I love building performant,
          scalable applications and exploring low-level systems programming with technologies
          like eBPF. My toolkit spans from crafting pixel-perfect UIs to designing
          fault-tolerant backend architectures with message queues and caching layers.
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
