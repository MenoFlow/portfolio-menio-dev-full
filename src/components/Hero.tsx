
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Sparkles, Download } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";

const Hero = () => {
  const { t } = useLanguage();
  const { scrollY } = useScrollAnimation();
  const [showGreeting, setShowGreeting] = useState(true);
  const [typedText, setTypedText] = useState("");
  const greetingText = "Hello world, It's Hermenio";

  // Calculate opacity based on scroll position for smooth fade effect
  const heroOpacity = Math.max(1 - scrollY / 700, 0);

  // Typewriter effect
  useEffect(() => {
    if (!showGreeting) return;

    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex < greetingText.length) {
        setTypedText(greetingText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        
        // Set timeout to hide the greeting
        setTimeout(() => {
          setShowGreeting(false);
        }, 2000);
      }
    }, 100);

    return () => {
      clearInterval(typeInterval);
    };
  }, [showGreeting]);

  // Reset greeting after it disappears
  useEffect(() => {
    if (!showGreeting) {
      const timeout = setTimeout(() => {
        setTypedText("");
        setShowGreeting(true);
      }, 5000);
      
      return () => clearTimeout(timeout);
    }
  }, [showGreeting]);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative"
      style={{ opacity: heroOpacity }}
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <AnimatePresence>
            {showGreeting && (
              <motion.div 
                className="mb-4 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="inline-flex items-center gap-2 text-xl sm:text-2xl mb-2 text-highlight"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>{typedText}</span>
                  <Sparkles className="w-5 h-5" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 flex justify-center"
            whileHover={{ scale: 1.05, rotate: 5 }}
          >
            <Avatar className="h-40 w-40 border-4 border-highlight shadow-xl">
              <AvatarImage src="/Menoh.png" alt="Portrait" />
              <AvatarFallback className="text-4xl font-bold bg-accent text-white">
                ME
              </AvatarFallback>
            </Avatar>
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.span 
              className="text-highlight"
              whileHover={{ scale: 1.05 }}
            >
              {t("webDeveloper")}
            </motion.span>
            <br />
            {t("creativePassionate")}
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {t("heroDescription")}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#about"
              className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-full bg-highlight text-primary hover:bg-highlight/90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("learnMore")}
            </motion.a>
            
            <motion.a
              href="/myCV.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 text-lg font-medium rounded-full bg-transparent border-2 border-highlight text-highlight hover:bg-highlight/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              {t("downloadCV")}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          y: [0, 10, 0],
        }}
        transition={{
          opacity: { delay: 1, duration: 1 },
          y: { duration: 2, repeat: Infinity, repeatType: "loop" }
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="w-6 h-6 text-highlight" />
      </motion.div>
    </section>
  );
};

export default Hero;
