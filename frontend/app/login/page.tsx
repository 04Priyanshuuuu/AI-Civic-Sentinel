"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful 🎉");
      router.push("/");
    } catch (err) {
      alert(err instanceof Error ? err.message : "An error occurred");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      
      {/* Glass Card */}
      <div className="w-full max-w-xl backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-white/30 bg-white/30">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md">
              AI
            </div>
            <span className="font-bold text-gray-900 text-lg">
              AI Civic Sentinel
            </span>
          </div>

          <Link href="/signup">
            <button className="text-sm px-4 py-2 rounded-lg border border-white/40 bg-white/30 text-gray-900 hover:bg-white/50 transition">
              Signup
            </button>
          </Link>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Welcome Back 👋
          </h2>

          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/40 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-md"
            />

            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/40 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-md"
            />
          </div>

          <button
            onClick={handleLogin}
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg shadow-lg transition"
          >
            Login
          </button>

          <p className="text-center text-gray-800">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-blue-600 font-semibold hover:underline">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
