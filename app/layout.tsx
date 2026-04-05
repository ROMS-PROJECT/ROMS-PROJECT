import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

/**
 * RootLayout
 * ROMS 화면 레이아웃 구성
 */
export default function RootLayout({
  children, // childern이 page.tsx에 있는 내용을 가져온다 이런 의미레 그래서 밑에 {children} 해서 끌어땡겨온거고
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Header /> {/* 상단 header, nav 바*/}
        <main>
          {/* 실제 페이지 내용 */}
          실제 메인 내용
          {children}
        </main>
        <Footer /> {/* 하단바 부품 */}
      </body>
    </html>
  );
}
