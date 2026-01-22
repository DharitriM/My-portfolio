import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'dharitri.m.2001@gmail.com',
    href: 'mailto:dharitri.m.2001@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 6370750693',
    href: 'tel:+916370750693',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Sunabeda, Odisha, India',
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/DharitriM',
    username: '@DharitriM',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dharitri-maharana-3450b120b/',
    username: 'Dharitri Maharana',
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="section-title mb-4">
            Let's Work{' '}
            <span className="gradient-text">Together</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="glass-card-hover p-6 text-center group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground mb-2">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="font-semibold hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  {item.value}
                </a>
              ) : (
                <p className="font-semibold">{item.value}</p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-card p-8"
        >
          <h3 className="text-lg font-semibold text-center mb-6">Connect with me</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-6 py-4 rounded-xl bg-secondary hover:bg-primary/10 border border-transparent hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <link.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-medium group-hover:text-primary transition-colors">{link.label}</p>
                  <p className="text-sm text-muted-foreground">{link.username}</p>
                </div>
                <ExternalLink className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Prefer email? Drop me a message anytime!
          </p>
          <a
            href="mailto:dharitri.m.2001@gmail.com"
            className="btn-gradient inline-flex items-center gap-2"
          >
            <Mail size={18} />
            <span>Send an Email</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
