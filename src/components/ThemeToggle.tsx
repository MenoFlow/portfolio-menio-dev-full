
import { useTheme } from "@/lib/ThemeContext";
import { useLanguage } from "@/lib/LanguageContext";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-2 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
      aria-label={theme === "dark" ? t("lightMode") : t("darkMode")}
      title={theme === "dark" ? t("lightMode") : t("darkMode")}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-300" />
      ) : (
        <Moon className="h-5 w-5 text-blue-700" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
