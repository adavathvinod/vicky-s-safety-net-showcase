import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import heroBg from "@/assets/hero-bg.jpg";
import balconyNets from "@/assets/balcony-nets.jpg";
import pigeonNets from "@/assets/pigeon-nets.jpg";
import cricketNets from "@/assets/cricket-nets.jpg";

const slides = [
  { image: heroBg, title: "Balcony Safety Nets", subtitle: "Professional Installation in Bangalore" },
  { image: balconyNets, title: "Children Safety Nets", subtitle: "Keep Your Kids Safe at Home" },
  { image: pigeonNets, title: "Pigeon Protection Nets", subtitle: "Stop Birds from Entering Your Balcony" },
  { image: cricketNets, title: "Cricket Practice Nets", subtitle: "Terrace & Ground Cricket Nets" },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[60vh] md:h-[75vh] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="parallax-overlay" />
        </div>
      ))}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-cta drop-shadow-lg mb-4">
          {slides[current].title}
        </h1>
        <p className="text-lg md:text-2xl font-heading text-background/90 mb-8">
          {slides[current].subtitle}
        </p>
        <a href="tel:7795891177" className="cta-button text-lg">
          Call Now - Free Quote
        </a>
      </div>

      <button
        onClick={() => setCurrent((p) => (p - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-foreground/50 hover:bg-foreground/70 text-background rounded-full p-2 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => setCurrent((p) => (p + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-foreground/50 hover:bg-foreground/70 text-background rounded-full p-2 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
};

export default HeroSlider;
