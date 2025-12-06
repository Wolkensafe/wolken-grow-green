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

      // Try the correct endpoint - based on API docs it should be /news or similar
      const response = await fetch('https://ai-news-global.p.rapidapi.com/news', {
        method: 'GET',
        headers: {
          'x-rapidapi-key': RAPIDAPI_KEY,
          'x-rapidapi-host': RAPIDAPI_HOST
        }
      });

      console.log('API Response status:', response.status);
      
      if (!response.ok) {
        // If /news doesn't work, try /get_regions to see what's available
        const regionsResponse = await fetch('https://ai-news-global.p.rapidapi.com/get_regions', {
          method: 'GET',
          headers: {
            'x-rapidapi-key': RAPIDAPI_KEY,
            'x-rapidapi-host': RAPIDAPI_HOST
          }
        });
        
        if (regionsResponse.ok) {
          const regions = await regionsResponse.json();
          console.log('Available regions:', regions);
          
          // Try fetching news with a region parameter
          if (Array.isArray(regions) && regions.length > 0) {
            const newsWithRegion = await fetch(`https://ai-news-global.p.rapidapi.com/news?region=${regions[0]}`, {
              method: 'GET',
              headers: {
                'x-rapidapi-key': RAPIDAPI_KEY,
                'x-rapidapi-host': RAPIDAPI_HOST
              }
            });
            
            if (newsWithRegion.ok) {
              const data = await newsWithRegion.json();
              console.log('News data with region:', data);
              processNewsData(data);
              return;
            }
          }
        }
        
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('API Response data:', data);
      processNewsData(data);
      
    } catch (err) {
      console.error('Failed to fetch AI news:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch news');
    } finally {
      setLoading(false);
    }
  };

  const processNewsData = (data: any) => {
    const transformedArticles: Article[] = [];
    
    // Handle various response formats
    const newsArray = Array.isArray(data) ? data : 
                      data.articles ? data.articles :
                      data.news ? data.news :
                      data.data ? data.data : [];
    
    newsArray.forEach((item: any, index: number) => {
      transformedArticles.push({
        id: item.id || item._id || `ai-news-${index}`,
        title: item.title || item.headline || item.name || 'AI News Article',
        description: item.description || item.summary || item.content || item.text || 'Read more about the latest AI developments.',
        url: item.url || item.link || item.sourceUrl || '#',
        urlToImage: item.image || item.urlToImage || item.thumbnail || item.imageUrl || item.img || '/placeholder.svg',
        publishedAt: item.publishedAt || item.published_at || item.date || item.pubDate || item.createdAt || new Date().toISOString(),
        source: {
          name: item.source?.name || item.source || item.publisher || item.author || 'AI News Global'
        },
        category: 'AI & ML',
        readTime: estimateReadTime(item.description || item.summary || item.content || '')
      });
    });

    // Sort by publication date
    const sortedArticles = transformedArticles
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .slice(0, 20);

    setArticles(sortedArticles);
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
