import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Cloud Computing: Trends Shaping 2024",
      excerpt: "Explore the latest trends in cloud computing including multi-cloud strategies, serverless computing, and AI integration that are transforming businesses worldwide.",
      category: "Cloud Computing",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "8 min read",
      image: "/lovable-uploads/325cf8cc-22be-4d7b-baac-71195ce7fdf9.png",
      featured: true
    },
    {
      id: 2,
      title: "Modern Web Development: React 18 and Next.js 14 Features",
      excerpt: "Discover the powerful new features in React 18 and Next.js 14 that are revolutionizing web development and improving user experiences.",
      category: "Web Development",
      author: "Alex Chen",
      date: "March 12, 2024",
      readTime: "6 min read",
      image: "/lovable-uploads/c37718b4-7d4d-431e-9f1d-ce48085c4696.png",
      featured: true
    },
    {
      id: 3,
      title: "Cybersecurity in the Cloud: Best Practices for 2024",
      excerpt: "Learn essential cybersecurity practices for cloud environments, including zero-trust architecture and advanced threat detection.",
      category: "Cybersecurity",
      author: "Michael Roberts",
      date: "March 10, 2024",
      readTime: "10 min read",
      image: "/lovable-uploads/f6a5c625-6299-455b-a701-1be4288fdcc8.png",
      featured: false
    },
    {
      id: 4,
      title: "Serverless Architecture: Building Scalable Applications",
      excerpt: "A comprehensive guide to serverless architecture patterns and how they're changing the way we build and deploy applications.",
      category: "Cloud Computing",
      author: "Emma Davis",
      date: "March 8, 2024",
      readTime: "7 min read",
      image: "/lovable-uploads/325cf8cc-22be-4d7b-baac-71195ce7fdf9.png",
      featured: false
    },
    {
      id: 5,
      title: "Progressive Web Apps: The Future of Mobile Development",
      excerpt: "Understanding how PWAs are bridging the gap between web and mobile applications with improved performance and user experience.",
      category: "Web Development",
      author: "David Kim",
      date: "March 5, 2024",
      readTime: "9 min read",
      image: "/lovable-uploads/c37718b4-7d4d-431e-9f1d-ce48085c4696.png",
      featured: false
    },
    {
      id: 6,
      title: "DevOps in 2024: Container Orchestration with Kubernetes",
      excerpt: "Master container orchestration with Kubernetes and learn how it's streamlining deployment processes in modern development workflows.",
      category: "DevOps",
      author: "Lisa Wang",
      date: "March 3, 2024",
      readTime: "12 min read",
      image: "/lovable-uploads/f6a5c625-6299-455b-a701-1be4288fdcc8.png",
      featured: false
    }
  ];

  const categories = ["All", "Web Development", "Cloud Computing", "Cybersecurity", "DevOps"];
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Tech <span className="text-accent-green">Insights</span> Blog
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Stay ahead with the latest trends in web development, cloud computing, and technology innovation
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                  <Badge className="absolute top-4 left-4 bg-accent-green text-white">
                    {post.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl hover:text-accent-green transition-colors">
                    {post.title}
                  </CardTitle>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="group">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button 
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                  <Badge className="absolute top-4 left-4 bg-accent-green text-white">
                    {post.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg hover:text-accent-green transition-colors">
                    {post.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground mb-4">
                    <Calendar className="h-3 w-3 mr-1" />
                    {post.date}
                  </div>
                  <Button variant="outline" size="sm" className="w-full group">
                    Read Article
                    <ArrowRight className="h-3 w-3 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Never Miss an Update
          </h2>
          <p className="text-white/90 mb-8">
            Subscribe to our newsletter and get the latest tech insights delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg border-0 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent-green backdrop-blur-sm flex-1"
            />
            <Button variant="hero" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;