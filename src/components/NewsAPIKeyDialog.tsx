import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ExternalLink, Key } from "lucide-react";

interface NewsAPIKeyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onApiKeySave: (apiKey: string) => void;
}

const NewsAPIKeyDialog = ({ open, onOpenChange, onApiKeySave }: NewsAPIKeyDialogProps) => {
  const [apiKey, setApiKey] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    if (!apiKey.trim()) return;
    
    setIsLoading(true);
    try {
      // Test the API key with a simple request
      const testResponse = await fetch(`https://newsapi.org/v2/top-headlines?country=us&pageSize=1&apiKey=${apiKey}`);
      const testData = await testResponse.json();
      
      if (testData.status === 'ok') {
        onApiKeySave(apiKey);
        onOpenChange(false);
        setApiKey("");
      } else {
        throw new Error(testData.message || 'Invalid API key');
      }
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Failed to validate API key');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Key className="h-5 w-5" />
            News API Configuration
          </DialogTitle>
          <DialogDescription>
            Enter your News API key to fetch the latest tech articles. Your key will be stored locally in your browser.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <Alert>
            <AlertDescription className="text-sm">
              Don't have an API key? Get one for free at{" "}
              <a 
                href="https://newsapi.org/register" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                newsapi.org <ExternalLink className="h-3 w-3" />
              </a>
            </AlertDescription>
          </Alert>
          
          <div className="space-y-2">
            <Label htmlFor="apikey">API Key</Label>
            <Input
              id="apikey"
              type="password"
              placeholder="Enter your News API key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSave()}
            />
          </div>
          
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button 
              onClick={handleSave} 
              disabled={!apiKey.trim() || isLoading}
            >
              {isLoading ? "Validating..." : "Save & Connect"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsAPIKeyDialog;