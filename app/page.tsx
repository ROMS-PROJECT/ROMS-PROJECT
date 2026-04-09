import Image from "next/image";

export default function Home() {
  // 샘플 데이터 (실제 DB 데이터와 연결하여 사용하세요)
  const topWinners = [
    { rank: "TOP 1", name: "러너", wins: "5회", img: "/runner.png" },
    { rank: "TOP 2", name: "라임", wins: "4회", img: "/lime.png" },
    { rank: "TOP 3", name: "김성빈", wins: "3회", img: "/kim.png" },
    { rank: "TOP 4", name: "러쉬릭", wins: "2회", img: "/rush.png" },
    { rank: "TOP 5", name: "라열", wins: "1회", img: "/rayeol.png" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-white text-gray-900 space-y-12">
      {/* 1. 러너리그 우승 횟수 Top 5 */}
      <section>
        <h2 className="text-xl font-bold mb-6 border-l-4 border-blue-500 pl-3">
          모든 시즌 우승횟수 Top5
        </h2>
        <div className="grid grid-cols-5 gap-4">
          {topWinners.map((player, idx) => (
            // 카드 배경을 연한 회색으로, 테두리는 밝은 회색으로 변경
            <div
              key={idx}
              className={`relative p-4 rounded-lg border ${idx === 0 ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-gray-50"}`}
            >
              <span className="text-xs font-bold text-gray-500">
                {player.rank}
              </span>
              <div className="mt-2 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-3 overflow-hidden border-2 border-white shadow-sm"></div>
                <p className="font-bold">{player.name}</p>
                <p className="text-blue-600 text-sm font-mono">
                  {player.wins} WINS
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. 시즌 최다 기록 (개별 지표) */}
      {/* 2. 시즌 최다 기록 & 누적 기록 */}
      {/* 아래 카드들의 bg-gray-800 등을 bg-gray-100이나 bg-white로 변경하여 사용하세요 */}
      <section>
        <div className="grid grid-cols-6 gap-3">
          {[
            "최다처치",
            "최다도움",
            "최다죽음",
            "최다피해",
            "최다치유",
            "최다경감",
          ].map((label, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-xl p-4 flex flex-col items-center border border-gray-200"
            >
              <span className="text-xs text-gray-500 mb-2">{label}</span>
              <div className="w-16 h-16 rounded-full bg-gray-200 mb-2"></div>
              <p className="text-sm font-bold">플레이어</p>
              <p className="text-blue-600 text-xs mt-1 font-bold">60 Kills</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. 누적 최다 기록 (그리드 하단) */}
      <section>
        <div className="grid grid-cols-6 gap-3">
          {[
            "누적최다처치",
            "누적최다도움",
            "누적최다죽음",
            "누적최다피해",
            "누적최다치유",
            "누적최다경감",
          ].map((label, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-xl p-4 flex flex-col items-center border border-gray-200"
            >
              <span className="text-xs text-gray-500 mb-2">{label}</span>
              <div className="w-16 h-16 rounded-full bg-gray-200 mb-2"></div>
              <p className="text-sm font-bold">플레이어</p>
              <p className="text-blue-600 text-xs mt-1 font-bold">60 Kills</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
