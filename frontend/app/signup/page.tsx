// "use client";

// import { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";
// import { auth, db } from "../../firebase"; // path firebase.ts ke hisaab se
// import Image from "next/image";

// export default function SignupPage() {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [location, setLocation] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleSignup = async () => {
//     if (password !== confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     try {
//       // Firebase Auth create user
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const user = userCredential.user;

//       // Firestore me extra info save
//       await setDoc(doc(db, "users", user.uid), {
//         name,
//         phone,
//         location,
//         email,
//       });

//       alert("Signup successful 🎉");
//     } catch (err: any) {
//       alert(err.message);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 flex items-center justify-center px-4">
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden">
//         {/* Header */}
//         <div className="flex items-center justify-between px-6 py-4 border-b">
//           <div className="flex items-center gap-2">
//             <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
//               AI
//             </div>
//             <span className="font-semibold text-gray-800">AI Civic Sentinel</span>
//           </div>
//           <button className="text-sm px-3 py-1 border rounded-md text-gray-700 hover:bg-gray-50">
//             Signup
//           </button>
//         </div>

//         {/* Content */}
//         <div className="p-6 space-y-5">
//           <h2 className="text-xl font-bold text-gray-900">Welcome! 👋</h2>

//           <div className="bg-gray-50 rounded-xl p-4 space-y-4">
//             <h3 className="font-semibold text-gray-800">Create your account</h3>

//             {/* Signup Form */}
//             <input
//               type="text"
//               placeholder="Full Name"
//               onChange={(e) => setName(e.target.value)}
//               className="w-full border p-2 mb-3 rounded"
//             />
//             <input
//               type="text"
//               placeholder="Phone Number"
//               onChange={(e) => setPhone(e.target.value)}
//               className="w-full border p-2 mb-3 rounded"
//             />
//             <input
//               type="text"
//               placeholder="Location"
//               onChange={(e) => setLocation(e.target.value)}
//               className="w-full border p-2 mb-3 rounded"
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full border p-2 mb-3 rounded"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full border p-2 mb-3 rounded"
//             />
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className="w-full border p-2 mb-3 rounded"
//             />

//             <button
//               onClick={handleSignup}
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
//             >
//               Signup
//             </button>

//             {/* Image Preview */}
//             <div className="rounded-xl overflow-hidden border">
//               <Image
//                 src="/pothole.jpg"
//                 alt="Issue"
//                 width={500}
//                 height={300}
//                 className="object-cover"
//               />
//             </div>

//             {/* Upload area */}
//             <div className="border-2 border-dashed rounded-lg py-4 text-center text-sm text-gray-600 cursor-pointer hover:bg-gray-100">
//               🌈 Drag & drop photos, or{" "}
//               <span className="text-blue-600 font-semibold"> Browse </span>
//             </div>

//             {/* AI Button */}
//             <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
//               Analyze with AI
//             </button>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }





// "use client";

// import { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase";
// import Image from "next/image";
// import Link from "next/link";

// export default function SignupPage() {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [location, setLocation] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleSignup = async () => {
//     if (password !== confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       alert("Signup successful 🎉");
//       // Backend code will handle saving extra info
//     } catch (err: any) {
//       alert(err.message);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-gray-100 flex items-center justify-center px-8">
//       <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-blue-500">
//         {/* Header */}
//         <div className="flex items-center justify-between px-8 py-5 border-b border-blue-500">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
//               AI
//             </div>
//             <span className="font-bold text-black text-lg">AI Civic Sentinel</span>
//           </div>
//           <Link href="/login">
//             <button className="text-sm px-4 py-2 border rounded-md text-black hover:bg-blue-100">
//               Login
//             </button>
//           </Link>
//         </div>

//         {/* Content */}
//         <div className="p-8 space-y-6">
//           <h2 className="text-2xl font-bold text-black text-center">Create Your Account</h2>

//           <div className="space-y-4">
//             <input
//               type="text"
//               placeholder="Full Name"
//               onChange={(e) => setName(e.target.value)}
//               className="w-full border-2 border-blue-500 p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <input
//               type="text"
//               placeholder="Phone Number"
//               onChange={(e) => setPhone(e.target.value)}
//               className="w-full border-2 border-blue-500 p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <input
//               type="text"
//               placeholder="Location"
//               onChange={(e) => setLocation(e.target.value)}
//               className="w-full border-2 border-blue-500 p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full border-2 border-blue-500 p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full border-2 border-blue-500 p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className="w-full border-2 border-blue-500 p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           <button
//             onClick={handleSignup}
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
//           >
//             Signup
//           </button>

//           <p className="text-center text-black">
//             Already have an account?{" "}
//             <Link href="/login" className="text-blue-600 font-semibold">
//               Login
//             </Link>
//           </p>
//         </div>
//       </div>
//     </main>
//   );
// }


"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import { saveUserInfo } from "./../../backend/saveUser";
import Image from "next/image";
import Link from "next/link";

export default function SignupPage() {
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
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;

      // Firestore me extra info save
      await saveUserInfo(uid, { name, phone, location, email });

      alert("Signup successful 🎉");
    } catch (err: any) {
      alert(err.message);
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
            <span className="font-bold text-black text-lg">AI Civic Sentinel</span>
          </div>
          <Link href="/login">
            <button className="text-sm px-4 py-2 border rounded-md text-black hover:bg-blue-100">
              Login
            </button>
          </Link>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          <h2 className="text-2xl font-bold text-black text-center">Create Your Account</h2>

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

