import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bgDark from "../assets/bg-dark.png";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background image */}
      <div className="fixed inset-0 -z-10">
        <img
          src={bgDark}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <Navbar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
