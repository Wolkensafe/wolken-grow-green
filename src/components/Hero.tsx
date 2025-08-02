import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Target } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { ConsultationDialog } from "@/components/ConsultationDialog";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="fade-in">
          <h1 className="text-4xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Empowering Brands.
            <br />
            <span className="text-accent-green">Securing Growth.</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            From IT to SEO, Content to Finance—WolkenSafe India is your all-in-one consulting partner for modern business success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <ConsultationDialog>
              <Button variant="hero" size="xl" className="group">
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </ConsultationDialog>
            
            <Button variant="professional" size="xl">
              Explore Services
            </Button>
          </div>
        </div>

        {/* USP Section */}
        <div className="slide-in-right">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="text-center group">
              <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-accent-green" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Security-First Thinking</h3>
              <p className="text-gray-400">Protect your digital assets with enterprise-grade security built into every solution.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Zap className="h-8 w-8 text-accent-green" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Multi-Disciplinary Expertise</h3>
              <p className="text-gray-400">One team, complete solutions—from strategy to execution under one roof.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Target className="h-8 w-8 text-accent-green" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Tailored Solutions</h3>
              <p className="text-gray-400">Custom strategies designed for your unique business challenges and growth goals.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 pointer-events-none" />
    </section>
  );
};

export default Hero;