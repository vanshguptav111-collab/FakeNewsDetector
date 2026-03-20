import { ExternalLink, Calendar, Link as LinkIcon } from "lucide-react";

interface NewsCardProps {
  title: string;
  source: string;
  url: string;
  date: string;
}

export function NewsCard({ title, source, url, date }: NewsCardProps) {
  return (
    <div className="group relative flex flex-col bg-card/60 hover:bg-card border shadow-sm hover:shadow-md rounded-2xl p-5 transition-all duration-300">
      <div className="flex-1 space-y-3">
        <h4 className="text-lg font-semibold line-clamp-2 leading-tight group-hover:text-blue-400 transition-colors">
          {title}
        </h4>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground/80 mt-auto pt-2">
          <div className="flex items-center gap-1.5">
            <LinkIcon size={14} />
            <span className="font-medium text-muted-foreground">{source}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-border/50">
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors"
        >
          Read More <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
}
