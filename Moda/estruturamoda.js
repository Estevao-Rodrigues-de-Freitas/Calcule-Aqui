function calcularmoda() {
    let numerosInput = document.getElementById("numeros").value;
    let separador = document.getElementById("separador").value;
    let numerosArray = numerosInput.split(separador).map(num => parseFloat(num.trim())).filter(num => !isNaN(num));

    if (!separador){
        alert("Defina Um Separador");
        return;
    }

    if (numerosArray.length === 0) {
        alert("Insira Números");
        return;
    }

    if (numerosArray.length === 0) {
        document.getElementById("resultado").innerText = "Entrada Inválida";
        document.getElementById("calculoo").innerText = "";
        return;
    }

    let frequencia = {};
    let maxFreq = 0;
    let modes = [];
    let steps = `Números Inseridos: ${numerosArray.join(", ")}\n\n`;

    numerosArray.forEach(num => {
        frequencia[num] = (frequencia[num] || 0) + 1;
        steps += `Numero ${num} Agora tem Frequência ${frequencia[num]}\n`;

        if (frequencia[num] > maxFreq) {
            maxFreq = frequencia[num];
            modes = [num];
        } else if (frequencia[num] === maxFreq) {
            if (!modes.includes(num)) modes.push(num);
        }
    });

    steps += `\nFrequências Finais:\n`;
    Object.keys(frequencia).forEach(num => {
        steps += `Numero ${num}: ${frequencia[num]} Vezes\n`
    });

    if (modes.length === numerosArray.length) {
        steps += `\nTodos os Números Aparecem com a Mesma Frequência. Não há Moda.`;
        document.getElementById("resultado").innerText = "Sem Moda";
    } else {
        steps += `\nModa(s): ${modes.join(", ")} (Maior Frequência: ${maxFreq})`;
        document.getElementById("resultado").innerText = modes.join(", ");
    }

    document.getElementById("calculoo").innerText = steps;
}

function copiarResultado() {
    let resultadotexto = document.getElementById("resultado").innerText;
    navigator.clipboard.writeText(resultadotexto).then(() => {
        alert("Resultado Copiado");
    }).catch(err => {
        alert("Erro ao Copiar" + err);
    });
}