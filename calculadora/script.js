
var screen = document.querySelector('#screen');
var memory = null;
        var btn = document.querySelectorAll('.btn');

        for (item of btn) {
            item.addEventListener('click', (e) => {
                btntext = e.target.innerText;

                if (btntext == '×') {
                    btntext = '*';
                }

                if (btntext == '÷') {
                    btntext = '/';
                }
                screen.value += btntext;
            });
        }

        function sin() {
            screen.value = Math.sin(screen.value);
        }

        function cos() {
            screen.value = Math.cos(screen.value);
        }

        function tan() {
            screen.value = Math.tan(screen.value);
        }

        function elevado() {
            screen.value = Math.pow(screen.value, 2);
        }

        function raiz() {
            screen.value = Math.sqrt(screen.value, 2);
        }

        function log() {
            screen.value = Math.log(screen.value);
        }

        function pi() {
            screen.value = 3.14159265359;
        }

        function e() {
            screen.value = 2.71828182846;
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
