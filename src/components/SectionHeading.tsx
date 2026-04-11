import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
}

const SectionHeading = ({ label, title }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5 }}
    className="mb-16 text-center"
  >
    <span className="text-primary font-heading text-sm font-semibold tracking-widest uppercase mb-3 block">
      {label}
    </span>
    <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
      {title}
    </h2>
  </motion.div>
);

export default SectionHeading;
