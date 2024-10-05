import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "My Explorer App",
    template: "Explorer | %s"
  },
  description: "description of my explorer next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
