import { ReactNode } from "react";

interface ProjectButtonProps {
  href: string;
  icon: ReactNode;
  children: React.ReactNode;
}

export default function ProjectButton({ href, icon, children }: ProjectButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group project-button"
    >
      <span className="project-button-icon">
        {icon}
      </span>
      {children}
    </a>
  );
}
