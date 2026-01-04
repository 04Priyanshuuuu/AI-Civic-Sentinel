"use client";

export default function ContactSection() {
  return (
    <section
      className="
        relative py-32
        bg-[url('/images/contact.png')]
        bg-cover bg-center bg-no-repeat
        overflow-hidden
      "
    >
      {/* White overlay for readability */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-0" />

      {/* Background blur blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse z-0" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-30 animate-pulse z-0" />

      {/* CONTENT */}
      <div className="relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Have a question, feedback, or partnership idea?  
            We’d love to hear from you.
          </p>
        </div>

        {/* Form Card */}
        <div className="max-w-2xl mx-auto px-6">
          <div
            className="
              bg-white/80 backdrop-blur-xl
              border border-white/60
              rounded-3xl
              shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]
              p-10
              transition-all duration-500
              hover:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.25)]
            "
          >
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="
                    w-full px-4 py-3 rounded-xl
                    border border-slate-200
                    bg-white
                    text-slate-800
                    placeholder-slate-400
                    focus:outline-none
                    focus:ring-2 focus:ring-blue-500
                    focus:border-blue-500
                    transition
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="
                    w-full px-4 py-3 rounded-xl
                    border border-slate-200
                    bg-white
                    text-slate-800
                    placeholder-slate-400
                    focus:outline-none
                    focus:ring-2 focus:ring-blue-500
                    focus:border-blue-500
                    transition
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us how we can help you..."
                  className="
                    w-full px-4 py-3 rounded-xl
                    border border-slate-200
                    bg-white
                    text-slate-800
                    placeholder-slate-400
                    focus:outline-none
                    focus:ring-2 focus:ring-blue-500
                    focus:border-blue-500
                    transition resize-none
                  "
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="
                  w-full py-3 rounded-xl
                  bg-gradient-to-r from-blue-600 to-indigo-600
                  text-white font-semibold text-lg
                  transition-all duration-300
                  hover:scale-[1.02]
                  hover:shadow-xl
                  active:scale-[0.97]
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
