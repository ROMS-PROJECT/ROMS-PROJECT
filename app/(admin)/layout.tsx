// 관리자용 레이아웃 뼈대
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-zinc-100">
      {/* 관리자 전용 좌측 사이드바 예시 */}
      <aside className="w-64 bg-zinc-900 text-white p-4">
        <h1 className="text-xl font-bold mb-8">Admin Panel</h1>
        <nav className="flex flex-col gap-4">
          <a href="/admin/users" className="hover:text-zinc-300">
            사용자 관리
          </a>
          <a href="/admin/stats" className="hover:text-zinc-300">
            통계 보기
          </a>
        </nav>
      </aside>

      {/* 우측 메인 콘텐츠 영역 */}
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
}
