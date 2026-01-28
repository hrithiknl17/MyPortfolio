import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-8 border-t-2 border-foreground bg-background px-4 md:px-8 lg:px-16 py-6">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between gap-8 mb-6">
        {/* Links Column */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-primary transition-colors">Home</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Get in Touch</h4>
          <div className="flex gap-4">
            <a
              href="https://github.com/hrithiknl17"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/hrithiknl/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:nlhrithik123@gmail.com"
              className="hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Separator */}
      <hr className="h-0.5 bg-foreground border-none rounded-full mb-4" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p>© {currentYear} Hrithik N L. All rights reserved.</p>
        <p>
          Made in India
        </p>
      </div>
    </footer>
  );
};

export default Footer;
