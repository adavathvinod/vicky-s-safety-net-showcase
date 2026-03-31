interface ParallaxSectionProps {
  backgroundImage: string;
  children: React.ReactNode;
  className?: string;
}

const ParallaxSection = ({ backgroundImage, children, className = "" }: ParallaxSectionProps) => {
  return (
    <section
      className={`parallax-section py-20 ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="parallax-overlay" />
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;
