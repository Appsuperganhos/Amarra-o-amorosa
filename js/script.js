// Função para avançar a barra de progresso gradualmente
function advanceProgressBarGradually(targetPercent) {
    var progressBar = document.getElementById('progress-bar');
    var currentWidth = parseFloat(progressBar.style.width) || 0;
    var increment = 1; // Ajuste o incremento conforme necessário
    var interval = setInterval(function() {
        if (currentWidth < targetPercent) {
            currentWidth += increment;
            progressBar.style.width = currentWidth + '%';
        } else {
            clearInterval(interval);
        }
    }, 10); // Ajuste o intervalo conforme necessário para a velocidade do avanço
}

// Eventos de clique para as opções de gênero
document.getElementById('male').addEventListener('click', function() {
    document.getElementById('gender-selection').style.display = 'none';
    document.getElementById('age-selection').style.display = 'block';
    document.getElementById('progress-bar-container').style.display = 'block';
});

document.getElementById('female').addEventListener('click', function() {
    document.getElementById('gender-selection').style.display = 'none';
    document.getElementById('age-selection').style.display = 'block';
    document.getElementById('progress-bar-container').style.display = 'block';
});

// Evento de clique para as opções de idade
document.querySelectorAll('.age-options .option').forEach(function(option) {
    option.addEventListener('click', function() {
        document.getElementById('age-selection').style.display = 'none';
        document.getElementById('success-story').style.display = 'block';
        advanceProgressBarGradually(25); // Avança 25% da barra ao selecionar uma faixa etária
    });
});

// Evento de clique para o botão "Continuar" na seção de sucesso
document.getElementById('continue-to-results').addEventListener('click', function() {
    document.getElementById('success-story').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    advanceProgressBarGradually(50); // Avança 25% da barra ao clicar em "Continuar" na seção de sucesso
});

// Evento de clique para o botão "Continuar" na seção de resultados
document.getElementById('continue-final').addEventListener('click', function() {
    document.getElementById('results').style.display = 'none';
    document.getElementById('reasons').style.display = 'block';
    advanceProgressBarGradually(75); // Avança 25% da barra ao clicar em "Continuar" na seção de resultados
});

// Evento de clique para as opções na quinta seção
document.querySelectorAll('#reasons .option-button').forEach(function(option) {
    option.addEventListener('click', function() {
        document.getElementById('reasons').style.display = 'none';
        document.getElementById('relationship-profile').style.display = 'block';
        advanceProgressBarGradually(75); // Avança a barra de progresso até 75% gradualmente
    });
});
