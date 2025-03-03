import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            <span className="text-highlight">Développeur Web</span>
            <br />
            Créatif & Passionné
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Je crée des expériences web uniques et mémorables, en combinant design et fonctionnalité.
          </p>
          <a
            href="#about"
            className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-full bg-highlight text-primary hover:bg-highlight/90 transition-colors"
          >
            En savoir plus
          </a>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="w-6 h-6 text-highlight animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;