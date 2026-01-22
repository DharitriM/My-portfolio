import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Software Engineer',
    company: 'BrainerHub Solutions',
    location: 'Ahmedabad',
    period: 'Feb 2023 - Present',
    description: [
      'Acquired strong foundational knowledge and hands-on experience in developing, optimizing, and deploying scalable web applications using React.js, Next.js, and Node.js.',
      'Successfully delivered over five complex, production-grade projects, managing full project lifecycles — from client communication and requirement analysis to deployment and post-launch optimization.',
      'Worked on diverse solutions including THEM (digital collaboration platform), COMVERSE (project management system), HOMEVOTE (community voting platform), and HMIIZA (eCommerce platform).',
      'Ensured seamless performance, clean architecture, and outstanding client satisfaction through proactive execution and attention to detail.',
    ],
  },
];

const education = [
  {
    type: 'education',
    title: 'B.Tech in Information Technology',
    company: 'National Institute of Science and Technology',
    period: '2019 - 2023',
    location: 'Odisha',
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            My Journey
          </span>
          <h2 className="section-title mb-4">
            Experience &{' '}
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent transform md:-translate-x-1/2" />

          {/* Work Experience */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative grid md:grid-cols-2 gap-8 mb-12"
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 animate-pulse-glow z-10" />

              {/* Content - Left on desktop */}
              <div className="md:text-right pl-12 md:pl-0 md:pr-12">
                <div className="glass-card-hover p-6">
                  <div className="flex items-center gap-2 md:justify-end mb-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <span className="text-sm text-primary font-medium">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <div className="flex items-center gap-2 md:justify-end text-muted-foreground mb-4">
                    <span>{exp.company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground md:text-right">
                    {exp.description.map((item, i) => (
                      <li key={i} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Empty space on right for desktop layout */}
              <div className="hidden md:block" />
            </motion.div>
          ))}

          {/* Education */}
          {education.map((edu, index) => (
            <motion.div
              key={edu.title}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative grid md:grid-cols-2 gap-8"
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 top-8 w-4 h-4 rounded-full bg-cyan-400 border-4 border-background transform -translate-x-1/2 z-10" />

              {/* Empty space on left for desktop */}
              <div className="hidden md:block" />

              {/* Content - Right on desktop */}
              <div className="pl-12 md:pl-12">
                <div className="glass-card-hover p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm text-cyan-400 font-medium">{edu.period}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{edu.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span>{edu.company}</span>
                    {edu.location && (
                      <>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {edu.location}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
