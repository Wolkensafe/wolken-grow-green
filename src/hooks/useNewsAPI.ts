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

const RAPIDAPI_KEY = 'c5ff41c84bmsh3670642649d501ap15ce8cjsn5cdf29cfa0d6';
const RAPIDAPI_HOST = 'ai-news-global.p.rapidapi.com';

const useNewsAPI = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Function to estimate read time based on description length
  const estimateReadTime = (description: string): string => {
    const wordsPerMinute = 200;
    const wordCount = description?.split(' ').length || 0;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${Math.max(1, minutes)} min read`;
  };

  const fetchAINews = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('https://ai-news-global.p.rapidapi.com/get_news', {
        method: 'GET',
        headers: {
          'x-rapidapi-key': RAPIDAPI_KEY,
          'x-rapidapi-host': RAPIDAPI_HOST
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // Transform the API response to our Article format
      const transformedArticles: Article[] = [];
      
      if (Array.isArray(data)) {
        data.forEach((item: any, index: number) => {
          transformedArticles.push({
            id: item.id || `ai-news-${index}`,
            title: item.title || item.headline || 'AI News Article',
            description: item.description || item.summary || item.content || 'Read more about the latest AI developments.',
            url: item.url || item.link || '#',
            urlToImage: item.image || item.urlToImage || item.thumbnail || '/placeholder.svg',
            publishedAt: item.publishedAt || item.published_at || item.date || new Date().toISOString(),
            source: {
              name: item.source?.name || item.source || item.publisher || 'AI News Global'
            },
            category: 'AI & ML',
            readTime: estimateReadTime(item.description || item.summary || '')
          });
        });
      } else if (data.articles && Array.isArray(data.articles)) {
        data.articles.forEach((item: any, index: number) => {
          transformedArticles.push({
            id: item.id || `ai-news-${index}`,
            title: item.title || item.headline || 'AI News Article',
            description: item.description || item.summary || item.content || 'Read more about the latest AI developments.',
            url: item.url || item.link || '#',
            urlToImage: item.image || item.urlToImage || item.thumbnail || '/placeholder.svg',
            publishedAt: item.publishedAt || item.published_at || item.date || new Date().toISOString(),
            source: {
              name: item.source?.name || item.source || item.publisher || 'AI News Global'
            },
            category: 'AI & ML',
            readTime: estimateReadTime(item.description || item.summary || '')
          });
        });
      } else if (data.news && Array.isArray(data.news)) {
        data.news.forEach((item: any, index: number) => {
          transformedArticles.push({
            id: item.id || `ai-news-${index}`,
            title: item.title || item.headline || 'AI News Article',
            description: item.description || item.summary || item.content || 'Read more about the latest AI developments.',
            url: item.url || item.link || '#',
            urlToImage: item.image || item.urlToImage || item.thumbnail || '/placeholder.svg',
            publishedAt: item.publishedAt || item.published_at || item.date || new Date().toISOString(),
            source: {
              name: item.source?.name || item.source || item.publisher || 'AI News Global'
            },
            category: 'AI & ML',
            readTime: estimateReadTime(item.description || item.summary || '')
          });
        });
      }

      // Sort by publication date
      const sortedArticles = transformedArticles
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
        .slice(0, 20);

      setArticles(sortedArticles);
    } catch (err) {
      console.error('Failed to fetch AI news:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch news');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAINews();
  }, []);

  const refetch = () => {
    fetchAINews();
  };

  return {
    articles,
    loading,
    error,
    refetch,
    hasApiKey: true,
    currentApiKey: RAPIDAPI_KEY
  };
};

export default useNewsAPI;
