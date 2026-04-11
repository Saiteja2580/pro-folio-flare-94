import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.E – Computer Science and Engineering (AI & ML)",
    institution: "SCSVMV University",
    duration: "2022 – 2026 (Expected)",
    gpa: "9.42 CGPA",
    details: "Relevant coursework: Data Structures, OOPs, DBMS",
  },
  {
    degree: "Minor in Artificial Intelligence",
    institution: "IIT Mandi",
    duration: "Expected 2026",
    gpa: "",
    details: "AI specialization program from Indian Institute of Technology, Mandi",
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
              {edu.gpa && <span className="text-primary text-sm font-medium">{edu.gpa}</span>}
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
