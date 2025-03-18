
import { useState, useEffect } from "react";
import { Menu, X, Languages } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { scrollY, activeSection, scrollToSection } = useScrollAnimation();
  
  // Enhanced background effect based on scroll
  const navBackground = scrollY > 50 
    ? "bg-primary/95 backdrop-blur-lg shadow-md" 
    : "bg-transparent";
  
  const navTransition = "transition-all duration-300 ease-in-out";

  const navItems = [
    { name: t("home"), href: "#home", id: "home" },
    { name: t("about"), href: "#about", id: "about" },
    { name: t("timeline"), href: "#timeline", id: "timeline" },
    { name: t("projects"), href: "#projects", id: "projects" },
    // { name: t("testimonials"), href: "#testimonials", id: "testimonials" },
    { name: t("contact"), href: "#contact", id: "contact" },
  ];

  // Close mobile menu when clicking a nav item
  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default to avoid hash navigation
    scrollToSection(id);
    setIsOpen(false);
  };

  // Added animation variants for menu items
  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <nav className={`fixed w-full z-50 ${navBackground} ${navTransition}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span 
              className="text-2xl font-heading font-bold text-highlight"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Portfolio
            </motion.span>
          </motion.div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.id, e)}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={menuItemVariants}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-highlight"
                      : "text-white hover:text-highlight"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
            
            {/* Language Dropdown - Desktop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <DropdownMenu>
                <DropdownMenuTrigger className="ml-4 p-2 flex items-center rounded-md text-white hover:text-highlight transition-colors">
                  <Languages className="h-5 w-5 mr-1" />
                  <span className="text-sm font-medium">{language === 'fr' ? 'Français' : 'English'}</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-secondary/90 backdrop-blur-md border-white/10">
                  <DropdownMenuItem 
                    className={`text-white ${language === 'fr' ? 'bg-accent/50' : ''} hover:bg-accent/30`}
                    onClick={() => setLanguage("fr")}
                  >
                    Français
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className={`text-white ${language === 'en' ? 'bg-accent/50' : ''} hover:bg-accent/30`}
                    onClick={() => setLanguage("en")}
                  >
                    English
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </motion.div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            {/* Language Toggle - Mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <DropdownMenu>
                <DropdownMenuTrigger className="p-2 mr-2 flex items-center rounded-md text-white hover:text-highlight transition-colors">
                  <Languages className="h-5 w-5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-secondary/90 backdrop-blur-md border-white/10">
                  <DropdownMenuItem 
                    className={`text-white ${language === 'fr' ? 'bg-accent/50' : ''} hover:bg-accent/30`}
                    onClick={() => setLanguage("fr")}
                  >
                    Français
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className={`text-white ${language === 'en' ? 'bg-accent/50' : ''} hover:bg-accent/30`}
                    onClick={() => setLanguage("en")}
                  >
                    English
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </motion.div>
            
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-highlight focus:outline-none"
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu with animations */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-secondary/95 backdrop-blur-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.id, e)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    activeSection === item.id
                      ? "text-highlight"
                      : "text-white hover:text-highlight"
                  }`}
                  custom={index}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ x: 5 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
