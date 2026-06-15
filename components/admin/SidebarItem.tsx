// components/admin/SidebarItem.tsx
import Link from "next/link";

interface SidebarItemProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export function SidebarItem({ href, label, icon }: SidebarItemProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-700 transition-colors font-medium"
    >
      {icon}
      {label}
    </Link>
  );
}
