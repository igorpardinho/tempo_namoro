const dataInicio = new Date('2024-01-01T01:30:00'); // Substitua pela data de início do relacionamento
const atualizarContador = () => {
    const agora = new Date();
    const tempoJunto = Math.floor((agora - dataInicio) / (1000 * 60 * 60)); // Converte milissegundos para horas
    document.getElementById('contador').textContent = tempoJunto;
};

atualizarContador(); // Atualiza imediatamente
setInterval(atualizarContador, 1000 * 60); // Atualiza a cada minuto
