import Layout from "@/components/Layout";
import ParallaxSection from "@/components/ParallaxSection";
import EnquiryBar from "@/components/EnquiryBar";
import { Link } from "react-router-dom";

import parallaxBg from "@/assets/parallax-bg.jpg";
import balconyNets from "@/assets/balcony-nets.jpg";
import pigeonNets from "@/assets/pigeon-nets.jpg";
import cricketNets from "@/assets/cricket-nets.jpg";

const posts = [
  {
    title: "Why Balcony Safety Nets Are Essential for High-Rise Apartments",
    excerpt: "Living in a high-rise apartment in Bangalore comes with many advantages, but safety is a primary concern. Balcony safety nets provide an invisible barrier that protects your family from accidental falls while maintaining your view and ventilation.",
    image: balconyNets,
    date: "March 15, 2026",
  },
  {
    title: "How to Choose the Right Pigeon Net for Your Home",
    excerpt: "Pigeon intrusion is a common problem in Bangalore apartments. Learn about different types of pigeon nets, mesh sizes, and materials to find the perfect solution for your home.",
    image: pigeonNets,
    date: "March 10, 2026",
  },
  {
    title: "Cricket Practice Nets: Set Up Your Terrace Cricket Ground",
    excerpt: "Transform your building terrace into a cricket practice area with professional cricket nets. Learn about the materials, frame structures, and installation process.",
    image: cricketNets,
    date: "March 5, 2026",
  },
  {
    title: "Bird Spikes vs Bird Nets: Which is Better?",
    excerpt: "Both bird spikes and bird nets are effective bird control methods, but they serve different purposes. Learn when to use spikes and when nets are the better choice.",
    image: pigeonNets,
    date: "February 28, 2026",
  },
];

const Blog = () => {
  return (
    <Layout>
      <ParallaxSection backgroundImage={parallaxBg}>
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-cta mb-4">Blog</h1>
          <p className="text-background/80 text-lg">Safety Tips & Industry Insights</p>
        </div>
      </ParallaxSection>

      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <div className="space-y-8">
            {posts.map((post, i) => (
              <article key={i} className="bg-card rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                <img src={post.image} alt={post.title} loading="lazy" className="w-full md:w-72 h-48 md:h-auto object-cover" />
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                  <h2 className="font-heading font-bold text-xl text-primary mb-3">{post.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                  <Link to="/contact" className="text-secondary font-semibold hover:underline">Read More →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <EnquiryBar />
    </Layout>
  );
};

export default Blog;
