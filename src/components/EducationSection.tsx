import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Your University Name",
    duration: "2022 – 2026",
    gpa: "8.5 CGPA",
    details: "Relevant coursework: Data Structures, Algorithms, Operating Systems, Computer Networks, DBMS, System Design",
  },
  {
    degree: "Higher Secondary (XII)",
    institution: "Your School Name",
    duration: "2020 – 2022",
    gpa: "92%",
    details: "Mathematics, Physics, Chemistry, Computer Science",
  },
];

const EducationSection = () => (
  <section id="education" className="section-padding">
    <div className="container mx-auto">
      <SectionHeading label="Education" title="Academic Background" />

      <div className="max-w-2xl mx-auto space-y-6">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="glass-card p-6 relative pl-16 hover:border-primary/30 transition-colors"
          >
            <div className="absolute left-5 top-6 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <GraduationCap className="text-primary" size={18} />
            </div>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
              <h3 className="font-heading font-semibold text-foreground">{edu.degree}</h3>
              <span className="text-primary text-sm font-medium">{edu.gpa}</span>
            </div>
            <p className="text-muted-foreground text-sm mb-1">{edu.institution}</p>
            <p className="text-muted-foreground/60 text-xs mb-2">{edu.duration}</p>
            <p className="text-muted-foreground text-xs">{edu.details}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
