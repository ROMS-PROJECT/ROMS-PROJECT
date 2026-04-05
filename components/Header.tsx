"use client"; // 상태(useState)를 쓰려면 파일 최상단에 이 줄이 꼭 있어야 함

import { useState } from "react";

/**
 * ROMS 프로젝트 기본 화면 Header 바
 * @returns 상단 헤더 UI 및 nav UI
 */
export default function Header() {
  // 1. 현재 선택된 시즌을 저장할 상태 (기본값: "")
  const [activeSeason, setActiveSeason] = useState("");

  return (
    <header className="w-full flex flex-col items-center bg-[#F1F1F1] text-zinc-950 font-sans border-b border-zinc-200">
      {/* 1단: 로고와 검색창 */}
      <div className="w-full max-w-6xl flex items-center justify-between py-4">
        {/* 로고 (임시 텍스트) */}
        <div className="text-xl font-semibold whitespace-nowrap">
          오버워치 러너리그
        </div>

        {/* 검색창 */}
        <div className="relative flex-1 pl-5">
          <input
            type="text"
            placeholder="선수 이름을 입력해주세요."
            className="w-full h-11 px-4 pr-12 rounded-lg border border-zinc-200 bg-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400"
          />
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-zinc-400 hover:text-zinc-700 transition-colors cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
      </div>

      <nav className="w-full max-w-6xl flex flex-wrap items-center gap-3 pb-4">
        {["시즌 1", "시즌 2", "시즌 3", "시즌 4"].map((season) => (
          <button
            key={season}
            // 2. 클릭 시 상태 변경
            onClick={() => setActiveSeason(season)}
            // 3. 상태에 따라 배경색(bg)과 글자색(text) 변경
            className={`px-5 h-11 rounded-lg font-medium text-sm transition-colors shadow-sm
              ${
                activeSeason === season
                  ? "bg-zinc-800 text-white shadow-md" // 선택되었을 때 (진한 회색/검정)
                  : "bg-[#E1E1E1] text-zinc-600 hover:bg-zinc-300" // 선택 안 되었을 때 (연한 회색)
              }`}
          >
            {season}
          </button>
        ))}

        <div className="w-[1px] h-6 bg-zinc-300 mx-2" />

        {/* 라이벌 클래시나 랭킹도 필요하다면 같은 방식으로 activeSeason에 포함시킬 수 있습니다 */}
        <button
          onClick={() => setActiveSeason("라이벌 클래시")}
          className={`px-5 h-11 rounded-lg font-medium text-sm transition-colors 
            ${activeSeason === "라이벌 클래시" ? "bg-zinc-800 text-white" : "bg-[#E1E1E1] hover:bg-zinc-300"}`}
        >
          라이벌 클래시
        </button>

        <div className="w-[1px] h-6 bg-zinc-300 mx-2" />

        <button
          onClick={() => setActiveSeason("랭킹")}
          className={`px-5 h-11 rounded-lg font-medium text-sm transition-colors 
            ${activeSeason === "랭킹" ? "bg-zinc-800 text-white" : "bg-[#E1E1E1] hover:bg-zinc-300"}`}
        >
          랭킹
        </button>
      </nav>
    </header>
  );
}
