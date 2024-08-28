// Função para avançar a barra de progresso gradualmente em 10%
function advanceProgressBar() {
    var progressBar = document.getElementById('progress-bar');
    var currentWidth = parseFloat(progressBar.style.width) || 0;
    var targetPercent = currentWidth + 10; // Avança 10% a cada vez
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
        advanceProgressBar(); // Avança 10% da barra ao selecionar uma faixa etária
    });
});

// Evento de clique para o botão "Continuar" na seção de sucesso
document.getElementById('continue-to-results').addEventListener('click', function() {
    document.getElementById('success-story').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    advanceProgressBar(); // Avança 10% da barra ao clicar em "Continuar"
});

// Evento de clique para o botão "Continuar" na seção de resultados
document.getElementById('continue-final').addEventListener('click', function() {
    document.getElementById('results').style.display = 'none';
    document.getElementById('reasons').style.display = 'block';
    advanceProgressBar(); // Avança 10% da barra ao clicar em "Continuar"
});

// Evento de clique para as opções na quinta seção
document.querySelectorAll('#reasons .option-button').forEach(function(option) {
    option.addEventListener('click', function() {
        document.getElementById('reasons').style.display = 'none';
        document.getElementById('relationship-profile').style.display = 'block';
        advanceProgressBar(); // Avança 10% da barra ao clicar em qualquer botão na seção de motivos
    });
});

// Evento de clique para as opções de resposta na sexta seção
document.querySelectorAll('#relationship-profile .option-button').forEach(function(button) {
    button.addEventListener('click', function() {
        document.getElementById('relationship-profile').style.display = 'none';
        document.getElementById('relationship-improvements').style.display = 'block'; // Atualize o ID da próxima seção para a sétima seção
        advanceProgressBar(); // Avança 10% da barra ao selecionar uma opção
    });
});

// Evento de clique para as opções na sétima seção
document.querySelectorAll('#relationship-improvements .option-button').forEach(function(button) {
    button.addEventListener('click', function() {
        document.getElementById('relationship-improvements').style.display = 'none'; // Oculta a sétima seção
        document.getElementById('previous-attempts').style.display = 'block'; // Exibe a oitava seção
        advanceProgressBar(); // Avança 10% da barra ao selecionar uma opção
    });
});

// Evento de clique para as opções na oitava seção
document.querySelectorAll('#previous-attempts .option-button').forEach(function(button) {
    button.addEventListener('click', function() {
        document.getElementById('previous-attempts').style.display = 'none'; // Oculta a oitava seção
        document.getElementById('ninth-section').style.display = 'block'; // Mostra a nona seção
        advanceProgressBar(); // Avança 10% da barra ao selecionar uma opção
    });
});
