import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const projects = [
  {
    title: 'MENUSYNC',
    description: 'Multi-tenant restaurant management SaaS platform enabling restaurants to manage menus, tables, orders, subscriptions, and operational dashboards.',
    tech: ['Next.js', 'React.js', 'Node.js', 'NestJS', 'PostgreSQL', 'TypeScript'],
    features: [
      '50+ RESTful APIs with TypeORM',
      'Role-based analytics dashboards',
      'Secure auth with Passport.js & RBAC',
      'Multi-tenant database architecture',
    ],
  },
  {
    title: 'PETLY',
    description: 'Responsive pet care and eCommerce platform enabling users to browse pet products, manage services, and track pet activities.',
    tech: ['Next.js', 'React 19', 'TypeScript', 'Supabase', 'Redux Toolkit', 'Tailwind CSS'],
    githublink: 'https://github.com/DharitriM/Petly-frontend',
    website: 'https://petly-brown.vercel.app/',
    features: [
      'Complete eCommerce functionalities',
      'Scalable frontend architecture',
      'Accessible UI with shadcn/ui',
      'Secure session management',
    ],
  },
  {
    title: 'T.H.E.M',
    description: 'Digital collaboration platform for managing bill uploads and negotiation workflows. Features real-time updates, secure state transitions, and comprehensive frontend flows for bill management.',
    tech: ['Next.js', 'NestJS', 'Supabase', 'AWS S3', 'Socket.io', 'Stripe', 'Tailwind CSS'],
    features: [
      'Bill management & provider uploads',
      'Real-time negotiation handling',
      'Email queues with Bull',
      'WebSocket integration',
    ],
  },
  {
    title: 'HMIIZA',
    description: 'Modern eCommerce platform with real-time buyer–seller chat for instant price negotiation. Complete product lifecycle management with super admin panel.',
    tech: ['React', 'Node.js', 'Redux', 'Stripe'],
    features: [
      'Real-time chat functionality',
      'Cart & order management',
      'Admin hierarchy system',
      'Analytics dashboard',
    ],
  },
  {
    title: 'Voice Task Manager',
    description: 'Voice-controlled task management app with Google Calendar integration. Create, update, and manage tasks using voice commands with auto-synced reminders.',
    tech: ['Next.js', 'Socket.io', 'Google Calendar API', 'Notion'],
    githublink: 'https://github.com/DharitriM/voice-task-manager',
    website: 'https://vtm-kpho.onrender.com/',
    features: [
      'Voice command support',
      'Drag-and-drop status updates',
      'Calendar sync',
      'Browser notifications',
    ],
  },
  {
    title: 'SketchUp',
    description: 'Real-time multiplayer drawing and guessing game. Players take turns sketching while others guess in real time with live canvas sharing.',
    tech: ['Next.js', 'Socket.IO', 'Canvas API'],
    githublink: 'https://github.com/DharitriM/skribbl_clone',
    features: [
      'Live canvas sharing',
      'Instant score updates',
      'Chat functionality',
      'Game state sync',
    ],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-32 px-6 relative bg-muted/30">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            My Work
          </span>
          <h2 className="section-title mb-4">
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Production-grade applications delivered with excellence
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="glass-card-hover p-6 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Folder className="w-6 h-6 text-primary" />
                </div>
                <div className="flex gap-3">  
                  {project?.githublink ? (
                    <a
                      href={project.githublink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                  >
                    <Github size={20} />
                  </a>
                  ) : (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="p-1 cursor-help text-muted-foreground opacity-50">
                            <Github size={20} />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className='bg-primary text-white'>
                          <p>Can't share this project as per client's restriction</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                  {project?.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                  >
                    <ExternalLink size={20} />
                  </a>
                  )}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                {project.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/DharitriM"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-glow inline-flex items-center gap-2"
          >
            <Github size={20} />
            View More on GitHub
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
