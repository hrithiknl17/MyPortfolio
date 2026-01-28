import { useState } from 'react';
import { Menu, X, FileText, ChevronDown } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 mx-4 md:mx-8 lg:mx-16 mt-6 mb-6">
      <div className="brutalist-navbar flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">HNL</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="brutalist-btn bg-primary flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            My Resume
          </a>

          {/* Menu Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
              className="brutalist-btn bg-primary flex items-center gap-2"
            >
              Menu
              <ChevronDown className="w-4 h-4" />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full right-0 mt-2 min-w-[180px] bg-card border-4 border-foreground rounded-lg p-2 z-50" style={{ boxShadow: '4px 4px 0 black' }}>
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 font-bold hover:bg-muted rounded-lg transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-2 brutalist-card">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 font-bold hover:bg-muted rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="brutalist-btn bg-primary flex items-center justify-center gap-2 mt-2"
            >
              <FileText className="w-4 h-4" />
              My Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
