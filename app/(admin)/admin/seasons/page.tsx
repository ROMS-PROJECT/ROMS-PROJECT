// 이 컴포넌트는 서버가 아니라 클라이언트에게 렌더링하고 실행해라고 Next.js에게 알려주는 역할
// 이벤트 핸들러나 브라우저 API를 사용하는 경우 써야한다고 함
"use client";

/**
 * useState : 컴포넌트 내에서 이 함수로 설정한 변수값이 변하게 되면 자동으로 화면을 즉시 새로고침(재렌더링) 해준다고 함.
 * useState를 안썼다면 화면을 깜빡거리면서 새로고침을 했어야 할꺼임
 */
import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

// 시즌 변수 선언
interface Season {
  season_number: number;
  season_name: string | null;
  season_start_date: string | null;
  remark: string | null;
  created_by: string;
  create_date: string;
}

// SeasonRegistrationPage 함수 정의
// 기본적으로 서버에서 실행되지만, use client가 선언되었으므로 클라이언트에서 실행됨
export default function SeasonRegistrationPage() {
  // ====================== 변수 선언 시작 ========================
  // 사용자가 폼(입력창)에 작성하는 데이터(시즌 이름, 시작일, 설명)를 임시로 저장하고 추적하는 변수
  const [formData, setFormData] = useState({
    name: "",
    startDate: "",
    description: "",
  });

  // Supabase 데이터베이스에서 불러온 등록된 '시즌 목록 전체'를 저장하는 변수
  const [seasons, setSeasons] = useState<Season[]>([]);

  // 현재 데이터를 불러오고 있는 중인지(로딩 중인지)를 나타내는 변수
  // 값이 true이면 로딩 스피너(빙글빙글 도는 애니메이션)를 화면에 보여줌
  const [isLoading, setIsLoading] = useState(true);

  // 그리드에서 선택된 시즌의 ID(번호)를 저장하는 변수 (null이면 '새 시즌 등록' 모드)
  const [selectedSeasonId, setSelectedSeasonId] = useState<number | null>(null);

  // 저장중 상태 여부 확인(CRUD모두 적용)
  const [isSaving, setIsSaving] = useState(false);
  // ====================== 변수 선언 종료 ========================

  // ====================== 함수 선언 시작 ========================
  // 시즌 조회 함수
  const fetchSeasonsData = async () => {
    const { data, error } = await supabase
      .from("tb_season")
      .select("*")
      .order("season_number", { ascending: true });

    if (error) {
      console.error("Error fetching seasons:", error);
      return null;
    }
    return data || [];
  };

  // 페이지가 처음 로딩될때 실행되는 함수
  useEffect(() => {
    // 로딩 함수 선언
    const loadData = async () => {
      setIsLoading(true); // 로딩 시작
      const data = await fetchSeasonsData(); // 조회
      if (data) setSeasons(data); // 조회된 데이터로 화면에 반영
      setIsLoading(false); // 로딩 종료
    };

    // 함수 실행
    loadData();
  }, []); // []는 한번만 실행해라 의미

  // 🖱️ 목록에서 특정 행을 클릭했을 때 실행되는 함수
  const handleRowClick = (season: Season) => {
    setSelectedSeasonId(season.season_number);
    setFormData({
      name: season.season_name || "",
      // HTML input type="date"는 YYYY-MM-DD 형식만 받으므로 시간 부분(T 이후)을 잘라냅니다.
      startDate: season.season_start_date
        ? season.season_start_date.split("T")[0]
        : "",
      description: season.remark || "",
    });
  };

  // 🧹 폼을 비우고 "새 시즌 등록" 모드로 돌아가는 함수
  const handleClearSelection = () => {
    setSelectedSeasonId(null);
    setFormData({ name: "", startDate: "", description: "" });
  };

  // 🗑️ 삭제 버튼 기능
  const handleDelete = async () => {
    if (isSaving) return; // 저장 중에는 중복 클릭 방지
    setIsSaving(true); // 저장 상태 시작
    if (!selectedSeasonId) {
      alert("삭제할 시즌을 왼쪽 목록에서 먼저 클릭하여 선택해주세요.");
      return;
    }
    if (!window.confirm("정말 이 시즌을 삭제하시겠습니까?")) return;

    setIsLoading(true);
    const { error } = await supabase
      .from("tb_season")
      .delete()
      .eq("season_number", selectedSeasonId);

    if (error) {
      console.error("Error deleting season:", error);
      alert(`삭제 중 오류가 발생했습니다: ${error.message}`);
    } else {
      alert("시즌이 성공적으로 삭제되었습니다.");
      const data = await fetchSeasonsData(); // 목록 새로고침
      if (data) setSeasons(data);
      setIsLoading(false);
      handleClearSelection(); // 폼 초기화
      setIsSaving(false); // 저장중 상태 해제
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedSeasonId) {
      if (isSaving) return; // 저장 중에는 중복 클릭 방지
      setIsSaving(true); // 저장 상태 시작
      // 📝 수정 모드 (Update)
      const { error } = await supabase
        .from("tb_season")
        .update({
          season_name: formData.name,
          season_start_date: formData.startDate
            ? new Date(formData.startDate).toISOString()
            : null,
          remark: formData.description,
        })
        .eq("season_number", selectedSeasonId);

      if (error) {
        console.error("Error updating season:", error);
        alert(`수정 중 오류가 발생했습니다: ${error.message}`);
      } else {
        alert("시즌 정보가 성공적으로 수정되었습니다!");
        setIsLoading(true);
        const data = await fetchSeasonsData();
        if (data) setSeasons(data);
        setIsLoading(false);
        handleClearSelection();
        setIsSaving(false); // 저장 상태 해제
      }
    } else {
      if (isSaving) return; // 저장 중에는 중복 클릭 방지
      setIsSaving(true); // 저장 상태 시작
      // 등록 모드 (Insert)
      const { error } = await supabase.from("tb_season").insert([
        {
          season_name: formData.name,
          season_start_date: formData.startDate
            ? new Date(formData.startDate).toISOString()
            : null,
          remark: formData.description,
          created_by: "admin", // 일단 임의의 작성자 지정 (필수값)
          create_date: new Date().toISOString(),
        },
      ] as Omit<Season, "season_number">[]);

      if (error) {
        console.error("Error inserting season:", error);
        alert(`등록 중 오류가 발생했습니다: ${error.message}`);
      } else {
        alert("시즌이 성공적으로 등록되었습니다!");
        setIsLoading(true);
        const data = await fetchSeasonsData(); // 목록 새로고침
        if (data) setSeasons(data);
        setIsLoading(false);
        handleClearSelection();
        setIsSaving(false); // 저장 상태 해제
      }
    }
  };

  return (
    <div className="mx-auto py-4 px-4">
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-slate-800 tracking-tight">
          시즌 관리
        </h1>
        <p className="text-slate-500 mt-2 text-lg">
          시즌 목록을 조회하고 새로운 시즌을 등록하세요.
        </p>
      </div>
      <div className="mb-4">
        <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-slate-200 p-8 h-fit">
          검색
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
        {/* 왼쪽: 등록된 시즌 목록 표시 영역 */}
        <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-slate-200 pt-8 h-[calc(100vh-220px)] overflow-y-auto">
          <h2 className="text-xl font-bold text-slate-800 mb-6 px-8">
            시즌 목록
          </h2>

          {isLoading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
            </div>
          ) : seasons.length === 0 ? (
            <div className="text-center py-8 text-slate-500">
              등록된 시즌이 없습니다.
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow className="text-center">
                  <TableHead hidden>테이블PK번호</TableHead>
                  <TableHead className="w-15">번호</TableHead>
                  <TableHead className="w-50">이름</TableHead>
                  <TableHead className="w-30">시작일</TableHead>
                  <TableHead>비고(설명)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {seasons.map((season, idx) => (
                  <TableRow
                    key={season.season_number || idx}
                    onClick={() => handleRowClick(season)}
                    className={`cursor-pointer ${
                      selectedSeasonId === season.season_number
                        ? "bg-indigo-50"
                        : "hover:bg-slate-50"
                    }`}
                  >
                    <TableCell hidden className="">
                      {season.season_number}
                    </TableCell>
                    <TableCell className="text-center">{idx + 1}</TableCell>
                    <TableCell className="text-left">
                      {season.season_name || "-"}
                    </TableCell>
                    <TableCell className="text-center">
                      {season.season_start_date
                        ? season.season_start_date.split("T")[0]
                        : "-"}
                    </TableCell>
                    <TableCell className="text-left">
                      {season.remark || "-"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>

        {/* 오른쪽: 시즌 등록 폼 (40% 비율) */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 p-8 h-fit">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-800">
              {selectedSeasonId ? "시즌 상세 / 수정" : "새 시즌 등록"}
            </h2>
            <div className="flex gap-2">
              {/* 새로 쓰기 버튼 */}
              {selectedSeasonId && (
                <button
                  type="button"
                  onClick={handleClearSelection}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg shadow-sm hover:shadow transition-all active:scale-[0.98]"
                >
                  새로 쓰기
                </button>
              )}
              {/* 저장 버튼 */}
              <button
                type="submit"
                form="season-form"
                className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-sm hover:shadow transition-all active:scale-[0.98]"
              >
                저장
              </button>
              {/* 삭제 버튼 */}
              <button
                type="button"
                className="px-6 py-2 bg-rose-500 hover:bg-rose-600 text-white font-medium rounded-lg shadow-sm hover:shadow transition-all active:scale-[0.98]"
                onClick={handleDelete}
              >
                삭제
              </button>
            </div>
          </div>
          <form id="season-form" onSubmit={handleSubmit} className="space-y-6">
            {/* 시즌 이름 */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                시즌 이름
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder=""
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-slate-50 focus:bg-white outline-none"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 시작일 */}
              <div>
                <label
                  htmlFor="startDate"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  시작일
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-slate-50 focus:bg-white outline-none"
                  required
                />
              </div>
            </div>

            {/* 상세 설명 */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                상세 설명
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                placeholder="시즌에 대한 상세한 설명을 입력하세요."
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-slate-50 focus:bg-white outline-none resize-none"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
