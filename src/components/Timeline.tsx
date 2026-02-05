
import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2021",
    title: {
      en: ["High School Diploma - TGC"],
      fr: ["Baccalauréat - TGC"],
    },
    description: {
      en: ["Graduated with Technical Commercial Management specialization in BTP."],
      fr: ["Obtention du diplôme avec spécialisation en BTP."],
    },
  },
  {
    year: "2022",
    title: {
      en: ["High School Diploma - Series C"],
      fr: ["Baccalauréat - Série C"],
    },
    description: {
      en: ["Scientific track with focus on Mathematics and Physics."],
      fr: ["Filière scientifique avec concentration en Mathématiques et Physique."],
    },
  },
  {
    year: "2023",
    title: {
      en: [
        "Bachelor's Degree - Year 1",
        "Obtention du DELF B1"
      ],
      fr: [
        "Licence 1",
        "Obtention du DELF B1"
      ],
    },
    description: {
      en: [
        "First year of higher education in Computer Science.",
        "Obtained DELF B1 certificate (intermediate level)"
      ],
      fr: [
        "Première année d'études supérieures en Informatique.",
        "Obtention du certificat DELF B1"
      ],
    },
  },
  {
    year: "2024",
    title: {
      en: [
        "Bachelor's Degree - Year 2",
        "Obtention du DELF B2"
      ],
      fr: [
        "Licence 2",
        "Obtention du DELF B2"
      ],
    },
    description: {
      en: [
        "Second year specializing in Web Development.",
        "Obtained DELF B2 certificate (upper intermediate level)"
      ],
      fr: [
        "Deuxième année avec spécialisation en Développement Web.",
        "Obtention du certificat DELF B2"
      ],
    },
  },
  {
    year: "2025",
    title: {
      en: [
        "Bachelor's Degree - Year 3",
        "Obtention du DALF C1",
        "Obtention du DALF C2"
      ],
      fr: [
        "Licence 3",
        "Obtention du DALF C1",
        "Obtention du DALF C2"
      ],
    },
    description: {
      en: [
        "Advanced studies in Full Stack Development.",
        "Obtained DALF C1 certificate (advanced level)",
        "Obtained DALF C2 certificate (mastery level)"
      ],
      fr: [
        "Approfondissement des études en Développement Full Stack.",
        "Obtention du certificat DALF C1",
        "Obtention du certificat DALF C2"
      ],
    },
  },
  {
    year: "2026",
    title: {
      en: [
        "Master 1 - Year 4",
        "Obtention du certificat d'anglais TEFL"
      ],
      fr: [
        "Master 1",
        "Obtention du certificat d'anglais TEFL"
      ],
    },
    description: {
      en: [
        "First year of Master's program focusing on advanced software engineering and project management.",
        "Obtained TEFL certificate (Teaching English as a Foreign Language)"
      ],
      fr: [
        "Première année de Master axée sur l’ingénierie logicielle avancée et la gestion de projet.",
        "Obtention du certificat TEFL (Teaching English as a Foreign Language)"
      ],
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
          {/* Ligne centrale verticale */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-highlight/30"></div>

          <div className="space-y-20 md:space-y-24">
            {timelineData.map((item, yearIndex) => (
              <motion.div
                key={yearIndex}
                className="relative"
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.7, delay: yearIndex * 0.18 }}
              >
                {/* Badge année centré */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900/90 px-6 py-2.5 rounded-full border border-highlight/50 text-highlight font-bold text-xl z-20 shadow-md">
                  {item.year}
                </div>

                {/* Carte unique par année – alternance gauche/droite */}
                <div
                  className={`
            w-5/12 
            ${yearIndex % 2 === 0
                      ? "mr-auto pr-8 text-right"
                      : "ml-auto pl-8 text-left"
                    }
          `}
                >
                  <div className="glass-card p-6 hover:border-highlight/50 transition-all duration-300 shadow-lg">
                    {/* Contenu des événements */}
                    <div className="space-y-6">
                      {item.title[language].map((titleText, eventIndex) => (
                        <div key={eventIndex}>
                          <h4 className="font-semibold text-lg text-white mb-2">
                            {titleText}
                          </h4>
                          <p className="text-gray-300 leading-relaxed">
                            {item.description[language][eventIndex]}
                          </p>

                          {/* Séparateur horizontal entre événements (sauf le dernier) */}
                          {eventIndex < item.title[language].length - 1 && (
                            <hr className="mt-6 border-t border-gray-700/60" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Point sur la timeline (centré sur la ligne) */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-highlight z-10 top-1/2 -mt-2.5 shadow-glow"></div>
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
                  <div className="glass-card p-6 hover:border-highlight/50 transition-colors">
                    <h3 className="text-highlight font-bold text-xl mb-4">{item.year}</h3>

                    {item.title[language].map((titleText, i) => (
                      <div key={i} className="mb-4">
                        <h4 className="font-semibold text-lg">{titleText}</h4>
                        <p className="text-gray-300 mt-1">{item.description[language][i]}</p>

                        {/* Ligne de séparation sauf après le dernier élément */}
                        {i < item.title[language].length - 1 && (
                          <hr className="my-5 border-gray-600/50" />
                        )}
                      </div>
                    ))}
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
