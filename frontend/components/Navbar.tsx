import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
      <h1 className="text-xl font-bold text-blue-600">
        AI Civic Sentinel
      </h1>
      <Link
        href="/login"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Login
      </Link>
    </nav>
  );
}
