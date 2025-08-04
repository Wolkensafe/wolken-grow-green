import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Search, TrendingUp, Target, BarChart3, Users, Megaphone } from "lucide-react";
import { ConsultationDialog } from "@/components/ConsultationDialog";
import digitalMarketingHero from "@/assets/digital-marketing-hero.jpg";

const DigitalMarketing = () => {
  const subServices = [
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive organic traffic to your website.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"]
    },
    {
      icon: Target,
      title: "Google Ads",
      description: "Strategic paid advertising campaigns that maximize ROI and reach your target audience.",
      features: ["Campaign Setup", "Keyword Bidding", "Ad Copy Creation", "Performance Optimization"]
    },
    {
      icon: Users,
      title: "Social Media Marketing",
      description: "Build brand awareness and engage with customers across all social platforms.",
      features: ["Content Strategy", "Community Management", "Paid Social Ads", "Influencer Outreach"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Data-driven insights to measure performance and optimize marketing strategies.",
      features: ["Google Analytics", "Conversion Tracking", "ROI Analysis", "Custom Dashboards"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="container mx-auto px-6 py-6">
        <Button 
          variant="ghost" 
          onClick={() => window.history.back()}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Services
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={digitalMarketingHero} 
            alt="Digital Marketing" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Digital Marketing & SEO
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Drive growth with data-driven marketing strategies and proven SEO techniques
          </p>
          <ConsultationDialog>
            <Button variant="hero" size="xl">
              <TrendingUp className="mr-2 h-5 w-5" />
              Marketing Consultation
            </Button>
          </ConsultationDialog>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Full-Funnel Marketing Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From SEO to social media, we cover every aspect of digital marketing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {subServices.map((service, index) => (
              <Card key={index} className="card-elegant h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-accent-green" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent-green rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Marketing Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-green mb-2">250%</div>
              <div className="text-muted-foreground">Average ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-green mb-2">85%</div>
              <div className="text-muted-foreground">Improvement in Rankings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-green mb-2">3x</div>
              <div className="text-muted-foreground">Traffic Growth</div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Ready to Accelerate Your Growth?
              </h3>
              <p className="text-lg mb-8 opacity-90">
                Let's create a marketing strategy that delivers measurable results
              </p>
              <ConsultationDialog>
                <Button variant="hero" size="xl" className="bg-white text-primary hover:bg-gray-100">
                  <Megaphone className="mr-2 h-5 w-5" />
                  Start Marketing Strategy
                </Button>
              </ConsultationDialog>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;