import Image from "next/image";

export default function FinalStep({ saldo }: { saldo: number }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 text-white bg-[#9B1454] min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Parabéns! 🎉</h1>
      <p className="text-lg mb-2">
        Você acumulou <span className="text-yellow-400 font-bold">R${saldo},00</span> de desconto!
      </p>

      <p className="mb-4 text-center">E ainda vai receber 3 bônus exclusivos:</p>

      <div className="grid gap-4 w-full max-w-md">
        <div className="bg-white text-[#9B1454] p-4 rounded-xl shadow">
          <strong>🎁 BÔNUS 1 — GUIA RESPIRATÓRIO</strong><br />
          Exercícios para melhorar a respiração e reduzir o cansaço.
        </div>
        <div className="bg-white text-[#9B1454] p-4 rounded-xl shadow">
          <strong>📘 BÔNUS 2 — EBOOK ESPECIAL</strong><br />
          Receitas naturais para fortalecer sua imunidade.
        </div>
        <div className="bg-white text-[#9B1454] p-4 rounded-xl shadow">
          <strong>💧 BÔNUS 3 — GUIA DE LAVAGEM NASAL</strong><br />
          Passo a passo com fotos pra evitar infecções respiratórias.
        </div>
      </div>

      <div className="my-6">
        <Image
          src="/bemlabs_fraco.png"
          alt="Bem+ Beta Imune"
          width={160}
          height={240}
          className="rounded-lg shadow-xl"
        />
      </div>

      <div className="flex flex-col gap-4 w-full max-w-md">
        <a
          href="https://bemlabs.com/check2/"
          className="bg-yellow-400 text-[#9B1454] font-bold py-3 px-6 rounded-xl text-center shadow hover:bg-yellow-300"
        >
          Quero o tratamento completo com todos os bônus
        </a>
        <a
          href="https://bemlabs.com/check2/"
          className="border border-white font-semibold py-3 px-6 rounded-xl text-center hover:bg-white hover:text-[#9B1454]"
        >
          Quero testar com 1 frasco agora
        </a>
      </div>
    </div>
  );
}
