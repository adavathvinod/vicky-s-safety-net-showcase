import { Phone } from "lucide-react";

const EnquiryBar = () => {
  return (
    <section className="bg-primary py-4">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <h3 className="font-heading font-bold text-xl text-primary-foreground">
          Enquiry Now - Get Free Installation Quote
        </h3>
        <div className="flex items-center gap-4">
          <a href="tel:7795891177" className="cta-button flex items-center gap-2">
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default EnquiryBar;
