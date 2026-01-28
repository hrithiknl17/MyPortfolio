import { useState, useEffect } from 'react';
import { Github, Linkedin } from 'lucide-react';
import heroPortrait from '@/assets/hero-portrait.png';

const greetings = ['Hello!', 'Hola!', 'Bonjour!', 'Namaste!', 'Ciao!'];

const HeroSection = () => {
  const [currentGreeting, setCurrentGreeting] = useState('');
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = greetings[greetingIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentGreeting.length < currentWord.length) {
          setCurrentGreeting(currentWord.slice(0, currentGreeting.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (currentGreeting.length > 0) {
          setCurrentGreeting(currentGreeting.slice(0, -1));
        } else {
          setIsDeleting(false);
          setGreetingIndex((prev) => (prev + 1) % greetings.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentGreeting, isDeleting, greetingIndex]);

  return (
    <section id="home" className="px-4 md:px-8 lg:px-16 py-8">
      <div className="flex flex-col lg:flex-row-reverse lg:justify-evenly lg:items-center gap-8 lg:gap-16 lg:py-12">
        {/* Portrait */}
        <div className="flex justify-center">
          <div className="hero-frame w-[115px] h-[175px] lg:w-[250px] lg:h-[400px] overflow-hidden">
            <img
              src={heroPortrait}
              alt="Alex Parker"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
          {/* Typewriter Greeting */}
          <div className="min-h-[35px] lg:min-h-[55px]">
            <span className="text-2xl lg:text-4xl text-primary font-bold typewriter">
              {currentGreeting}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl lg:text-5xl font-bold">
            I’m Hrithik N L
          </h1>

          {/* Description */}
          <p className="text-base lg:text-lg max-w-md">
            Computer Science graduate and {' '}
            <span className="hidden lg:inline"><br /></span>
            aspiring Full Stack Developer based in India.
          </p>
          <p className="text-base lg:text-lg">
            I enjoy building{' '}
            <span className="hidden lg:inline"><br /></span>
            web applications using React, Node.js, and MongoDB.
          </p>

          {/* Learn More Link */}
          <p className="text-base lg:text-lg">
            To learn more about me,{' '}
            <a href="#about" className="text-primary underline hover:no-underline font-semibold">
              Click Here!
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://github.com/hrithiknl17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 lg:w-10 lg:h-10" />
            </a>
            <a
              href="https://www.linkedin.com/in/hrithiknl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 lg:w-10 lg:h-10" />
            </a>
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="brutalist-btn bg-primary mt-4"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
