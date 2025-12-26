"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  return (
    <nav className="sticky top-0 flex justify-between items-center px-8 py-4 bg-blue-100 shadow relative z-20">
      <h1 className="text-xl font-bold text-blue-600">
        AI Civic Sentinel
      </h1>

      <div className="flex items-center gap-3">
        <Link
          href="/dashboard"
          className="inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-blue-200 text-blue-600"
          aria-label="Profile"
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

        {!isLoginPage && (
          <Link
            href="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
