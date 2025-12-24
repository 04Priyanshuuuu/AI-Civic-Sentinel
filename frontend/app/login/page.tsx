export default function LoginPage() {
  return (
    <main className="flex justify-center items-center h-[80vh]">
      <div className="bg-white p-8 rounded-xl shadow w-96 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Sign in to Report Issues
        </h2>
        <button className="bg-blue-600 text-white w-full py-3 rounded-lg">
          Continue with Google
        </button>
        <p className="text-sm text-gray-500 mt-3">
          Secured by Firebase Authentication
        </p>
      </div>
    </main>
  );
}
