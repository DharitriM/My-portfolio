import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code, 
  Server, 
  Database, 
  Wrench, 
  Users, 
  Shield 
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    title: 'Libraries & Frameworks',
    icon: Code,
    skills: ['React.js', 'Next.js', 'Nest.js', 'Bootstrap', 'Tailwind', 'Three.js', 'Stripe'],
  },
  {
    title: 'Backend & Databases',
    icon: Server,
    skills: ['Node.js', 'NestJS', 'Supabase', 'MySQL', 'MongoDB', 'PostgreSQL'],
  },
  {
    title: 'Tools & Version Control',
    icon: Wrench,
    skills: ['npm', 'Git', 'GitHub', 'Postman', 'Insomnia', 'Swagger', 'Socket.IO'],
  },
  {
    title: 'State & Route Management',
    icon: Database,
    skills: ['Context API', 'Redux', 'Redux Toolkit', 'Zustand', 'Axios'],
  },
  {
    title: 'Authentication',
    icon: Shield,
    skills: ['JWT', 'OAuth', 'Supabase Auth', 'Descope'],
  },
];

const softSkills = ['Problem Solving', 'Collaboration', 'Adaptability', 'Creativity'];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-32 px-6 relative bg-muted/30">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            My Expertise
          </span>
          <h2 className="section-title mb-4">
            Technical{' '}
            <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="glass-card-hover p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="glass-card p-8 inline-block">
            <div className="flex items-center gap-3 justify-center mb-4">
              <Users className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-lg">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-primary/10 to-cyan-400/10 text-foreground font-medium border border-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
