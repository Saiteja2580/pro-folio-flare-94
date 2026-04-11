import { Code2, Link, Mail } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="border-t border-border py-12 px-6">
    <div className="container mx-auto text-center">
      <p className="text-muted-foreground text-sm mb-4">Let's connect and build something great together.</p>
      <div className="flex items-center justify-center gap-5 mb-6">
        {[
          { icon: Code2, href: "https://github.com/Saiteja2580" },
          { icon: Link, href: "https://www.linkedin.com/in/sai-teja-karanam" },
          { icon: Mail, href: "mailto:saitejassp2580@gmail.com" },
        ].map(({ icon: Icon, href }) => (
          <a key={href} href={href} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Icon size={18} />
          </a>
        ))}
      </div>
      <p className="text-muted-foreground/40 text-xs">© 2026 Sai Teja Karanam. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
