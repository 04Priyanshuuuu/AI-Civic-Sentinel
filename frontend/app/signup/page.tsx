"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import { saveUserInfo } from "@/src/services/saveUser";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const uid = userCredential.user.uid;
      await saveUserInfo(uid, { name, phone, location, email });

      alert("Signup successful 🎉");
      router.push("/");
    } catch (err) {
      alert(err instanceof Error ? err.message : "An error occurred");
    }
  };

  return (
    <main className="h-screen overflow-hidden flex items-center justify-center px-4 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      
      {/* Glass Card */}
      <div className="w-full max-w-xl max-h-[90vh] overflow-hidden backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/30 bg-white/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold">
              AI
            </div>
            <span className="font-bold text-gray-900">
              AI Civic Sentinel
            </span>
          </div>

          <Link href="/login">
            <button className="text-sm px-4 py-2 rounded-lg bg-white/40 hover:bg-white/60 border border-white/30">
              Login
            </button>
          </Link>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <h2 className="text-2xl font-bold text-center text-gray-900">
            Create Account 🚀
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
              className="glass-input"
            />
            <input
              type="text"
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
              className="glass-input"
            />
            <input
              type="text"
              placeholder="Location"
              onChange={(e) => setLocation(e.target.value)}
              className="glass-input sm:col-span-2"
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="glass-input sm:col-span-2"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="glass-input"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="glass-input"
            />
          </div>

          <button
            onClick={handleSignup}
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg transition"
          >
            Signup
          </button>

          <p className="text-center text-gray-800 text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* Global Glass Input Style */}
      <style jsx global>{`
        .glass-input {
          width: 100%;
          padding: 12px 14px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.4);
          color: #111827;
          backdrop-filter: blur(10px);
          outline: none;
        }

        .glass-input::placeholder {
          color: #4b5563;
        }

        .glass-input:focus {
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
        }
      `}</style>
    </main>
  );
}
