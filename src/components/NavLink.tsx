import Link from "next/link";
import { Triangle } from "lucide-react";

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  children: React.ReactNode;
}

export default function NavLink({ href, label, isActive, children }: NavLinkProps) {
  return (
    <Link
      className="group nav-link-base"
      href={href}
      aria-label={label}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
      <Triangle
        aria-hidden="true"
        className="nav-triangle"
      />
    </Link>
  );
}
