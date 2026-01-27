import { useState } from 'react';
import { Check, Files } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface CopyAllButtonProps {
  text: string;
  label?: string;
  className?: string;
}

export function CopyAllButton({ text, label = 'Copy All', className = '' }: CopyAllButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className={`h-7 gap-1.5 text-xs ${className}`}
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 text-green-500" />
            ) : (
              <Files className="h-3.5 w-3.5" />
            )}
            {copied ? 'Copied!' : label}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="top" className="text-xs">
          <p>Copy all content</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
