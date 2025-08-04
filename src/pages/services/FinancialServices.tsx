import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, DollarSign, PieChart, FileText, Calculator, TrendingUp, Building } from "lucide-react";
import { ConsultationDialog } from "@/components/ConsultationDialog";
import financialServicesHero from "@/assets/financial-services-hero.jpg";

const FinancialServices = () => {
  const subServices = [
    {
      icon: PieChart,
      title: "Business Planning",
      description: "Strategic financial planning and business development to ensure sustainable growth.",
      features: ["Financial Forecasting", "Business Model Design", "Growth Strategy", "Investment Planning"]
    },
    {
      icon: Calculator,
      title: "Tax Consulting",
      description: "Expert tax planning and preparation services to minimize liability and ensure compliance.",
      features: ["Tax Preparation", "Tax Planning", "Deduction Optimization", "Tax Strategy"]
    },
    {
      icon: FileText,
      title: "Compliance Management",
      description: "Ensure your business meets all regulatory requirements and maintains good standing.",
      features: ["Regulatory Compliance", "Financial Reporting", "Audit Preparation", "Documentation"]
    },
    {
      icon: TrendingUp,
      title: "Financial Analysis",
      description: "In-depth financial analysis and reporting to drive informed business decisions.",
      features: ["Performance Analysis", "Cash Flow Management", "Profitability Review", "KPI Tracking"]
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
            src={financialServicesHero} 
            alt="Financial Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Financial Services
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Expert financial guidance and solutions to optimize your business performance and growth
          </p>
          <ConsultationDialog>
            <Button variant="hero" size="xl">
              <DollarSign className="mr-2 h-5 w-5" />
              Financial Consultation
            </Button>
          </ConsultationDialog>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Comprehensive Financial Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From business planning to tax consulting, we provide expert financial guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {subServices.map((service, index) => (
              <Card key={index} className="card-elegant h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-muted/20 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Financial Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-muted-foreground mb-2">25%</div>
              <div className="text-muted-foreground">Average Tax Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-muted-foreground mb-2">98%</div>
              <div className="text-muted-foreground">Compliance Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-muted-foreground mb-2">15%</div>
              <div className="text-muted-foreground">Profit Increase</div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Optimize Your Financial Performance
              </h3>
              <p className="text-lg mb-8 opacity-90">
                Let our financial experts help you maximize profitability and minimize risk
              </p>
              <ConsultationDialog>
                <Button variant="hero" size="xl" className="bg-white text-primary hover:bg-gray-100">
                  <Building className="mr-2 h-5 w-5" />
                  Schedule Financial Review
                </Button>
              </ConsultationDialog>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancialServices;