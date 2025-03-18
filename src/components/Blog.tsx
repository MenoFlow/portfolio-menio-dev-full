
import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: {
      en: "Getting Started with React Hooks",
      fr: "Débuter avec les Hooks de React",
    },
    excerpt: {
      en: "Learn how to use React Hooks to simplify your components and reuse stateful logic.",
      fr: "Apprenez à utiliser les Hooks de React pour simplifier vos composants et réutiliser la logique d'état.",
    },
    date: "2023-10-15",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: {
      en: "The Power of TypeScript in Modern Web Development",
      fr: "La puissance de TypeScript dans le développement web moderne",
    },
    excerpt: {
      en: "Discover how TypeScript can improve your productivity and reduce bugs in your codebase.",
      fr: "Découvrez comment TypeScript peut améliorer votre productivité et réduire les bugs dans votre code.",
    },
    date: "2023-11-22",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: {
      en: "Building Accessible UIs with React",
      fr: "Construire des interfaces accessibles avec React",
    },
    excerpt: {
      en: "Best practices for creating inclusive and accessible React applications for all users.",
      fr: "Meilleures pratiques pour créer des applications React inclusives et accessibles pour tous les utilisateurs.",
    },
    date: "2023-12-05",
    image: "/placeholder.svg",
  },
];

const Blog = () => {
  const { t, language } = useLanguage();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(language === "fr" ? "fr-FR" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section id="blog" className="bg-primary fade-in-section py-16">
      <div className="section-container">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          {t("latestArticles")}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              className="glass-card overflow-hidden group hover:border-highlight/50"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title[language]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{t("publishedOn")} {formatDate(post.date)}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-highlight transition-colors">
                  {post.title[language]}
                </h3>
                <p className="text-gray-300 mb-4">{post.excerpt[language]}</p>
                <a
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-highlight hover:underline"
                >
                  {t("readMore")}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
