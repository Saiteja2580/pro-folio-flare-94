import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2025",
    link: "https://credential.example.com",
  },
  {
    title: "Meta Front-End Developer Certificate",
    issuer: "Meta (Coursera)",
    date: "2024",
    link: "https://credential.example.com",
  },
  {
    title: "System Design Fundamentals",
    issuer: "Educative",
    date: "2024",
    link: "https://credential.example.com",
  },
  {
    title: "Docker & Kubernetes Masterclass",
    issuer: "Udemy",
    date: "2024",
    link: "https://credential.example.com",
  },
];

const CertificatesSection = () => (
  <section id="certificates" className="section-padding">
    <div className="container mx-auto">
      <SectionHeading label="Certificates" title="Certifications & Achievements" />

      <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
        {certificates.map((cert, i) => (
          <motion.a
            key={cert.title}
            href={cert.link}
            target="_blank"
            rel="noreferrer"
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
            <ExternalLink className="text-muted-foreground/40 group-hover:text-primary transition-colors shrink-0 mt-1" size={14} />
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default CertificatesSection;
