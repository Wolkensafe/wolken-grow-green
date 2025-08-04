import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Camera, Image, Palette, Zap, Aperture, Focus } from "lucide-react";
import { ConsultationDialog } from "@/components/ConsultationDialog";
import productPhotographyHero from "@/assets/product-photography-hero.jpg";

const ProductPhotography = () => {
  const subServices = [
    {
      icon: Camera,
      title: "Product Shoots",
      description: "Professional product photography that showcases your items in the best light.",
      features: ["Studio Photography", "Lifestyle Shots", "360° Product Views", "Macro Photography"]
    },
    {
      icon: Image,
      title: "E-commerce Photos",
      description: "Optimized product images that drive conversions and meet marketplace standards.",
      features: ["White Background", "Multiple Angles", "Detail Shots", "Size Specifications"]
    },
    {
      icon: Palette,
      title: "Creative Direction",
      description: "Artistic vision and styling that aligns with your brand identity and target market.",
      features: ["Brand Styling", "Color Schemes", "Prop Selection", "Scene Composition"]
    },
    {
      icon: Focus,
      title: "Image Optimization",
      description: "Post-production and optimization for web, print, and digital marketing use.",
      features: ["Color Correction", "Background Removal", "Image Retouching", "Format Optimization"]
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
            src={productPhotographyHero} 
            alt="Product Photography" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Product Photography
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            High-quality product photography that captures attention and drives sales
          </p>
          <ConsultationDialog>
            <Button variant="hero" size="xl">
              <Camera className="mr-2 h-5 w-5" />
              Photography Consultation
            </Button>
          </ConsultationDialog>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Professional Photography Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From product shoots to creative direction, we deliver stunning visuals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {subServices.map((service, index) => (
              <Card key={index} className="card-elegant h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Photography Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">95%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <div className="text-muted-foreground">Products Photographed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">48hr</div>
              <div className="text-muted-foreground">Average Turnaround</div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Showcase Your Products Professionally
              </h3>
              <p className="text-lg mb-8 opacity-90">
                Let's create stunning visuals that highlight your products' best features
              </p>
              <ConsultationDialog>
                <Button variant="hero" size="xl" className="bg-white text-primary hover:bg-gray-100">
                  <Aperture className="mr-2 h-5 w-5" />
                  Book Photo Session
                </Button>
              </ConsultationDialog>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPhotography;