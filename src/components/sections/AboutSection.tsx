import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Briefcase, GraduationCap, MapPin } from 'lucide-react';

const stats = [
  { icon: Briefcase, value: '3', label: 'Years Experience' },
  { icon: Code2, value: '5+', label: 'Projects Delivered' },
  { icon: GraduationCap, value: 'B.Tech', label: 'IT Graduate' },
  { icon: MapPin, value: 'India', label: 'Based In' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            About Me
          </span>
          <h2 className="section-title mb-4">
            Turning Ideas Into{' '}
            <span className="gradient-text">Reality</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 glass-card p-5 glow">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="relative w-56 h-56 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary via-cyan-700 to-primary p-[2px]">
                    <div className="w-full h-full rounded-full bg-background overflow-hidden">
                      <img
                        src="/dm_pic.JPG"
                        alt="Dharitri Maharana"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary via-cyan-700 to-primary mb-2">Dharitri Maharana</h3>
                  <p className="text-lg text-muted-foreground">Software Developer</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate <span className="text-foreground font-medium">Full Stack Developer</span> with 
                3 years of experience designing and developing scalable, high-performance web 
                applications using React.js, Next.js, Node.js, NestJS, and modern JavaScript frameworks.
              </p>
              <p>
                Proficient in <span className="text-primary font-medium">JavaScript, TypeScript, HTML, CSS</span>, 
                and database management, with a strong focus on clean architecture and optimized 
                performance.
              </p>
              <p>
                Experienced in building seamless end-to-end solutions, integrating frontend and 
                backend systems, and collaborating across teams to deliver robust, user-centric 
                applications.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="glass-card-hover p-5 text-center"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
