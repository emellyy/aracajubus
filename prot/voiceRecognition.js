// Arquivo: voiceRecognition.js

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition;

if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.lang = 'pt-BR';
    recognition.continuous = true; // Ativa o reconhecimento de voz contínuo
    recognition.interimResults = false; // Aceita apenas resultados finais

    // Inicia o reconhecimento de voz
    function startVoiceRecognition() {
        if (recognition) {
            recognition.start();
        }
    }

    // Processa os comandos de voz
    recognition.onresult = function(event) {
        const command = event.results[0][0].transcript.toLowerCase();
        console.log("Comando recebido: ", command);
        
        // Verifica os comandos
        if (command.includes("onde eu quero ir")) {
            window.location.href = "linhas.html"; // Redireciona para linhas
        } else if (command.includes("linhas")) {
            window.location.href = "linhas.html"; // Redireciona para linhas
        } else if (command.includes("horários")) {
            window.location.href = "horarios.html"; // Redireciona para horários
        } else {
            alert("Comando não reconhecido. Por favor, diga 'onde eu quero ir', 'linhas' ou 'horários'.");
        }
    };

    // Reinicia o reconhecimento de voz caso pare
    recognition.onend = function() {
        console.log("Reconhecimento de voz parado. Reiniciando...");
        startVoiceRecognition();
    };

    // Inicia automaticamente o reconhecimento de voz e toca o efeito sonoro
    window.onload = function() {
        playSoundEffect(); // Toca o efeito sonoro ao carregar a página
        startVoiceRecognition(); // Inicia o reconhecimento de voz contínuo
    };

} else {
    alert("Seu navegador não suporta reconhecimento de voz.");
}

// Função para tocar o efeito sonoro
function playSoundEffect() {
    const effect = new Audio('start-13691.mp3'); // Caminho do efeito sonoro
    effect.play();
}
