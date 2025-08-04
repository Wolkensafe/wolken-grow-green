import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, Lock, AlertTriangle, FileCheck, Eye, Zap } from "lucide-react";
import { ConsultationDialog } from "@/components/ConsultationDialog";
import cyberSecurityHero from "@/assets/cyber-security-hero.jpg";

const CyberSecurity = () => {
  const subServices = [
    {
      icon: Eye,
      title: "Security Audits",
      description: "Comprehensive security assessments to identify vulnerabilities and strengthen your digital defenses.",
      features: ["Vulnerability Scanning", "Risk Assessment", "Security Gap Analysis", "Compliance Evaluation"]
    },
    {
      icon: Shield,
      title: "Threat Protection",
      description: "Advanced threat detection and prevention systems to safeguard your business assets.",
      features: ["Firewall Configuration", "Intrusion Detection", "Malware Protection", "Email Security"]
    },
    {
      icon: FileCheck,
      title: "Compliance Management",
      description: "Ensure your business meets industry standards and regulatory requirements.",
      features: ["GDPR Compliance", "ISO 27001", "SOC 2", "Industry Standards"]
    },
    {
      icon: Zap,
      title: "Incident Response",
      description: "Rapid response and recovery services to minimize impact of security breaches.",
      features: ["24/7 Monitoring", "Breach Investigation", "Recovery Planning", "Forensic Analysis"]
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
            src={cyberSecurityHero} 
            alt="Cyber Security" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Cyber Security Solutions
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Protect your business from digital threats with comprehensive security solutions and expert guidance
          </p>
          <ConsultationDialog>
            <Button variant="hero" size="xl">
              <Shield className="mr-2 h-5 w-5" />
              Security Consultation
            </Button>
          </ConsultationDialog>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Complete Cyber Security Protection
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From security audits to incident response, we provide comprehensive protection for your digital assets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {subServices.map((service, index) => (
              <Card key={index} className="card-elegant h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-destructive/20 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-destructive" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-destructive rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Security Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-destructive mb-2">99.9%</div>
              <div className="text-muted-foreground">Threat Detection Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-destructive mb-2">24/7</div>
              <div className="text-muted-foreground">Security Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-destructive mb-2">&lt;15min</div>
              <div className="text-muted-foreground">Average Response Time</div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Secure Your Business Today
              </h3>
              <p className="text-lg mb-8 opacity-90">
                Don't wait for a security breach. Get proactive protection now
              </p>
              <ConsultationDialog>
                <Button variant="hero" size="xl" className="bg-white text-primary hover:bg-gray-100">
                  <Lock className="mr-2 h-5 w-5" />
                  Get Security Assessment
                </Button>
              </ConsultationDialog>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CyberSecurity;