import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "AI Civic Sentinel",
  description: "AI-powered civic issue reporting",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
