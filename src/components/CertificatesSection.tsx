import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "JavaScript",
    issuer: "Udemy",
    date: "2023",
    link: "/certificates/Javascript.pdf",
  },
  {
    title: "Version Control",
    issuer: "Coursera",
    date: "2024",
    link: "/certificates/Version_Control_Systems.pdf",
  },
  {
    title: "Introduction to App Development",
    issuer: "Coursera",
    date: "2024",
    link: "/certificates/Introduction_To_App_Dev.pdf",
  },
  {
    title: "Java",
    issuer: "IITB Spoken Tutorial",
    date: "2024",
    link: "/certificates/Java_Certificate.pdf",
  },
  {
    title: "Angular",
    issuer: "Udemy",
    date: "In Progress",
    link: "",
  },
];

const CertificatesSection = () => (
  <section id="certificates" className="section-padding">
    <div className="container mx-auto">
      <SectionHeading label="Certificates" title="Certifications & Achievements" />

      <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass-card p-5 flex items-start gap-4 hover:border-primary/30 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Award className="text-primary" size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-heading font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-muted-foreground text-xs mt-1">{cert.issuer}</p>
              <p className="text-muted-foreground/50 text-xs">{cert.date}</p>
            </div>
            {cert.link && (
              <a href={cert.link} target="_blank" rel="noreferrer">
                <ExternalLink className="text-muted-foreground/40 group-hover:text-primary transition-colors shrink-0 mt-1" size={14} />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificatesSection;
