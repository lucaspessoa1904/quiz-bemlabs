export function gerarRecompensaAleatoria() {
  const valores = [5, 10, 15];
  const index = Math.floor(Math.random() * valores.length);
  return valores[index];
}
