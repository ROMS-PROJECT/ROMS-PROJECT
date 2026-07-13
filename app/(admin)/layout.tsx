import { SidebarItem } from "@/components/admin/SidebarItem";
import Link from "next/link";

// 관리자용 레이아웃 뼈대
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-slate-50">
      {/* 관리자 전용 좌측 사이드바 예시 */}
      <aside className="w-64 bg-white border-r border-slate-200 text-slate-800 p-4 shadow-sm">
        <h1 className="text-xl font-bold mb-8 text-indigo-600 hover:text-indigo-800 transition-colors">
          <Link href="/admin">ROMS Project 관리자용</Link>
        </h1>
        {/* 배열 돌면서 컴포넌트 랜더링 */}
        <nav className="flex flex-col gap-2">
          {ADMIN_MENUS.map((menu) => (
            <SidebarItem
              key={menu.href}
              href={menu.href}
              label={menu.label}
              icon={menu.icon}
            />
          ))}
        </nav>
      </aside>

      {/* 우측 메인 콘텐츠 영역 */}
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}

// 관리자 메뉴 href, label
const ADMIN_HREF_LABEL = [
  {
    href: "/admin/seasons",
    label: "시즌관리",
  },
  {
    href: "/admin/users",
    label: "사용자 관리",
  },
  {
    href: "/admin/stats",
    label: "통계 보기",
  },
];

// 관리자 메뉴 정의
const ADMIN_MENUS = [
  {
    href: ADMIN_HREF_LABEL[0].href,
    label: ADMIN_HREF_LABEL[0].label,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" />
        <path d="M3 10h18" />
        <path d="M16 19h6" />
        <path d="M19 16v6" />
      </svg>
    ),
  },
  {
    href: ADMIN_HREF_LABEL[1].href,
    label: ADMIN_HREF_LABEL[1].label,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    href: ADMIN_HREF_LABEL[2].href,
    label: ADMIN_HREF_LABEL[2].label,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3v18h18" />
        <path d="M18 17V9" />
        <path d="M13 17V5" />
        <path d="M8 17v-3" />
      </svg>
    ),
  },
];
