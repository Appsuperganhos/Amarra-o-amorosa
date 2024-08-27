// Função para avançar a barra de progresso em uma porcentagem específica
function advanceProgressBar(percent) {
    var progressBar = document.getElementById('progress-bar');
    var currentWidth = parseFloat(progressBar.style.width) || 0;
    progressBar.style.width = Math.min(currentWidth + percent, 100) + '%'; // Garante que a barra não ultrapasse 100%
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
        advanceProgressBar(25); // Avança 25% da barra ao selecionar uma faixa etária
    });
});

// Evento de clique para o botão "Continuar" na seção de sucesso
document.getElementById('continue-to-results').addEventListener('click', function() {
    document.getElementById('success-story').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    advanceProgressBar(25); // Avança 25% da barra ao clicar em "Continuar"
});

// Evento de clique para o botão "Continuar" na seção de resultados
document.getElementById('continue-final').addEventListener('click', function() {
    document.getElementById('results').style.display = 'none';
    document.getElementById('relationship-profile').style.display = 'block';
    advanceProgressBar(25); // Avança 25% da barra ao clicar em "Continuar"
});

// Eventos de clique para as opções de perfil de relacionamento
document.querySelectorAll('.relationship-profile .option-button').forEach(function(button) {
    button.addEventListener('click', function() {
        document.getElementById('relationship-profile').style.display = 'none';
        document.getElementById('final-section').style.display = 'block';
        advanceProgressBar(25); // Avança 25% da barra ao selecionar um perfil de relacionamento
    });
});

// Evento de clique para o botão "Continuar" na última seção
document.getElementById('final-button').addEventListener('click', function() {
    advanceProgressBar(25); // Avança 25% da barra ao clicar em "Continuar" na última seção
});
