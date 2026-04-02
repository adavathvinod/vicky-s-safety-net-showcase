import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import vickyLogo from "@/assets/vicky-logo.png";

const Footer = () => {
  const safetyServices = [
    { label: "Balcony Safety Nets", path: "/safety-nets/balcony" },
    { label: "Kids Net For Balcony", path: "/safety-nets/kids" },
    { label: "Pets Safety Nets", path: "/safety-nets/pets" },
    { label: "Grill Balcony Safety Nets", path: "/safety-nets/grill-balcony" },
    { label: "Terrace Top Nets", path: "/safety-nets/terrace" },
    { label: "Industrial Safety Nets", path: "/safety-nets/industrial" },
    { label: "Building Safety Nets", path: "/safety-nets/building" },
    { label: "Duct Area Safety Nets", path: "/safety-nets/duct-area" },
    { label: "Open Area Safety Nets", path: "/safety-nets/open-area" },
    { label: "Staircase Safety Nets", path: "/safety-nets/staircase" },
    { label: "Construction Safety Nets", path: "/safety-nets/construction" },
    { label: "Swimming Pool Safety Nets", path: "/safety-nets/swimming-pool" },
    { label: "Car Parking Safety Nets", path: "/safety-nets/car-parking" },
    { label: "Coconut Tree Safety Nets", path: "/safety-nets/coconut-tree" },
    { label: "HDPE Nets, Nylon Nets", path: "/safety-nets/hdpe-nylon" },
  ];

  const birdServices = [
    { label: "Pigeon Nets", path: "/bird-protection/pigeon-nets" },
    { label: "Pigeon Safety Nets", path: "/bird-protection/pigeon-safety" },
    { label: "Pigeon Nets Installation", path: "/bird-protection/pigeon-installation" },
    { label: "Bird Spikes", path: "/bird-protection/bird-spikes" },
    { label: "Bird Protection Nets", path: "/bird-protection/bird-protection" },
    { label: "Anti Bird Nets", path: "/bird-protection/anti-bird" },
    { label: "Pigeon Nets For Balconies", path: "/bird-protection/pigeon-balconies" },
    { label: "Sparrow Protection Nets", path: "/bird-protection/sparrow" },
    { label: "Anti Seagull Nets", path: "/bird-protection/anti-seagull" },
    { label: "Cricket Practice Nets", path: "/sports-nets/cricket" },
    { label: "Sports Ball Stop Nets", path: "/sports-nets/ball-stop" },
    { label: "Football Stop Netting", path: "/sports-nets/football" },
    { label: "Terrace Cricket Nets", path: "/sports-nets/terrace-cricket" },
    { label: "Sports Nets Installation", path: "/sports-nets/installation" },
    { label: "All Sports Nets", path: "/sports-nets/all" },
  ];

  return (
    <footer className="gradient-footer text-background/90">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={vickyLogo} alt="Vicky Safety Nets Logo" className="h-10 w-auto brightness-0 invert" loading="lazy" />
            </div>
            <p className="text-sm leading-relaxed opacity-80">
              Our services include Balcony Safety Net, Children Safety Net, Construction Safety Net, Duct Area Safety Net, Industrial Safety Net, Swimming Pool Safety Net, Staircase Safety Net, Monkey Safety Net, Bird Spikes, Anti Bird, Pigeon Nets for Balconies, Bird Protection Nets, Cricket Practice Net, All Sports Practice Nets.
            </p>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-cta">Our Services</h3>
            <ul className="space-y-1.5">
              {safetyServices.map((s) => (
                <li key={s.path}>
                  <Link to={s.path} className="text-sm opacity-80 hover:opacity-100 hover:text-cta transition-colors">
                    › {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bird & Sports */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-cta">More Services</h3>
            <ul className="space-y-1.5">
              {birdServices.map((s) => (
                <li key={s.path}>
                  <Link to={s.path} className="text-sm opacity-80 hover:opacity-100 hover:text-cta transition-colors">
                    › {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-cta">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <p className="text-sm opacity-80"># 17, 17th Cross, MES Road, Muthyalanagar, Bangalore-54</p>
              </div>
              <a href="tel:7795891177" className="flex items-center gap-3 hover:text-cta transition-colors">
                <Phone className="w-5 h-5 shrink-0" />
                <span className="text-sm">+91 7795891177</span>
              </a>
              <a href="mailto:vickysafetynets552@gmail.com" className="flex items-center gap-3 hover:text-cta transition-colors">
                <Mail className="w-5 h-5 shrink-0" />
                <span className="text-sm">vickysafetynets552@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-background/20 py-4 text-center text-sm opacity-60">
        © {new Date().getFullYear()} Vicky Safety Nets, Bangalore. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
