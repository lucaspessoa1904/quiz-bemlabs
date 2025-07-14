interface Props {
  saldo: number;
  avancar: () => void;
}

export default function Recompensa({ saldo, avancar }: Props) {
  return (
    <div>
      <h1>🎉 Parabéns!</h1>
      <p>Você acumulou <strong>R${saldo},00</strong> de desconto!</p>
      <p>E ainda vai receber 3 bônus exclusivos:</p>
      <ul>
        <li>🎁 <strong>GUIA RESPIRATÓRIO</strong> – Exercícios para melhorar a respiração.</li>
        <li>📘 <strong>EBOOK ESPECIAL</strong> – Receitas para fortalecer a imunidade.</li>
        <li>💧 <strong>GUIA DE LAVAGEM NASAL</strong> – Passo a passo com fotos.</li>
      </ul>
      <img src="/public/bemlabs_fraco.png" alt="Bem+ Beta Imune" style={{ maxWidth: 200 }} />
      <br />
      <button onClick={avancar}>Quero usar meu desconto</button>
    </div>
  );
}
