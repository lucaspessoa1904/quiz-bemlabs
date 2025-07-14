import { gerarRecompensaAleatoria } from "../utils/recompensa";

export default function StepPergunta({
  pergunta,
  opcoes,
  onResponder,
}: {
  pergunta: string;
  opcoes: string[];
  onResponder: (valor: number) => void;
}) {
  const handleClick = () => {
    const valor = gerarRecompensaAleatoria();
    onResponder(valor);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#9B1454] text-white p-4">
      <h2 className="text-xl font-bold mb-4 text-center">{pergunta}</h2>
      <div className="flex flex-col gap-3 w-full max-w-md">
        {opcoes.map((op, i) => (
          <button
            key={i}
            onClick={handleClick}
            className="bg-white text-[#9B1454] font-semibold py-3 px-4 rounded-xl shadow hover:bg-yellow-100 transition"
          >
            {op}
          </button>
        ))}
      </div>
    </div>
  );
}
