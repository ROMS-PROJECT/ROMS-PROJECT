export default function userSearchMap() {
  const data = [
    { map: "리장타워", total: 50, win: 30, lose: 20, rate: "60%" },
    { map: "부산", total: 20, win: 10, lose: 10, rate: "50%" },
    { map: "수라바사", total: 40, win: 30, lose: 10, rate: "75%" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-3xl p-10">
        {/* 상단 */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <h1 className="text-xl font-bold">오버워치 리더보드</h1>
          <input
            placeholder="선수이름을 입력해주세요."
            className="border px-3 py-2 w-80"
          />
        </div>

        <div className="flex items-center gap-6 p-4 bg-gray-200">
          {/* 왼쪽 프로필*/}
          {/* src위치는 default로 public에서 찾는다*/}
          <img src="/profile.png" alt="profile" className="w-20 h-20 rounded" />

          {/* 오른쪽 전체 영역 */}
          <div className="flex flex-col gap-3">
            {/* 이름 + 아이콘 */}
            <div>
              <p className="font-bold">소우릎</p>
              <div className="flex gap-2 mt-1">
                <img src="/z.png" className="w-6 h-6" />
                <img src="/youtube.png" className="w-6 h-6" />
              </div>
            </div>

            {/* 버튼 영역 */}
            <div className="flex gap-4">
              <button className="px-4 py-2 border shadow">시즌4우승</button>
              <button className="px-4 py-2 border shadow">시즌3준우승</button>
              <button className="px-4 py-2 border shadow">시즌2우승</button>
              <button className="px-4 py-2 border shadow">시즌1준우승</button>
            </div>
          </div>
        </div>

        {/* 탭 */}
        <div className="flex justify-center gap-2 mb-4">
          <button className="bg-gray-300 px-4 py-2">개요</button>
          <button className="bg-gray-300 px-4 py-2">업적</button>
          <button className="bg-gray-300 px-4 py-2">맵별 상세결과</button>
          <button className="bg-gray-500 text-white px-4 py-2">
            맵별 데이터
          </button>
        </div>

        {/* 필터 */}
        <div className="flex justify-start mb-4">
          <select className="border px-2 py-1">
            <option>모든 시즌</option>
          </select>
        </div>

        {/* 테이블 */}
        <div className="flex justify-center">
          <table className="border w-full max-w-xl bg-white text-center">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-2 py-1">맵이름</th>
                <th className="border px-2 py-1">총경기수</th>
                <th className="border px-2 py-1">승</th>
                <th className="border px-2 py-1">패</th>
                <th className="border px-2 py-1">승률</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i}>
                  <td className="border px-2 py-1">{row.map}</td>
                  <td className="border px-2 py-1">{row.total}</td>
                  <td className="border px-2 py-1">{row.win}</td>
                  <td className="border px-2 py-1">{row.lose}</td>
                  <td className="border px-2 py-1">{row.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
