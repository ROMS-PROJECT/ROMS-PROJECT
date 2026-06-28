import React from "react";

// 가장 바깥쪽 테이블을 감싸는 컨테이너
export function Table({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableElement>) {
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200">
      <table className={`w-full text-sm ${className || ""}`} {...props} />
    </div>
  );
}

// 테이블의 머리(제목) 부분
export function TableHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead
      className={`bg-slate-50 border-b border-slate-200 divide-x divide-slate-200 ${className || ""}`}
      {...props}
    />
  );
}

// 테이블의 몸통(내용) 부분
export function TableBody({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <tbody
      className={`divide-y divide-slate-200 text-center ${className || ""}`}
      {...props}
    />
  );
}

// 테이블의 가로 한 줄(행)
export function TableRow({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr
      className={`transition-colors divide-x divide-slate-200 ${className || ""}`}
      {...props}
    />
  );
}

// 테이블 머리 부분의 각 칸(셀)
export function TableHead({
  className,
  ...props
}: React.ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      className={`px-1 py-1 font-semibold text-slate-600 text-center ${className || ""}`}
      {...props}
    />
  );
}

// 테이블 몸통 부분의 각 칸(셀)
export function TableCell({
  className,
  ...props
}: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td className={`px-1 py-1 text-slate-600 ${className || ""}`} {...props} />
  );
}
