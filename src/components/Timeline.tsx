
import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2021",
    title: {
      en: "High School Diploma - TGC",
      fr: "Baccalauréat - TGC",
    },
    description: {
      en: "Graduated with Technical Commercial Management specialization in BTP.",
      fr: "Obtention du diplôme avec spécialisation en BTP.",
    },
  },
  {
    year: "2022",
    title: {
      en: "High School Diploma - Series C",
      fr: "Baccalauréat - Série C",
    },
    description: {
      en: "Scientific track with focus on Mathematics and Physics.",
      fr: "Filière scientifique avec concentration en Mathématiques et Physique.",
    },
  },
  {
    year: "2023",
    title: {
      en: "Bachelor's Degree - Year 1",
      fr: "Licence 1",
    },
    description: {
      en: "First year of higher education in Computer Science.",
      fr: "Première année d'études supérieures en Informatique.",
    },
  },
  {
    year: "2024",
    title: {
      en: "Bachelor's Degree - Year 2",
      fr: "Licence 2",
    },
    description: {
      en: "Second year specializing in Web Development.",
      fr: "Deuxième année avec spécialisation en Développement Web.",
    },
  },
  {
    year: "2025",
    title: {
      en: "Bachelor's Degree - Year 3",
      fr: "Licence 3",
    },
    description: {
      en: "Final year focusing on Full Stack Development.",
      fr: "Dernière année axée sur le Développement Full Stack.",
    },
  },
];

const Timeline = () => {
  const { t, language } = useLanguage();

  return (
    <section id="timeline" className="bg-secondary fade-in-section py-16">
      <div className="section-container">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          {t("myJourney")}
        </motion.h2>

        {/* Desktop Timeline (hidden on small screens) */}
        <div className="relative hidden sm:block">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-highlight/30"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className="relative flex items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-highlight z-10"></div>

                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "ml-auto pl-8"}`}>
                  <div className="glass-card p-4 hover:border-highlight/50 transition-colors">
                    <h3 className="text-highlight font-bold text-xl">{item.year}</h3>
                    <h4 className="font-semibold text-lg mb-2">{item.title[language]}</h4>
                    <p className="text-gray-300">{item.description[language]}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline (shown only on small screens) */}
        <div className="sm:hidden">
          <div className="relative">
            {/* Timeline center line */}
            <div className="absolute left-4 top-0 h-full w-1 bg-highlight/30"></div>

            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative pl-12"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-5 transform -translate-y-1/2 w-4 h-4 rounded-full bg-highlight z-10"></div>

                  {/* Content */}
                  <div className="glass-card p-4 hover:border-highlight/50 transition-colors">
                    <h3 className="text-highlight font-bold text-xl">{item.year}</h3>
                    <h4 className="font-semibold text-lg mb-2">{item.title[language]}</h4>
                    <p className="text-gray-300">{item.description[language]}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
