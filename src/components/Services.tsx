import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Laptop, 
  Search, 
  PenTool, 
  Camera, 
  DollarSign, 
  Shield,
  ArrowRight 
} from "lucide-react";
import { ConsultationDialog } from "@/components/ConsultationDialog";

const Services = () => {
  const services = [
    {
      icon: Laptop,
      title: "IT Solutions & Consulting",
      description: "Website Design & Development, cloud migration & security, tech audits & automation for modern businesses.",
      features: ["Cloud Website Desgin & Development", "Security Audits", "System Integration", "Tech Infrastructure"]
    },
    {
      icon: Search,
      title: "Digital Marketing & SEO",
      description: "Full-funnel campaigns, on-page/off-page SEO, PPC, Google Ads, and social media marketing.",
      features: ["SEO Optimization", "Google Ads", "Social Media", "Analytics & Reporting"]
    },
    {
      icon: PenTool,
      title: "Content & Copywriting",
      description: "SEO-focused blog writing, website & ad copy, email campaigns that convert and engage.",
      features: ["Blog Writing", "Website Copy", "Email Campaigns", "Content Strategy"]
    },
    {
      icon: Camera,
      title: "Product Photography",
      description: "High-quality eCommerce photography, creative direction, editing and optimization.",
      features: ["Product Shoots", "E-commerce Photos", "Creative Direction", "Image Optimization"]
    },
    {
      icon: Shield,
      title: "Cyber Security",
      description: "Comprehensive security solutions to protect your business from digital threats and ensure compliance.",
      features: ["Security Audits", "Threat Protection", "Compliance Management", "Incident Response"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Complete Business Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From strategy to execution, we provide comprehensive consulting services to accelerate your business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="card-elegant h-full group">
              <CardHeader>
                <div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent-green/30 transition-colors">
                  <service.icon className="h-6 w-6 text-accent-green" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent-green rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="professional" className="w-full group" onClick={() => window.location.href = `/services/${service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}>
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center slide-in-right">
          <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Let's build your success story together with our comprehensive consulting approach.
            </p>
             <ConsultationDialog>
            <Button variant="hero" size="xl" className="bg-white text-primary hover:bg-gray-100">
              Schedule Free Consultation
            </Button>
            </ConsultationDialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
