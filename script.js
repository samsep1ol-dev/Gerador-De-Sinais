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
    const linkUrl = "https://www.tigervip2.com/?id=528078088&currency=BRL&type=2";
    const linkText = "Clique aqui para JOGAR e ganhar!";
    const ahref = `<a href="${linkUrl}" target="_blank">${linkText}</a>`;
    
    const msg = `
✅] ENTRADA CONFIRMADA!

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
            alert('✅ Sinal Expirado.');
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
