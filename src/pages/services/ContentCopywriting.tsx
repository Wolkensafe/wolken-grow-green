import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, PenTool, FileText, Mail, TrendingUp, BookOpen, Edit3 } from "lucide-react";
import { ConsultationDialog } from "@/components/ConsultationDialog";
import contentCopywritingHero from "@/assets/content-copywriting-hero.jpg";

const ContentCopywriting = () => {
  const subServices = [
    {
      icon: BookOpen,
      title: "Blog Writing",
      description: "SEO-optimized blog content that drives traffic and establishes thought leadership.",
      features: ["SEO Content", "Industry Expertise", "Content Calendar", "Performance Tracking"]
    },
    {
      icon: FileText,
      title: "Website Copy",
      description: "Compelling website copy that converts visitors into customers and builds trust.",
      features: ["Landing Pages", "Product Descriptions", "About Pages", "Sales Copy"]
    },
    {
      icon: Mail,
      title: "Email Campaigns",
      description: "Email marketing campaigns that nurture leads and drive conversions.",
      features: ["Newsletter Content", "Drip Campaigns", "Sales Sequences", "A/B Testing"]
    },
    {
      icon: TrendingUp,
      title: "Content Strategy",
      description: "Comprehensive content strategies aligned with your business goals and audience needs.",
      features: ["Content Planning", "Audience Research", "Brand Voice", "Content Audits"]
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
            src={contentCopywritingHero} 
            alt="Content & Copywriting" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Content & Copywriting
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Engaging content that converts, educates, and builds lasting relationships with your audience
          </p>
          <ConsultationDialog>
            <Button variant="hero" size="xl">
              <PenTool className="mr-2 h-5 w-5" />
              Content Consultation
            </Button>
          </ConsultationDialog>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Strategic Content Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From blog posts to email campaigns, we create content that drives results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {subServices.map((service, index) => (
              <Card key={index} className="card-elegant h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Content Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">400%</div>
              <div className="text-muted-foreground">Engagement Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">75%</div>
              <div className="text-muted-foreground">Open Rate Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">5x</div>
              <div className="text-muted-foreground">Content Performance</div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Ready to Tell Your Story?
              </h3>
              <p className="text-lg mb-8 opacity-90">
                Let's create compelling content that resonates with your audience
              </p>
              <ConsultationDialog>
                <Button variant="hero" size="xl" className="bg-white text-primary hover:bg-gray-100">
                  <Edit3 className="mr-2 h-5 w-5" />
                  Start Content Strategy
                </Button>
              </ConsultationDialog>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentCopywriting;