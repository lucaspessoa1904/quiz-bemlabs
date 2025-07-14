import { useState } from "react";
import StepPergunta from "./StepPergunta";
import StepEducativo from "./StepEducativo";
import Recompensa from "./recompensa";
import FinalStep from "./FinalStep";

export default function App() {
  const [etapa, setEtapa] = useState(1);
  const [saldo, setSaldo] = useState(0);

  const avancar = (bonus = 0) => {
    setSaldo(s => s + bonus);
    setEtapa(e => e + 1);
  };

  return (
    <div style={{ padding: 20 }}>
      {etapa === 1 && <StepPergunta avancar={avancar} />}
      {etapa === 2 && <StepEducativo avancar={avancar} />}
      {etapa === 3 && <Recompensa saldo={saldo} avancar={avancar} />}
      {etapa === 4 && <FinalStep />}
    </div>
  );
}
