import { useState } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const object = Object.fromEntries(formData);

    // Add Web3Forms access key
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      toast.error('Web3Forms Access Key is missing. Please check your environment variables.');
      setIsSubmitting(false);
      return;
    }

    const json = JSON.stringify({
      ...object,
      access_key: accessKey,
    });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Message sent successfully!');
        (e.target as HTMLFormElement).reset();
      } else {
        console.error('Web3Forms Error:', result);
        toast.error(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      toast.error('Failed to send message. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-4 md:px-8 lg:px-16 py-8">
      {/* Section Header */}
      <div className="section-header mb-8">
        <h2 className="text-2xl font-bold">Contact Information</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Contact Info Column */}
        <div className="brutalist-card flex-1">
          <p className="text-base leading-relaxed mb-6">
            For Queries and Collab or if you just want to get in touch, mail me at:{' '}
            <a href="mailto:nlhrithik123@gmail.com" className="text-primary font-semibold underline hover:no-underline">
              nlhrithik123@gmail.com
            </a>
          </p>

          {/* Primary Links */}
          <div className="flex flex-wrap gap-3 mb-6">
            <a
              href="https://github.com/hrithiknl17"
              target="_blank"
              rel="noopener noreferrer"
              className="brutalist-btn btn-github flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/hrithiknl/"
              target="_blank"
              rel="noopener noreferrer"
              className="brutalist-btn btn-linkedin flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="mailto:nlhrithik123@gmail.com"
              className="brutalist-btn btn-email flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            You can also find me at the following sites:
          </p>

          {/* Secondary Links */}
          <div className="flex gap-2 mt-3">
            <a
              href="https://x.com/nlhrithik123"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border-2 border-foreground rounded-lg bg-background hover:bg-muted transition-all font-bold"
              style={{ boxShadow: '4px 4px 0 black' }}
              aria-label="Twitter"
            >
              𝕏
            </a>
            <a
              href="https://www.instagram.com/hrithik_nl_gowda/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border-2 border-foreground rounded-lg bg-[#E4405F] hover:bg-[#d62d4c] transition-all font-bold text-white text-xl"
              style={{ boxShadow: '4px 4px 0 black' }}
              aria-label="Instagram"
            >
              I
            </a>
            <a
              href="https://www.reddit.com/user/Active_Reflection506/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border-2 border-foreground rounded-lg bg-[#FF4500] hover:bg-[#e03d00] transition-all font-bold text-white text-xl"
              style={{ boxShadow: '4px 4px 0 black' }}
              aria-label="Reddit"
            >
              R
            </a>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="brutalist-card flex-1 bg-[#A5C9E1]">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider italic">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Maki Zen'in"
                className="brutalist-input"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider italic">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Maki Zen'in@gmail.com"
                className="brutalist-input"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider italic">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Describe your project..."
                className="brutalist-textarea resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="brutalist-btn btn-send disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
