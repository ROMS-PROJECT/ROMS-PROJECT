import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

/**
 * 한마디로 사이트 전체의 "공통 뼈대"
 * @param param0 @
 * @returns
 */
export default function RootLayout({
  children, // childern이 page.tsx에 있는 내용을 가져온다 이런 의미레 그래서 밑에 {children} 해서 끌어땡겨온거고
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main>
          {/* 실제 페이지 내용 */}
          {children}
        </main>
      </body>
    </html>
  );
}
