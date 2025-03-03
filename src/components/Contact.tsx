import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="bg-secondary">
      <div className="section-container">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Contact
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">Restons en contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="text-highlight" />
                <span>andriantsoahermenio05@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-highlight" />
                <span>+261 34 21 799 97</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-highlight" />
                <span>Fianarantsoa, Madagascar</span>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">

            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-primary/30 border border-white/10 focus:border-highlight focus:ring-1 focus:ring-highlight outline-none transition-colors"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-primary/30 border border-white/10 focus:border-highlight focus:ring-1 focus:ring-highlight outline-none transition-colors"
              />
            </div>
            
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-highlight text-primary hover:bg-highlight/90 transition-colors"
            >
              <Send className="w-4 h-4" />
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;