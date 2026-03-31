import Layout from "@/components/Layout";
import HeroSlider from "@/components/HeroSlider";
import ServiceCard from "@/components/ServiceCard";
import EnquiryBar from "@/components/EnquiryBar";
import ParallaxSection from "@/components/ParallaxSection";
import WhyUsFeatures from "@/components/WhyUsFeatures";

import balconyNets from "@/assets/balcony-nets.jpg";
import pigeonNets from "@/assets/pigeon-nets.jpg";
import cricketNets from "@/assets/cricket-nets.jpg";
import buildingNets from "@/assets/building-nets.jpg";
import industrialNets from "@/assets/industrial-nets.jpg";
import staircaseNets from "@/assets/staircase-nets.jpg";
import parallaxBg from "@/assets/parallax-bg.jpg";
import parallaxBg2 from "@/assets/parallax-bg2.jpg";

const services = [
  { image: balconyNets, title: "Balcony Nets", path: "/safety-nets/balcony" },
  { image: pigeonNets, title: "Pigeon Nets", path: "/bird-protection/pigeon-nets" },
  { image: cricketNets, title: "Cricket Nets", path: "/sports-nets/cricket" },
  { image: buildingNets, title: "Building Nets", path: "/safety-nets/building" },
  { image: industrialNets, title: "Industrial Nets", path: "/safety-nets/industrial" },
  { image: staircaseNets, title: "Staircase Nets", path: "/safety-nets/staircase" },
];

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <EnquiryBar />

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="section-title mb-2">OUR SERVICES</h2>
          <p className="section-subtitle mb-10">Professional Safety Net Installation in Bangalore</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-muted">
        <div className="container max-w-4xl text-center">
          <h2 className="section-title mb-6">Welcome to Vicky Safety Nets</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Vicky Safety Nets is one of the major traders and giving the best service across Bangalore. We have a net installation professional, who can fix nets in any safety required areas. We attempt to get flawlessness in the plans in every one of our items and Ensure Timely delivery.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Apart from our immense scope of items, we give simply the best as far as quality and no trade off is made surveys on this front. Also, we Ensure That All our items are accessible at focused costs and achieve our clients before the due date. We provide services for Balcony Safety Nets, Pigeon Nets, Bird Protection Nets, Anti Bird Nets, Children Safety Nets, Swimming Pool Safety Nets, Cricket Practice Nets and all types of sports nets across Bangalore.
          </p>
        </div>
      </section>

      {/* Parallax CTA */}
      <ParallaxSection backgroundImage={parallaxBg}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-cta mb-4">
            All Kinds Of Safety Nets Services
          </h2>
          <p className="text-background/80 text-lg mb-8 max-w-2xl mx-auto">
            We provide comprehensive safety net solutions for residential, commercial, and industrial properties across Bangalore.
          </p>
          <a href="tel:7795891177" className="cta-button text-lg">
            Get Free Quote Today
          </a>
        </div>
      </ParallaxSection>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="section-title mb-10">Why Choose Us?</h2>
          <WhyUsFeatures />
        </div>
      </section>

      {/* Testimonials Parallax */}
      <ParallaxSection backgroundImage={parallaxBg2}>
        <div className="container max-w-3xl text-center">
          <div className="text-4xl text-cta mb-4">"</div>
          <p className="text-background/90 text-lg italic mb-4">
            Well done job. Done the safety net work in the balcony of our house for kids safety and it was done well and the price was very reasonable. Over all happy with the service. Highly recommend Vicky Safety Nets for their professional installation.
          </p>
          <p className="text-background font-heading font-bold">— Rajesh, Bangalore</p>
        </div>
      </ParallaxSection>

      <EnquiryBar />
    </Layout>
  );
};

export default Index;
