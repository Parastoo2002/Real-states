// layout.tsx
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

export const metadata = {
  title: 'Real Estate',
  description: 'A real estate website built with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-1">
          <Sidebar />
          <div className="w-4/5 p-4 bg-white">{children}</div> {/* محتوای اصلی */}
        </main>
        <Footer />
      </body>
    </html>
  );
}
