import { Code, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  const skills = [
    "JS/TS",
    "React.js",
    "Node.js",
    "Python",
    "SQL",
    "Laravel",
  ];

  return (
    <section id="about" className="bg-secondary">
      <div className="section-container">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          À Propos de Moi
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="glass-card p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Code className="text-highlight" />
              Compétences
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-primary/30 rounded-lg px-4 py-2 text-center"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Briefcase className="text-highlight" />
                Expérience
              </h3>
              <p className="text-gray-300">
                Plus de 2 ans d'expérience en développement web, spécialisé dans la création d'applications modernes et performantes.
              </p>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <GraduationCap className="text-highlight" />
                Formation
              </h3>
              <p className="text-gray-300">
                Licence en Informatique à l'école Nationale d'Informatique Fianarantsoa
                <br />
                Spécialisation en Développement Web
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;