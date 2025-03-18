
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import { LanguageProvider } from "@/lib/LanguageContext";
import { ThemeProvider } from "@/lib/ThemeContext";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-primary">
          <Navbar />
          <Hero />
          <About />
          <Timeline />
          <Projects />
          {/* <Testimonials /> */}
          <Contact />
          <Footer />
          <Toaster />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
