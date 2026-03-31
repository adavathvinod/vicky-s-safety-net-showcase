import Layout from "@/components/Layout";
import ParallaxSection from "@/components/ParallaxSection";
import EnquiryBar from "@/components/EnquiryBar";

import parallaxBg from "@/assets/parallax-bg.jpg";

const Videos = () => {
  return (
    <Layout>
      <ParallaxSection backgroundImage={parallaxBg}>
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-cta mb-4">Videos</h1>
          <p className="text-background/80 text-lg">Watch Our Installation Process</p>
        </div>
      </ParallaxSection>

      <section className="py-16 bg-background">
        <div className="container max-w-4xl text-center">
          <h2 className="section-title mb-6">Our Installation Videos</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Watch how our professional team installs safety nets across Bangalore. Our trained experts ensure perfect installation every time, whether it's balcony safety nets, pigeon nets, or cricket practice nets.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-muted rounded-lg p-8 flex flex-col items-center justify-center min-h-[200px]">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Balcony Net Installation</h3>
              <p className="text-muted-foreground text-sm">Coming Soon</p>
            </div>
            <div className="bg-muted rounded-lg p-8 flex flex-col items-center justify-center min-h-[200px]">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-secondary-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Pigeon Net Installation</h3>
              <p className="text-muted-foreground text-sm">Coming Soon</p>
            </div>
            <div className="bg-muted rounded-lg p-8 flex flex-col items-center justify-center min-h-[200px]">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Cricket Net Setup</h3>
              <p className="text-muted-foreground text-sm">Coming Soon</p>
            </div>
            <div className="bg-muted rounded-lg p-8 flex flex-col items-center justify-center min-h-[200px]">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-secondary-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Building Safety Nets</h3>
              <p className="text-muted-foreground text-sm">Coming Soon</p>
            </div>
          </div>

          <div className="mt-12 bg-primary/10 p-8 rounded-lg">
            <h3 className="font-heading font-bold text-xl text-primary mb-3">Want to See Our Work?</h3>
            <p className="text-muted-foreground mb-4">Contact us for a live demonstration or visit our recent installation sites.</p>
            <a href="tel:7795891177" className="cta-button">Call Us Now</a>
          </div>
        </div>
      </section>

      <EnquiryBar />
    </Layout>
  );
};

export default Videos;
