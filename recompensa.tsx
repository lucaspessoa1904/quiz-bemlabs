interface Props {
  saldo: number;
  avancar: () => void;
}

export default function Recompensa({ saldo, avancar }: Props) {
  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h1>🎉 Parabéns!</h1>
      <p>Você acumulou <strong style={{ fontSize: 22 }}>R${saldo},00</strong> de desconto no tratamento!</p>

      <p style={{ marginTop: 20, fontWeight: "bold" }}>E ainda vai levar 3 bônus GRÁTIS:</p>

      <ul style={{ textAlign: "left", maxWidth: 400, margin: "0 auto", fontSize: 16 }}>
        <li>📘 <strong>GUIA RESPIRATÓRIO:</strong> exercícios para melhorar a respiração.</li>
        <li>🥗 <strong>EBOOK ESPECIAL:</strong> receitas para fortalecer sua imunidade sem farmácia.</li>
        <li>💧 <strong>GUIA DE LAVAGEM NASAL:</strong> passo a passo com fotos.</li>
      </ul>

      <div style={{ marginTop: 30 }}>
        <img
          src="bemlabs_fraco.png"
          alt="Frasco Bem+ Beta Imune"
          style={{ width: "180px", height: "auto" }}
        />
      </div>

      <p style={{ marginTop: 30 }}>
        <strong>Use seu desconto agora mesmo e receba tudo isso junto com o tratamento!</strong>
      </p>

      <button
        onClick={avancar}
        style={{
          marginTop: 20,
          backgroundColor: "#2e7d32",
          color: "white",
          padding: "12px 24px",
          fontSize: 18,
          borderRadius: 8,
          border: "none",
          cursor: "pointer"
        }}
      >
        Quero usar meu desconto
      </button>
    </div>
  );
}
