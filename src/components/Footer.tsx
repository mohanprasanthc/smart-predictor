import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="text-lg font-semibold gradient-text">ML Classification Project</div>
          <p className="text-sm text-muted-foreground mt-1">
            Built with Python & scikit-learn
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:bg-secondary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:bg-secondary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:bg-secondary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
