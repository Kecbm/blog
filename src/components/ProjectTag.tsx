interface ProjectTagProps {
  children: React.ReactNode;
}

export default function ProjectTag({ children }: ProjectTagProps) {
  return (
    <span className="project-tag">
      {children}
    </span>
  );
}
