
import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useState } from "react";

const testimonialData = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: {
      en: "Marketing Director",
      fr: "Directrice Marketing",
    },
    text: {
      en: "Working with Meeeenoh was an absolute pleasure. He took our vague concept and turned it into a beautiful, functional website that perfectly represents our brand.",
      fr: "Travailler avec Meeeenoh a été un plaisir absolu. Il a pris notre concept vague et l'a transformé en un site web beau et fonctionnel qui représente parfaitement notre marque.",
    },
    avatar: "/placeholder.svg",
  },
  {
    id: 2,
    name: "David Chen",
    position: {
      en: "Tech Startup Founder",
      fr: "Fondateur de Startup Tech",
    },
    text: {
      en: "Meeeenoh's technical expertise is top-notch. He delivered our web application on time and within budget, with all the features we needed and more.",
      fr: "L'expertise technique de Meeeenoh est excellente. Il a livré notre application web à temps et dans les limites du budget, avec toutes les fonctionnalités dont nous avions besoin et plus encore.",
    },
    avatar: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    position: {
      en: "E-commerce Manager",
      fr: "Responsable E-commerce",
    },
    text: {
      en: "Our online store's performance improved dramatically after Meeeenoh's optimization work. Sales are up, and customers love the new user experience.",
      fr: "Les performances de notre boutique en ligne se sont considérablement améliorées après le travail d'optimisation de Meeeenoh. Les ventes sont en hausse, et les clients adorent la nouvelle expérience utilisateur.",
    },
    avatar: "/placeholder.svg",
  },
];

const Testimonials = () => {
  const { t, language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonialData.length) % testimonialData.length);
  };

  return (
    <section id="testimonials" className="bg-primary fade-in-section py-16">
      <div className="section-container">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          {t("testimonials")}
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 rounded-xl relative"
          >
            <Quote className="text-highlight w-12 h-12 opacity-20 absolute top-6 left-6" />
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={testimonialData[activeIndex].avatar}
                  alt={testimonialData[activeIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <blockquote className="text-lg italic mb-4 relative z-10 pl-6">
                  "{testimonialData[activeIndex].text[language]}"
                </blockquote>
                <div className="font-bold">{testimonialData[activeIndex].name}</div>
                <div className="text-gray-400 text-sm">{testimonialData[activeIndex].position[language]}</div>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 gap-4">
            {testimonialData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? "bg-highlight" : "bg-gray-600"
                }`}
                aria-label={`Testimonial ${index + 1}`}
              ></button>
            ))}
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
            <button
              onClick={handlePrev}
              className="bg-primary/50 backdrop-blur-sm p-2 rounded-full transform -translate-x-1/2 pointer-events-auto hover:bg-primary/70 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="bg-primary/50 backdrop-blur-sm p-2 rounded-full transform translate-x-1/2 pointer-events-auto hover:bg-primary/70 transition-colors"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
