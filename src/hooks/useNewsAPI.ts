import { useState, useEffect } from 'react';

interface Article {
  id: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: {
    name: string;
  };
  category?: string;
  readTime?: string;
}

interface NewsAPIResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

const useNewsAPI = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Function to get API key from localStorage or use default
  const getApiKey = () => {
    const storedKey = localStorage.getItem('newsapi_key');
    // Use provided default API key if no custom key is stored
    return storedKey || '93121113310d4718b7bc8a0bdcb52d59';
  };

  // Function to save API key to localStorage
  const saveApiKey = (key: string) => {
    localStorage.setItem('newsapi_key', key);
  };

  // Function to estimate read time based on description length
  const estimateReadTime = (description: string): string => {
    const wordsPerMinute = 200;
    const wordCount = description.split(' ').length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${Math.max(1, minutes)} min read`;
  };

  // Function to categorize articles based on keywords
  const categorizeArticle = (title: string, description: string): string => {
    const content = (title + ' ' + description).toLowerCase();
    
    if (content.includes('react') || content.includes('javascript') || content.includes('frontend') || content.includes('web development') || content.includes('html') || content.includes('css') || content.includes('vue') || content.includes('angular')) {
      return 'Web Development';
    } else if (content.includes('cloud') || content.includes('aws') || content.includes('azure') || content.includes('serverless') || content.includes('kubernetes') || content.includes('docker')) {
      return 'Cloud Computing';
    } else if (content.includes('security') || content.includes('cybersecurity') || content.includes('privacy') || content.includes('hack') || content.includes('breach')) {
      return 'Cybersecurity';
    } else if (content.includes('devops') || content.includes('ci/cd') || content.includes('deployment') || content.includes('automation')) {
      return 'DevOps';
    } else if (content.includes('ai') || content.includes('machine learning') || content.includes('artificial intelligence')) {
      return 'AI & ML';
    }
    return 'Technology';
  };

  const fetchTechNews = async (apiKey: string) => {
    try {
      setLoading(true);
      setError(null);

      // First try with a simple query to test the API key
      const testResponse = await fetch(`https://newsapi.org/v2/top-headlines?country=us&pageSize=1&apiKey=${apiKey}`);
      
      if (!testResponse.ok) {
        const errorData = await testResponse.json();
        if (errorData.code === 'corsNotAllowed') {
          throw new Error('CORS Error: This API key requires server-side requests. NewsAPI Developer plan only works from localhost.');
        }
        throw new Error(errorData.message || 'Failed to fetch news');
      }

      // Fetch tech news with specific queries for better targeting
      const queries = [
        'web development',
        'cloud computing',
        'javascript react',
        'kubernetes docker',
        'cybersecurity'
      ];

      const promises = queries.map(query => 
        fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&language=en&sortBy=publishedAt&pageSize=5&apiKey=${apiKey}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
      );

      const responses = await Promise.all(promises);
      
      // Combine all articles and remove duplicates
      const allArticles: Article[] = [];
      const seenUrls = new Set<string>();

      responses.forEach((response: NewsAPIResponse) => {
        if (response.status === 'ok' && response.articles) {
          response.articles.forEach(article => {
            if (!seenUrls.has(article.url) && article.urlToImage && article.description) {
              seenUrls.add(article.url);
              allArticles.push({
                ...article,
                id: article.url,
                category: categorizeArticle(article.title, article.description),
                readTime: estimateReadTime(article.description)
              });
            }
          });
        }
      });

      // Sort by publication date and take the latest 20 articles
      const sortedArticles = allArticles
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
        .slice(0, 20);

      setArticles(sortedArticles);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch news');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const apiKey = getApiKey();
    if (apiKey) {
      fetchTechNews(apiKey);
    } else {
      setLoading(false);
    }
  }, []);

  const refetch = () => {
    const apiKey = getApiKey();
    if (apiKey) {
      fetchTechNews(apiKey);
    }
  };

  return {
    articles,
    loading,
    error,
    refetch,
    hasApiKey: !!getApiKey(),
    currentApiKey: getApiKey(),
    saveApiKey: (key: string) => {
      saveApiKey(key);
      fetchTechNews(key);
    }
  };
};

export default useNewsAPI;