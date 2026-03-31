import Layout from "@/components/Layout";
import ParallaxSection from "@/components/ParallaxSection";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

import parallaxBg from "@/assets/parallax-bg.jpg";

const Contact = () => {
  return (
    <Layout>
      <ParallaxSection backgroundImage={parallaxBg}>
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-cta mb-4">Contact Us</h1>
          <p className="text-background/80 text-lg">Get in Touch for Free Safety Net Installation Quote</p>
        </div>
      </ParallaxSection>

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg">Our Address</h3>
                    <p className="text-muted-foreground"># 17, 17th Cross, MES Road, Muthyalanagar, Bangalore-54</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg">Phone</h3>
                    <a href="tel:7795891177" className="text-primary hover:underline text-lg font-semibold">+91 7795891177</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg">Email</h3>
                    <a href="mailto:vickysafetynets552@gmail.com" className="text-primary hover:underline">vickysafetynets552@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg">Working Hours</h3>
                    <p className="text-muted-foreground">Monday - Sunday: 8:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1!2d77.5833!3d13.0267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMuthyalanagar%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Vicky Safety Nets Location"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-muted p-8 rounded-lg">
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">Send Us a Message</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium mb-1">Your Name *</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone Number *</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Enter your phone number" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Enter your email" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Service Required *</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all">
                    <option value="">Select a service</option>
                    <option>Balcony Safety Nets</option>
                    <option>Pigeon Nets</option>
                    <option>Bird Protection Nets</option>
                    <option>Bird Spikes</option>
                    <option>Cricket Practice Nets</option>
                    <option>Sports Nets</option>
                    <option>Building Safety Nets</option>
                    <option>Industrial Safety Nets</option>
                    <option>Swimming Pool Nets</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none" placeholder="Tell us about your requirements" />
                </div>
                <button type="submit" className="cta-button w-full text-center">
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
