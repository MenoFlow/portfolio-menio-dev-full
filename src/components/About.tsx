
import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";
import { 
  Atom, 
  Server, 
  FileCode, 
  Database, 
  Layout, 
  ArrowRight, 
  Terminal,
  Settings,
  Briefcase, 
  GraduationCap,
  Code
} from "lucide-react";

const About = () => {
  const { t, language } = useLanguage();
  
  const skills = [
    { name: "React", icon: <Atom className="w-5 h-5" /> },
    { name: "Node.js", icon: <Server className="w-5 h-5" /> },
    { name: "Nest", icon: <Layout className="w-5 h-5" /> },
    { name: "Next", icon: <ArrowRight className="w-5 h-5" /> },
    { name: "TS/JS", icon: <FileCode className="w-5 h-5" /> },
    { name: "Python", icon: <Terminal className="w-5 h-5" /> },
    { name: "Laravel", icon: <Settings className="w-5 h-5" /> },
    { name: "MySQL", icon: <Database className="w-5 h-5" /> },
  ];

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="bg-secondary fade-in-section">
      <div className="section-container">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          {t("aboutMe")}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            className="glass-card p-6 hover:scale-105 transition-transform duration-300"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Code className="text-highlight" />
              {t("skills")}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="bg-primary/30 rounded-lg p-4 text-center hover:bg-highlight/20 transition-colors flex flex-col items-center gap-2"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-highlight">{skill.icon}</div>
                  <div>{skill.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <div className="space-y-6">
            <motion.div 
              className="glass-card p-6 hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Briefcase className="text-highlight" />
                {t("experience")}
              </h3>
              <p className="text-gray-300">
                {t("experienceDescription")}
              </p>
            </motion.div>
            
            <motion.div 
              className="glass-card p-6 hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <GraduationCap className="text-highlight" />
                {t("education")}
              </h3>
              <p className="text-gray-300 whitespace-pre-line">
                {t("educationDescription")}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
