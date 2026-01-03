"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  return (
    <nav
      className="
        sticky top-0 z-50 mx-6 mt-4

        flex items-center justify-between
        px-8 py-4
        rounded-2xl
        bg-white/20
        backdrop-blur-xl
        border border-white/30
        shadow-[0_8px_30px_rgb(0,0,0,0.12)]
      "
    >
      {/* LOGO / TITLE */}
      <Link
        href="/"
        className="text-2xl font-extrabold tracking-tight text-blue-700 hover:text-blue-800 transition"
      >
        AI Civic Sentinel
      </Link>

      {/* RIGHT ACTIONS */}
      <div className="flex items-center gap-4">
        {/* Dashboard Icon */}
        <Link
          href="/dashboard"
          className="
            flex items-center justify-center
            w-11 h-11
            rounded-xl
            bg-white/40
            backdrop-blur-md
            text-blue-700
            hover:bg-blue-600 hover:text-white
            transition-all duration-300
            shadow-md
          "
          aria-label="Dashboard"
          title="Dashboard"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12zm0 2.2c-3.1 0-9.3 1.6-9.3 4.8V22h18.6v-2.9c0-3.2-6.2-4.9-9.3-4.9z" />
          </svg>
        </Link>

        {/* Login Button */}
        {!isLoginPage && (
          <Link
            href="/login"
            className="
              px-5 py-2.5
              rounded-xl
              bg-gradient-to-r from-blue-600 to-indigo-600
              text-white font-semibold
              hover:scale-105
              hover:shadow-xl
              transition-all duration-300
            "
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
