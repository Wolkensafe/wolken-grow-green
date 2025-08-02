import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@wolkensafe.in",
      description: "Send us your queries anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 98765 43210",
      description: "Available Mon-Fri, 9 AM - 6 PM"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Mumbai, India",
      description: "Schedule an appointment"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "9:00 AM - 6:00 PM",
      description: "Monday to Friday"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Let's Start Your Success Story
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business? Get in touch with our experts and let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 slide-in-left">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="card-elegant">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-accent-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-5 w-5 text-accent-green" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="font-medium text-accent-green mb-1">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Card */}
            <Card className="mt-8 bg-gradient-primary text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Need Immediate Help?</h3>
                <p className="opacity-90 mb-4">
                  Our team is ready to provide consultation and answer your questions.
                </p>
                <Button variant="hero" className="bg-white text-primary hover:bg-gray-100">
                  Schedule Call Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 slide-in-right">
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Enter your first name"
                      className="bg-background border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Enter your last name"
                      className="bg-background border-border"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email"
                      className="bg-background border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input 
                      id="phone" 
                      placeholder="Enter your phone number"
                      className="bg-background border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Interested In</Label>
                  <Select>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="it-solutions">IT Solutions & Consulting</SelectItem>
                      <SelectItem value="digital-marketing">Digital Marketing & SEO</SelectItem>
                      <SelectItem value="content-writing">Content & Copywriting</SelectItem>
                      <SelectItem value="photography">Product Photography</SelectItem>
                      <SelectItem value="financial">Financial Services</SelectItem>
                      <SelectItem value="multiple">Multiple Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project or requirements..."
                    className="bg-background border-border min-h-[120px]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="primary" size="lg" className="flex-1">
                    Send Message
                  </Button>
                  <Button variant="professional" size="lg" className="flex-1">
                    Schedule Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;