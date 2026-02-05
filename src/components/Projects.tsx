import { Github, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { 
  Atom, 
  Server, 
  FileCode, 
  Database, 
  Layout, 
  ArrowRight, 
  Terminal,
  Settings
} from "lucide-react";

const techIcons: {[key: string]: JSX.Element} = {
  "React": <Atom className="w-4 h-4" />,
  "Vue.js": <Atom className="w-4 h-4" />,
  "Node.js": <Server className="w-4 h-4" />,
  "Express": <Server className="w-4 h-4" />,
  "Nest": <Layout className="w-4 h-4" />,
  "Next.js": <ArrowRight className="w-4 h-4" />,
  "TS/JS": <FileCode className="w-4 h-4" />,
  "JavaScript": <FileCode className="w-4 h-4" />,
  "TypeScript": <FileCode className="w-4 h-4" />,
  "Python": <Terminal className="w-4 h-4" />,
  "Laravel": <Settings className="w-4 h-4" />,
  "PHP": <Settings className="w-4 h-4" />,
  "MongoDB": <Database className="w-4 h-4" />,
  "PostgreSQL": <Database className="w-4 h-4" />,
  "MySQL": <Database className="w-4 h-4" />,
  "Firebase": <Database className="w-4 h-4" />,
  "Tailwind CSS": <FileCode className="w-4 h-4" />,
  "Bootstrap CSS": <FileCode className="w-4 h-4" />,
  "Socket.io": <Server className="w-4 h-4" />,
  "Markdown": <FileCode className="w-4 h-4" />,
};


const projects = [
    {
  title: "TrackFuel360",
  description: {
    fr: "Une application de suivi intelligent de carburant et de détection d'anomalies \n Email: admin@example.com |\n Password: admins",
    en: "An intelligent fuel tracking and anomaly detection application \n Email: admin@example.com |\n Password: admins"
  },
  tech: ["React", "PWA", "Tailwind CSS", "Node.js", "MySQL", "Leaflet"],
  github: "#",
  demo: "https://trackfuel360.com/",
  image: "/trackfuel.png",
},
{
  title: "VinExpert",
  description: {
    fr: "Une application web pour la gestion de la production et la vente de vin \n Email: admin@example.com |\n Password: admins",
    en: "A web application for wine production management and sales \n Email: admin@example.com |\n Password: admins"
  },
  tech: ["React", "Tailwind CSS", "Node.js", "MySQL", "Chart.js"],
  github: "#",
  demo: "https://vinexpert-management.vercel.app/",
  image: "/vinexpert.png",
},

  {
    title: "Cotizadmin",
    description: {
      fr: "Une application de gestion de cotisation \n Username: admin |\n Password: admin",
      en: "An application of cotisation management \n Username: admin |\n Password: admin"
    },
    tech: ["React", "Tailwind CSS", "Node.js"],
    github: "https://github.com/MenoFlow/cotizadmin",
    demo: "https://cotizadmin-v-2-0.vercel.app/",
    image: "/cotizcap3.png",
  },
  {
    title: "Librairie",
    description: {
      fr: "Ma premiere Application. Permet d'exposer les livres à vendre",
      en: "My first APP. Able exposition of book to sell"
    },
    tech: ["React", "Bootstrap CSS"],
    github: "https://github.com/MenoFlow/liliv",
    demo: "https://liliv.vercel.app/",
    image: "librairy.png",
  },

  {
    title: "Porfolio",
    description: {
      fr: "Site portfolio personnel avec blog intégré",
      en: "Personnal site for portfolio with integration of blog"
    },
    tech: ["React", "Tailwind CSS"],
    github: "#",
    demo: "#",
    image: "/portfocap1.png",
  },

];


const Projects = () => {
  const { t, language } = useLanguage();
  useScrollAnimation(); // For scroll animations
  const carouselApiRef = useRef<any>(null);
  
  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselApiRef.current) {
        carouselApiRef.current.scrollNext();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Animation variants for projects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <section id="projects" className="bg-primary fade-in-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            {t("myProjects")}
          </h2>
        </motion.div>
        
        <motion.div 
          className="relative px-4 sm:px-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            setApi={(api) => {
              carouselApiRef.current = api;
            }}
          >
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={project.title} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    variants={itemVariants}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card overflow-hidden group h-full"
                    whileHover={{ 
                      y: -10,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                        {/* <motion.a
                          href={project.github}
                          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <Github className="w-6 h-6" />
                        </motion.a> */}
                        <motion.a
                          href={project.demo}
                          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, rotate: -5 }}
                          whileTap={{ scale: 0.9 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <ExternalLink className="w-6 h-6" />
                        </motion.a>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <motion.h3 
                        className="text-xl font-bold mb-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p 
                        className="text-gray-300 mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        {project.description[language]}
                      </motion.p>
                      <motion.div 
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                      >
                        {project.tech.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1 text-sm rounded-full bg-highlight/10 text-highlight flex items-center gap-1"
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(var(--highlight), 0.2)" }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 * techIndex }}
                          >
                            {techIcons[tech] && (
                              <span className="inline-flex">{techIcons[tech]}</span>
                            )}
                            <span>{tech}</span>
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
              <CarouselPrevious className="left-1 sm:left-4 md:-left-2 bg-accent/20 text-white hover:bg-accent/40" />
              <CarouselNext className="right-1 sm:right-4 md:-right-2 bg-accent/20 text-white hover:bg-accent/40" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
