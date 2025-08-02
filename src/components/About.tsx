import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Award, Target } from "lucide-react";
import teamImage from "@/assets/team-collaboration.jpg";

const About = () => {
  const values = [
    {
      icon: CheckCircle,
      title: "Integrity",
      description: "Transparent processes and honest communication in every client relationship."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Cutting-edge solutions that keep your business ahead of the competition."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with your team to achieve shared success."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering premium quality in every project and service we provide."
    }
  ];

  const stats = [
    { number: "20+", label: "Years Combined Experience" },
    { number: "100+", label: "Projects Delivered" },
    { number: "50+", label: "Happy Clients" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            About WolkenSafe India
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a team of passionate consultants dedicated to helping businesses grow with trust, technology, and clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Mission & Vision */}
          <div className="slide-in-left">
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4 text-accent-green bg-accent-green/10">
                Our Mission
              </Badge>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Empowering Businesses Through Integrated Solutions
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                At WolkenSafe India, we believe that every business deserves access to world-class consulting services. 
                Our mission is to bridge the gap between traditional business practices and modern digital excellence, 
                providing comprehensive solutions that drive sustainable growth.
              </p>
            </div>

            <div className="mb-8">
              <Badge variant="secondary" className="mb-4 text-accent-green bg-accent-green/10">
                Our Vision
              </Badge>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Building the Future of Business Consulting
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We envision a world where businesses of all sizes can access premium consulting services that combine 
                technical expertise with strategic thinking, creating lasting value and competitive advantages.
              </p>
            </div>
          </div>

          {/* Team Image */}
          <div className="slide-in-right">
            <div className="relative">
              <img
                src={teamImage}
                alt="WolkenSafe India Team"
                className="rounded-2xl shadow-elegant w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 fade-in">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 card-elegant">
              <CardContent className="p-0">
                <div className="text-3xl lg:text-4xl font-bold text-accent-green mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Values */}
        <div className="slide-in-right">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Our Core Values
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make and every solution we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 card-elegant h-full">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-accent-green" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;