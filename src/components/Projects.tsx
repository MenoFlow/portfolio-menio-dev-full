import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Cotizadmin",
    description: "Une application de gestion de cotisation",
    tech: ["React.js", "Tailwind.css", "Node.js"],
    github: "https://github.com/MenoFlow/cotizadmin",
    demo: "https://cotizadmin-v-1-0.vercel.app/",
    image: "/cotizcap3.png",
  },
  {
    title: "Librairie",
    description: "Permet d'exposer les livres à vendre",
    tech: ["React.js", "Bootstrap.css"],
    github: "https://github.com/MenoFlow/liliv",
    demo: "https://liliv.vercel.app/",
    image: "librairy.png",
  },
  // {
  //   title: "Rappel d'anniv",
  //   description: "Application qui souhaite une bonne anniversaire par mail aux amis. Et les rappelle à l'utilisateur",
  //   tech: ["React.js", "Bootstrap", "node.js", "mysql"],
  //   github: "#",
  //   demo: "#",
  //   image: "/placeholder.svg",
  // },

  {
    title: "Porfolio",
    description: "Site portfolio personnel avec blog intégré",
    tech: ["React.js", "Tailwind.css"],
    github: "#",
    demo: "#",
    image: "/portfocap1.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-primary">
      <div className="section-container">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Mes Projets
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass-card overflow-hidden group"
            >
              <div className="relative aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={project.demo}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-highlight/10 text-highlight"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;