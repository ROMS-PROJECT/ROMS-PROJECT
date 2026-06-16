"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function SeasonRegistrationPage() {
  const [formData, setFormData] = useState({
    name: "",
    startDate: "",
    description: "",
  });

  const [seasons, setSeasons] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchSeasons = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("tb_season")
      .select("*")
      .order("season_number", { ascending: false });

    if (error) {
      console.error("Error fetching seasons:", error);
    } else {
      setSeasons(data || []);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchSeasons();
  }, []);

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

    // Supabase tb_season 테이블 컬럼 구조에 맞춰 데이터 전송
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
    ]);

    if (error) {
      console.error("Error inserting season:", error);
      alert(`등록 중 오류가 발생했습니다: ${error.message}`);
    } else {
      alert("시즌이 성공적으로 등록되었습니다!");
      fetchSeasons(); // 목록 새로고침
      setFormData({
        // 폼 초기화
        name: "",
        startDate: "",
        description: "",
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 tracking-tight">
          시즌 등록
        </h1>
        <p className="text-slate-500 mt-2 text-lg">
          새로운 시즌을 생성하고 일정을 관리하세요.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
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
              placeholder="예: 2024 봄 시즌"
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

          {/* 제출 버튼 */}
          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-sm hover:shadow transition-all active:scale-[0.98]"
            >
              시즌 등록하기
            </button>
          </div>
        </form>
      </div>

      {/* 등록된 시즌 목록 표시 영역 */}
      <div className="mt-12 bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        <h2 className="text-xl font-bold text-slate-800 mb-6">
          등록된 시즌 목록
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
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-700 font-medium border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3">번호</th>
                  <th className="px-4 py-3">이름</th>
                  <th className="px-4 py-3">시작일</th>
                  <th className="px-4 py-3">비고(설명)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {seasons.map((season, idx) => (
                  <tr
                    key={season.season_number || idx}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-4 py-3 font-medium text-slate-900">
                      {season.season_number}
                    </td>
                    <td className="px-4 py-3 text-slate-900">
                      {season.season_name || "-"}
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      {season.season_start_date
                        ? new Date(
                            season.season_start_date,
                          ).toLocaleDateString()
                        : "-"}
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      {season.remark || "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
