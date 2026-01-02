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

      // ✅ redirect to home
      router.push("/");
    } catch (err) {
      alert(err instanceof Error ? err.message : "An error occurred");
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-8">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-blue-500">
        
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-blue-500">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              AI
            </div>
            <span className="font-bold text-black text-lg">
              AI Civic Sentinel
            </span>
          </div>

          <Link href="/signup">
            <button className="text-sm px-4 py-2 border rounded-md text-black hover:bg-blue-100">
              Signup
            </button>
          </Link>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          <h2 className="text-2xl font-bold text-black text-center">
            Welcome Back
          </h2>

          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-2 border-blue-500 p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-2 border-blue-500 p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Login
          </button>

          <p className="text-center text-black">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-blue-600 font-semibold">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
