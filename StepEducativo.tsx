export default function StepEducativo({ texto, onNext }: { texto: string; onNext: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#9B1454] text-white p-4">
      <div className="max-w-md text-center text-lg leading-relaxed mb-6">
        {texto}
      </div>
      <button
        onClick={onNext}
        className="bg-yellow-400 text-[#9B1454] font-bold px-6 py-3 rounded-xl shadow hover:bg-yellow-300 transition"
      >
        Próxima
      </button>
    </div>
  );
}
