var screen = document.getElementById('screen');
var memory = null;
var btn = document.querySelectorAll('.btn');
var powerOn = true;

for (item of btn) {
    item.addEventListener('click', (e) => {
        if (!powerOn) return; // Verifica se a calculadora está ligada

        let btntext = e.target.innerText;

        if (btntext == '×') {
            btntext = '*';
        }

        if (btntext == '÷') {
            btntext = '/';
        }

        if (screen.value.length < 10) { // Limita o número de dígitos no visor
            screen.value += btntext;
        }
    });
}

function elevado() {
    let result = parseFloat(screen.value) ** 2;
    screen.value = formatResult(result); // Formata o resultado para 10 dígitos, incluindo o ponto decimal
}

function raiz() {
    let num = parseFloat(screen.value);

    if (num < 0) {
        screen.value = 'ERROR!';
        return;
    }

    let result = approximateSquareRoot(num, 10); // Aproximação para 10 dígitos após o ponto decimal
    screen.value = result.toString(); // Converte o resultado para string e exibe no visor
}

// Função para calcular uma aproximação da raiz quadrada com uma precisão especificada
function approximateSquareRoot(number, precision) {
    let guess = number / 2; // Começa com uma suposição inicial aproximada
    let square = guess * guess;

    // Loop para melhorar a precisão da suposição
    for (let i = 0; i < precision; i++) {
        guess = (guess + number / guess) / 2; // Fórmula de Newton-Raphson para raiz quadrada
    }

    return guess;
}

function formatResult(result) {
    let formatted = result.toFixed(10); // Limita para 10 dígitos após o ponto decimal
    return parseFloat(formatted).toString(); // Remove zeros desnecessários após o ponto decimal
}

function pi() {
    screen.value = 3.14159265;
}

function e() {
    screen.value = 2.71828182;
}

function apagar() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}

function storeMemory() {
    memory += parseFloat(screen.value); // Armazena o valor da tela convertido para um número
}

// Função para recuperar o valor da memória e exibi-lo na tela
function recallMemory() {
    if (memory !== null) {
        screen.value = memory; // Define o valor da tela como o valor armazenado na memória
    }
}

// Função para limpar a memória
function clearMemory() {
    memory = null; // Limpa o valor da memória
}

function subtractMemory() {
    if (memory !== null) {
        memory -= parseFloat(screen.value); // Subtrai o valor atual da tela do valor na memória
    }
}

function on() {
    powerOn = true; // Liga a calculadora
}

function off() {
    clearAll(); // Limpa tudo
    memory = 0; // Limpa a memória
    screen.value = 'OFF'; // Define o visor como "OFF"
    powerOn = false; // Desliga a calculadora
}
