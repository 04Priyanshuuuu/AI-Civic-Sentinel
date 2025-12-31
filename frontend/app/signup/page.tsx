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
      // Firebase Auth create user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const uid = userCredential.user.uid;

      // Firestore me extra info save
      await saveUserInfo(uid, { name, phone, location, email });

      alert("Signup successful 🎉");
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
          <Link href="/login">
            <button className="text-sm px-4 py-2 border rounded-md text-black hover:bg-blue-100">
              Login
            </button>
          </Link>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          <h2 className="text-2xl font-bold text-black text-center">
            Create Your Account
          </h2>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
              className="w-full border-2 border-blue-500 p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border-2 border-blue-500 p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Location"
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border-2 border-blue-500 p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
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
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border-2 border-blue-500 p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            onClick={handleSignup}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Signup
          </button>

          <p className="text-center text-black">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
