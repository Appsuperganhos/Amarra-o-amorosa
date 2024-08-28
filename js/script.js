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
        advanceProgressBar(); // Avança 10% da barra quando a oitava seção é ocultada e a nona seção aparece
    });
});

// Evento de clique para o botão "Continuar" na nona seção
document.getElementById('continue-to-final').addEventListener('click', function() {
    document.getElementById('ninth-section').style.display = 'none';
    document.getElementById('recurring-thoughts').style.display = 'block';
    advanceProgressBar(); // Avança 10% da barra ao clicar em "Continuar" na nona seção
});

// Evento de clique para as opções da décima primeira seção
document.querySelectorAll('#recurring-thoughts .option-button').forEach(function(button) {
    button.addEventListener('click', function() {
        document.getElementById('recurring-thoughts').style.display = 'none'; // Oculta a décima primeira seção
        document.getElementById('negative-energies').style.display = 'block'; // Exibe a décima segunda seção
        advanceProgressBar(); // Avança 10% da barra de progresso
    });
});

// Evento de clique para as opções na décima segunda seção
document.querySelectorAll('#negative-energies .option-button').forEach(function(button) {
    button.addEventListener('click', function() {
        document.getElementById('negative-energies').style.display = 'none'; // Oculta a décima segunda seção
        document.getElementById('future-desired').style.display = 'block'; // Exibe a décima terceira seção
        advanceProgressBar(5); // Avança 5% da barra de progresso
    });
});

// Função para iniciar a barra de progresso de cálculo de chance de reconquista
function startChanceProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    const progressWrapper = document.querySelector('.progress-wrapper');
    const chanceText = document.getElementById('chance-text');
    const animatedProgress = document.getElementById('animated-progress');
    
    // Inicia a animação da barra de progresso
    setTimeout(() => {
        progressBar.style.width = '100%';
    }, 100); // Atraso para garantir que a animação seja visível

    // Oculta a barra de progresso e mostra o resultado
    setTimeout(() => {
        progressWrapper.style.display = 'none'; // Oculta a barra de progresso
        animatedProgress.style.display = 'block'; // Exibe o retângulo vermelho com a barra de progresso animada
    }, 5100); // Tempo para a barra de progresso atingir 100% (5 segundos + 100ms)
}

// Evento de clique para a décima terceira seção (cálculo de chance de reconquista)
document.getElementById('calculate-chance').addEventListener('click', function() {
    document.getElementById('future-desired').style.display = 'none'; // Oculta a décima terceira seção
    document.getElementById('chance-calculation').style.display = 'block'; // Exibe a seção de cálculo de chance
    startChanceProgressBar(); // Inicia a barra de progresso
});
