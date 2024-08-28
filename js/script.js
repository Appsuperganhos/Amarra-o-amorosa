// Função para avançar a barra de progresso gradualmente
function advanceProgressBar(percent) {
    var progressBar = document.getElementById('progress-bar');
    var currentWidth = parseFloat(progressBar.style.width) || 0;
    var targetPercent = currentWidth + (percent || 10); // Usa o parâmetro ou avança 10% por padrão
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

// Função para exibir a próxima seção e ocultar a seção atual
function showSection(currentSectionId, nextSectionId) {
    document.getElementById(currentSectionId).style.display = 'none';
    document.getElementById(nextSectionId).style.display = 'block';
    advanceProgressBar(); // Avança 10% da barra ao trocar de seção
}

// Eventos de clique para as opções de gênero
document.getElementById('male').addEventListener('click', function() {
    showSection('gender-selection', 'age-selection');
    document.getElementById('progress-bar-container').style.display = 'block';
});

document.getElementById('female').addEventListener('click', function() {
    showSection('gender-selection', 'age-selection');
    document.getElementById('progress-bar-container').style.display = 'block';
});

// Evento de clique para as opções de idade
document.querySelectorAll('.age-options .option').forEach(function(option) {
    option.addEventListener('click', function() {
        showSection('age-selection', 'success-story');
    });
});

// Evento de clique para o botão "Continuar" na seção de sucesso
document.getElementById('continue-to-results').addEventListener('click', function() {
    showSection('success-story', 'results');
});

// Evento de clique para o botão "Continuar" na seção de resultados
document.getElementById('continue-final').addEventListener('click', function() {
    showSection('results', 'reasons');
});

// Evento de clique para as opções na seção de motivos
document.querySelectorAll('#reasons .option-button').forEach(function(option) {
    option.addEventListener('click', function() {
        showSection('reasons', 'relationship-profile');
    });
});

// Evento de clique para as opções na seção de perfil de relacionamento
document.querySelectorAll('#relationship-profile .option-button').forEach(function(button) {
    button.addEventListener('click', function() {
        showSection('relationship-profile', 'relationship-improvements');
    });
});

// Evento de clique para as opções na seção de melhorias no relacionamento
document.querySelectorAll('#relationship-improvements .option-button').forEach(function(button) {
    button.addEventListener('click', function() {
        showSection('relationship-improvements', 'previous-attempts');
    });
});

// Evento de clique para as opções na seção de tentativas anteriores
document.querySelectorAll('#previous-attempts .option-button').forEach(function(button) {
    button.addEventListener('click', function() {
        showSection('previous-attempts', 'emotionality');
    });
});

// Evento de clique para o botão "Continuar" na seção emocionalidade
document.getElementById('continue-to-final').addEventListener('click', function() {
    showSection('emotionality', 'bad-energies');
});

// Evento de clique para as opções na seção de energias ruins
document.querySelectorAll('#bad-energies .option-button').forEach(function(button) {
    button.addEventListener('click', function() {
        showSection('bad-energies', 'recurring-thoughts');
    });
});

// Evento de clique para as opções na seção de pensamentos recorrentes
document.querySelectorAll('#recurring-thoughts .option-button').forEach(function(button) {
    button.addEventListener('click', function() {
        showSection('recurring-thoughts', 'calculating-chance');
        // Inicia a barra de progresso para a chance de reconquista
        startReconquestProgressBar();
    });
});

// Função para iniciar a barra de progresso da décima quarta seção
function startReconquestProgressBar() {
    const progressBar = document.getElementById('chance-progress-bar');
    let width = 0;
    const interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);
            document.getElementById('calculating-text').style.display = 'none';
            document.getElementById('high-chance').style.display = 'block';
        } else {
            width += 5; // Ajuste o incremento conforme necessário
            progressBar.style.width = width + '%';
        }
    }, 100); // Ajuste o tempo conforme necessário
}
