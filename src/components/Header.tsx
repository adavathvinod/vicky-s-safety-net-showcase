import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";
import vickyLogo from "@/assets/vicky-logo.png";

const safetyNetsDropdown = [
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
  { label: "Monkey Net For Balconies", path: "/safety-nets/monkey" },
  { label: "Car Parking Safety Nets", path: "/safety-nets/car-parking" },
  { label: "Coconut Tree Safety Nets", path: "/safety-nets/coconut-tree" },
  { label: "HDPE Nets, Nylon Nets", path: "/safety-nets/hdpe-nylon" },
];

const birdDropdown = [
  { label: "Pigeon Nets", path: "/bird-protection/pigeon-nets" },
  { label: "Pigeon Safety Nets", path: "/bird-protection/pigeon-safety" },
  { label: "Pigeon Nets Installation", path: "/bird-protection/pigeon-installation" },
  { label: "Bird Spikes", path: "/bird-protection/bird-spikes" },
  { label: "Bird Protection Nets", path: "/bird-protection/bird-protection" },
  { label: "Anti Bird Nets", path: "/bird-protection/anti-bird" },
  { label: "Pigeon Nets For Balconies", path: "/bird-protection/pigeon-balconies" },
  { label: "Sparrow Protection Nets", path: "/bird-protection/sparrow" },
  { label: "Anti Seagull Nets", path: "/bird-protection/anti-seagull" },
];

const sportsDropdown = [
  { label: "Cricket Practice Nets", path: "/sports-nets/cricket" },
  { label: "Sports Ball Stop Nets", path: "/sports-nets/ball-stop" },
  { label: "Football Stop Netting", path: "/sports-nets/football" },
  { label: "Terrace Cricket Nets", path: "/sports-nets/terrace-cricket" },
  { label: "Sports Nets Installation", path: "/sports-nets/installation" },
  { label: "All Sports Nets", path: "/sports-nets/all" },
];

const whyUsDropdown = [
  { label: "About", path: "/why-us" },
  { label: "Gallery", path: "/gallery" },
  { label: "FAQ's", path: "/faq" },
  { label: "Blog", path: "/blog" },
  { label: "Videos", path: "/videos" },
];

interface DropdownProps {
  label: string;
  items: { label: string; path: string }[];
  isActive: boolean;
}

const NavDropdown = ({ label, items, isActive }: DropdownProps) => {
  return (
    <div className="relative group">
      <button className={`flex items-center gap-1 px-3 py-2 font-heading text-sm font-medium transition-colors ${isActive ? 'text-secondary' : 'text-foreground hover:text-primary'}`}>
        {label}
        <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
      </button>
      <div className="absolute left-0 top-full z-50 hidden group-hover:block min-w-[220px] bg-foreground rounded shadow-xl">
        {items.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="block px-4 py-2.5 text-sm text-background/90 hover:text-cta transition-colors hover:bg-foreground/90"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleMobileDropdown = (name: string) => {
    setOpenMobileDropdown(openMobileDropdown === name ? null : name);
  };

  const allDropdowns = [
    { name: "Why Us", items: whyUsDropdown, prefix: "/why-us" },
    { name: "Safety Nets", items: safetyNetsDropdown, prefix: "/safety-nets" },
    { name: "Bird Protection Nets", items: birdDropdown, prefix: "/bird-protection" },
    { name: "All Sports Nets", items: sportsDropdown, prefix: "/sports-nets" },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Scrolling services bar */}
      <div className="bg-foreground overflow-hidden py-1">
        <div className="animate-slide-text whitespace-nowrap text-xs text-background/80">
          Balcony Safety Nets, Pigeon Nets Installation, Building Safety Nets, Duct Area Safety Nets, Children Safety Nets, Terrace Top Nets, Terrace Cricket Nets, Open Area Safety Nets, Swimming Pool Safety Nets, Industrial Safety Nets, Bird Spikes, Anti Bird Nets, Construction Safety Nets
        </div>
      </div>

      {/* Top bar with contact */}
      <div className="topbar-bg py-2">
        <div className="container flex justify-between items-center text-topbar-foreground text-sm">
          <a href="tel:7795891177" className="flex items-center gap-2 hover:text-cta transition-colors">
            <Phone className="w-4 h-4" />
            +91 7795891177
          </a>
          <a href="mailto:vickysafetynets552@gmail.com" className="flex items-center gap-2 hover:text-cta transition-colors">
            <Mail className="w-4 h-4" />
            vickysafetynets552@gmail.com
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-background shadow-md">
        <div className="container flex justify-between items-center py-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-lg">V</span>
            </div>
            <div>
              <span className="font-heading font-bold text-xl text-primary">Vicky</span>
              <span className="block text-xs font-heading font-semibold text-secondary -mt-1">SAFETY NETS</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link to="/" className={`px-3 py-2 font-heading text-sm font-medium transition-colors ${location.pathname === '/' ? 'text-secondary' : 'text-foreground hover:text-primary'}`}>
              Home
            </Link>
            {allDropdowns.map((dd) => (
              <NavDropdown
                key={dd.name}
                label={dd.name}
                items={dd.items}
                isActive={location.pathname.startsWith(dd.prefix)}
              />
            ))}
            <Link to="/contact" className={`px-3 py-2 font-heading text-sm font-medium transition-colors ${location.pathname === '/contact' ? 'text-secondary' : 'text-foreground hover:text-primary'}`}>
              Contact
            </Link>
          </div>

          <a href="tel:7795891177" className="hidden lg:block cta-button text-sm">
            Call Now
          </a>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-background border-t pb-4">
            <Link to="/" onClick={() => setMobileOpen(false)} className="block px-6 py-3 font-heading text-sm font-medium hover:bg-muted">Home</Link>
            {allDropdowns.map((dd) => (
              <div key={dd.name}>
                <button onClick={() => toggleMobileDropdown(dd.name)} className="w-full flex justify-between items-center px-6 py-3 font-heading text-sm font-medium hover:bg-muted">
                  {dd.name}
                  <ChevronDown className={`w-4 h-4 transition-transform ${openMobileDropdown === dd.name ? 'rotate-180' : ''}`} />
                </button>
                {openMobileDropdown === dd.name && (
                  <div className="bg-muted">
                    {dd.items.map((item) => (
                      <Link key={item.path} to={item.path} onClick={() => setMobileOpen(false)} className="block px-10 py-2 text-sm hover:text-primary">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="block px-6 py-3 font-heading text-sm font-medium hover:bg-muted">Contact</Link>
            <div className="px-6 pt-2">
              <a href="tel:7795891177" className="cta-button block text-center text-sm">Call Now</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
