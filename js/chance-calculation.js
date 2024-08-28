// chance-calculation.js

// Função para avançar a barra de progresso gradualmente
function advanceProgressBar(percent) {
    var progressBar = document.querySelector('.progress-bar');
    var currentWidth = parseFloat(progressBar.style.width) || 0;
    var targetPercent = Math.min(currentWidth + (percent || 10), 100); // Garante que a largura não ultrapasse 100%
    var increment = 1; // Ajuste o incremento conforme necessário
    var interval = setInterval(function() {
        if (currentWidth < targetPercent) {
            currentWidth += increment;
            progressBar.style.width = currentWidth + '%';
        } else {
            clearInterval(interval);
            if (currentWidth >= 100) {
                // Exibir a mensagem final quando a barra de progresso atingir 100%
                document.querySelector('.result-message').style.display = 'block';
                document.querySelector('.progress-container').style.display = 'none';
                document.querySelector('.result-bar').style.width = '100%';
            }
        }
    }, 10); // Ajuste o intervalo conforme necessário para a velocidade do avanço
}

// Função para iniciar a nova seção
function startChanceCalculationSection() {
    // Ocultar a décima terceira seção e exibir a décima quarta seção
    document.getElementById('future-desired').style.display = 'none';
    document.getElementById('chance-calculation').style.display = 'block';
    
    // Iniciar a barra de progresso
    advanceProgressBar(100); // Ajuste conforme necessário para a progressão
}

// Adicionar um evento para iniciar a nova seção (ajuste conforme a necessidade do seu fluxo)
document.addEventListener('DOMContentLoaded', function() {
    // Você pode chamar startChanceCalculationSection() em um momento apropriado do seu fluxo
    // Por exemplo, quando a décima terceira seção é concluída
    startChanceCalculationSection();
});
