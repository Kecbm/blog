import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

interface ExternalLinkProps {
  name: string;
  description?: string;
  url: string;
  icon?: ReactNode;
  iconType?: 'linkedin' | 'github' | 'twitter' | 'dev.to';
}

export default function ExternalLink({ 
  name, 
  description, 
  url, 
  icon, 
  iconType 
}: ExternalLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group external-link"
    >
      <span className="flex items-center gap-4">
        <span className={`external-link-icon ${iconType || ''}`}>
          {icon}
        </span>
        {name}
        <span className="-translate-x-4 external-link-subtitle opacity-0 transition-all max-sm:hidden sm:group-hover:translate-x-0 sm:group-hover:opacity-100">
          {description}
        </span>
      </span>
      <ArrowUpRight className="external-link-arrow" />
    </a>
  );
}
