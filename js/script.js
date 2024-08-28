// Função para avançar a barra de progresso em uma porcentagem específica
function advanceProgressBar(percent) {
    var progressBar = document.getElementById('progress-bar');
    var currentWidth = parseFloat(progressBar.style.width) || 0;
    progressBar.style.width = (currentWidth + percent) + '%';
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
    document.getElementById('reasons').style.display = 'block';
    advanceProgressBar(25); // Avança 25% da barra ao clicar em "Continuar"
});

// Evento de clique para o botão "Continuar" na última seção (opcional)
document.getElementById('final-button').addEventListener('click', function() {
    advanceProgressBar(25); // Avança 25% da barra ao clicar em "Continuar" na última seção
});

// Evento de clique para as opções na nova seção de perfil de relacionamento
document.querySelectorAll('#relationship-profile .option-button').forEach(function(option) {
    option.addEventListener('click', function() {
        document.getElementById('relationship-profile').style.display = 'none';
        // Substitua 'next-section-id' pelo ID da próxima seção
        document.getElementById('next-section-id').style.display = 'block';
        advanceProgressBar(25); // Avança 25% da barra ao selecionar uma opção
});
