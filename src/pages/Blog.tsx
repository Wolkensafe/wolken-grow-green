import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User, RefreshCw, Settings, ExternalLink } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import useNewsAPI from "@/hooks/useNewsAPI";
import NewsAPIKeyDialog from "@/components/NewsAPIKeyDialog";

const Blog = () => {
  const { articles, loading, error, refetch, hasApiKey, saveApiKey } = useNewsAPI();
  const [showApiDialog, setShowApiDialog] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Web Development", "Cloud Computing", "Cybersecurity", "DevOps", "AI & ML", "Technology"];
  
  // Filter articles by category
  const filteredArticles = selectedCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);
  
  // Get featured articles (first 2 articles)
  const featuredArticles = filteredArticles.slice(0, 2);
  const regularArticles = filteredArticles.slice(2);

  // Format date for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // If no API key is set, show the setup dialog automatically
  useState(() => {
    if (!hasApiKey && !loading) {
      setShowApiDialog(true);
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Tech <span className="text-accent-green">Insights</span> Blog
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Stay ahead with the latest trending articles in web development, cloud computing, and technology innovation
          </p>
          <div className="flex gap-4 justify-center">
            {hasApiKey && (
              <Button 
                variant="hero" 
                onClick={refetch}
                disabled={loading}
                className="gap-2"
              >
                <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                Refresh News
              </Button>
            )}
            <Button 
              variant="outline" 
              onClick={() => setShowApiDialog(true)}
              className="gap-2 text-white border-white hover:bg-white hover:text-primary"
            >
              <Settings className="h-4 w-4" />
              API Settings
            </Button>
          </div>
        </div>
      </section>

      {/* Error State */}
      {error && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-8">
              <p className="text-destructive mb-4">Failed to load articles: {error}</p>
              <Button onClick={refetch} variant="outline">
                Try Again
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* No API Key State */}
      {!hasApiKey && !loading && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <div className="bg-muted/50 border rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Connect to News API</h3>
              <p className="text-muted-foreground mb-6">
                To view the latest tech articles, you need to configure your News API key.
              </p>
              <Button onClick={() => setShowApiDialog(true)} className="gap-2">
                <Settings className="h-4 w-4" />
                Configure API Key
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Featured Posts */}
      {hasApiKey && !error && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Featured Articles</h2>
            {loading ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {[1, 2].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <Skeleton className="aspect-video w-full" />
                    <CardHeader>
                      <Skeleton className="h-6 w-3/4" />
                      <Skeleton className="h-16 w-full" />
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-4">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-4 w-24" />
                      </div>
                      <Skeleton className="h-10 w-32" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {featuredArticles.map((article) => (
                  <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={article.urlToImage} 
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder.svg';
                        }}
                      />
                      <Badge className="absolute top-4 left-4 bg-accent-green text-white">
                        {article.category}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl hover:text-accent-green transition-colors line-clamp-2">
                        {article.title}
                      </CardTitle>
                      <p className="text-muted-foreground line-clamp-3">{article.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {article.source.name}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {formatDate(article.publishedAt)}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {article.readTime}
                          </div>
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        className="group" 
                        onClick={() => window.open(article.url, '_blank')}
                      >
                        Read More
                        <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Category Filter */}
      {hasApiKey && !error && (
        <section className="py-8 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <Button 
                  key={category}
                  variant={category === selectedCategory ? "default" : "outline"}
                  className="rounded-full"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      {hasApiKey && !error && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Latest Articles</h2>
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <Skeleton className="aspect-video w-full" />
                    <CardHeader>
                      <Skeleton className="h-5 w-3/4" />
                      <Skeleton className="h-12 w-full" />
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-4">
                        <Skeleton className="h-3 w-24" />
                        <Skeleton className="h-3 w-20" />
                      </div>
                      <Skeleton className="h-8 w-full" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : regularArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularArticles.map((article) => (
                  <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={article.urlToImage} 
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder.svg';
                        }}
                      />
                      <Badge className="absolute top-4 left-4 bg-accent-green text-white">
                        {article.category}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg hover:text-accent-green transition-colors line-clamp-2">
                        {article.title}
                      </CardTitle>
                      <p className="text-muted-foreground text-sm line-clamp-3">{article.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <User className="h-3 w-3 mr-1" />
                          {article.source.name}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {article.readTime}
                        </div>
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground mb-4">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(article.publishedAt)}
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full group"
                        onClick={() => window.open(article.url, '_blank')}
                      >
                        Read Article
                        <ExternalLink className="h-3 w-3 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No articles found for the selected category.</p>
              </div>
            )}
          </div>
        </section>
      )}

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
      
      {/* API Key Dialog */}
      <NewsAPIKeyDialog 
        open={showApiDialog}
        onOpenChange={setShowApiDialog}
        onApiKeySave={saveApiKey}
      />
    </div>
  );
};

export default Blog;