let tempoRestante;

function gerarSinal() {
    const resultados = Array.from({ length: 25 }, (_, i) => i + 1);
    const aposta = getRandomSample(resultados, 5);
    
    const dc = {};
    for (let i = 1; i <= 25; i++) {
        dc[i] = aposta.includes(i) ? '💎' : '🟦';
    }

    const bb = getRandomInt(3, 5);
    const tt = getRandomInt(3, 5);
    tempoRestante = 30;
   
    const nh = new Date(Date.now() + tempoRestante * 1000);
    const nhStr = nh.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const linkUrl = "https://9f.com/r/j6p47Xia";
    const linkText = "Clique aqui para JOGAR e ganhar!";
    const ahref = `<a href="${linkUrl}" target="_blank">${linkText}</a>`;
    
    const msg = `
<svg class="w-6 h-6 text-gray-800 dark:text-white" style="color:#7CFC00	;" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"/>
 <span> | ENTRADA CONFIRMADA! </span>
  </svg>
Aposte com: ${bb} 💣
<hr>

${dc[1]} ${dc[2]} ${dc[3]} ${dc[4]} ${dc[5]}
${dc[6]} ${dc[7]} ${dc[8]} ${dc[9]} ${dc[10]}
${dc[11]} ${dc[12]} ${dc[13]} ${dc[14]} ${dc[15]}
${dc[16]} ${dc[17]} ${dc[18]} ${dc[19]} ${dc[20]}
${dc[21]} ${dc[22]} ${dc[23]} ${dc[24]} ${dc[25]}

<hr> 
⏰ Válido até: ${nhStr} / 🎯 Tentativas: ${tt}x
⏳ Tempo: ${tempoRestante} segundos
🖥 ${ahref}
`;

    document.getElementById('resultado').innerHTML = msg;
    iniciarTemporizador();
}

function iniciarTemporizador() {
    const resultadoElement = document.getElementById('resultado');
    const temporizadorIntervalo = setInterval(() => {
        tempoRestante--;
        resultadoElement.innerHTML = resultadoElement.innerHTML.replace(/Tempo: \d+ segundos/, `Tempo: ${tempoRestante} segundos`);
        
        if (tempoRestante <= 0) {
            clearInterval(temporizadorIntervalo);
            
        }
    }, 1000);
}

function iniciarGeracaoAutomatica() {
    gerarSinal();
    setInterval(gerarSinal, 30000);
}

function getRandomSample(arr, size) {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, size);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

iniciarGeracaoAutomatica();
