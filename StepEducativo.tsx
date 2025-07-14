interface Props {
  avancar: (bonus: number) => void;
}

export default function StepEducativo({ avancar }: Props) {
  return (
    <div>
      <h2>Você sabia?</h2>
      <p>A fórmula com beta-glucana ajuda a reduzir até 90% das crises respiratórias em até 90 dias!</p>
      <p>Ela equilibra sua imunidade e é aprovada pela Anvisa.</p>
      <button onClick={() => avancar(10)}>Avançar</button>
    </div>
  );
}
