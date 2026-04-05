// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="w-full bg-[#F8F8F8] border-t border-zinc-200 py-10 px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* 왼쪽: 로고 및 설명 */}
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold text-zinc-800">ROMS PROJECT</h2>
          <p className="text-sm text-zinc-500">
            오버워치 러너리그의 모든 기록과 통계를 한눈에 확인하세요.
          </p>
        </div>
      </div>

      {/* 하단: 저작권 표시 */}
      <div className="max-w-6xl mx-auto mt-2 pt-2 border-t border-zinc-200 text-xs text-zinc-400">
        © 2026 ROMS Project. All rights reserved. 본 사이트는 오버워치
        러너리그의 팬 프로젝트입니다.
      </div>
    </footer>
  );
}
