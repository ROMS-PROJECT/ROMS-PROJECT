export default function userSearchMap() {
  const data = [
    { map: "리장타워", total: 50, win: 30, lose: 20, rate: "60%" },
    { map: "부산", total: 20, win: 10, lose: 10, rate: "50%" },
    { map: "수라바사", total: 40, win: 30, lose: 10, rate: "75%" },
  ];


    return (
        <>
            <div className="min-h-screen bg-gray-100 flex justify-center">
                <div className="w-full max-w-6xl p-10">


                    <div className="flex items-center gap-6 p-4">

                        {/* 왼쪽 프로필 */}
                        <img
                            src="/profile.png"
                            alt="profile"
                            className="w-20 h-20 rounded"
                        />

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
                        </div>
                    </div>

                    {/* 버튼 영역 - 이미지 밑으로 이동 */}
                    <div className="flex gap-4 mt-4 justify-center">
                        <button className="px-4 py-2 border shadow">시즌4우승</button>
                        <button className="px-4 py-2 border shadow">시즌3준우승</button>
                        <button className="px-4 py-2 border shadow">시즌2우승</button>
                        <button className="px-4 py-2 border shadow">시즌1준우승</button>
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

                    <div className="grid grid-cols-2 gap-6">

                        {/* 왼쪽 영역 */}
                        <div className="flex flex-col gap-6">

                            {/* 가장 많이 사용한 영웅 */}
                            <div className="border p-4 bg-white">
                                <p className="font-bold mb-2 text-center">가장 많이 사용한 영웅 Top3</p>
                                <div className="flex justify-between">
                                    <div className="text-center">
                                        <p>Top1</p>
                                        <img src="/hero1.png" className="w-16 h-16 mx-auto" />
                                        <p>60번</p>
                                    </div>
                                    <div className="text-center">
                                        <p>Top2</p>
                                        <img src="/hero2.png" className="w-16 h-16 mx-auto" />
                                        <p>30번</p>
                                    </div>
                                    <div className="text-center">
                                        <p>Top3</p>
                                        <img src="/hero3.png" className="w-16 h-16 mx-auto" />
                                        <p>25번</p>
                                    </div>
                                </div>
                            </div>

                            {/* 승률 높은 맵 */}
                            <div className="border p-4 bg-white">
                                <p className="font-bold mb-2 text-center">승률 높은 맵순위 Top3</p>
                                <div className="flex justify-between">
                                    <div className="text-center">
                                        <p>Top1</p>
                                        <img src="/map1.png" className="w-20 h-12 mx-auto" />
                                        <p>90%</p>
                                    </div>
                                    <div className="text-center">
                                        <p>Top2</p>
                                        <img src="/map2.png" className="w-20 h-12 mx-auto" />
                                        <p>80%</p>
                                    </div>
                                    <div className="text-center">
                                        <p>Top3</p>
                                        <img src="/map3.png" className="w-20 h-12 mx-auto" />
                                        <p>65%</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* 오른쪽 영역 */}
                        <div className="flex flex-col gap-6">

                            {/* 모든 경기 누적 */}
                            <div className="border p-4 bg-white">
                                <p className="font-bold mb-2 text-center">모든 경기 누적합</p>
                                <div className="grid grid-cols-6 gap-2 text-center">
                                    <div>총킬<br />60</div>
                                    <div>총도움<br />60</div>
                                    <div>총죽음<br />60</div>
                                    <div>총피해량<br />60</div>
                                    <div>총치유<br />60</div>
                                    <div>총경감<br />60</div>
                                </div>
                            </div>

                            {/* 경기당 최대 */}
                            <div className="border p-4 bg-white">
                                <p className="font-bold mb-2 text-center">경기당 최대</p>
                                <div className="grid grid-cols-6 gap-2 text-center">
                                    <div>킬<br />60</div>
                                    <div>도움<br />60</div>
                                    <div>죽음<br />60</div>
                                    <div>피해량<br />60</div>
                                    <div>치유<br />60</div>
                                    <div>경감<br />60</div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}
