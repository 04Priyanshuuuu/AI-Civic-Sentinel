export default function FeatureCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl p-7 shadow-xl hover:scale-[1.03] transition">
      <h3 className="text-lg font-bold text-blue-700 mb-2">{title}</h3>
      <p className="text-gray-700">{desc}</p>
    </div>
  );
}
