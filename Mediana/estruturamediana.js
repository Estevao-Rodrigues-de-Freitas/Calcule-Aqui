function calculamediana() {
    let input = document.getElementById("numeros").value;
    let separador = document.getElementById("separador").value;
    let numeros = input.split(separador).map(num => parseFloat(num.trim())).filter(num => !isNaN(num));

    if (!separador) {
        alert("Defina um Separador");
        return;
    }

    if (numeros.length === 0) {
        alert("Entrada Inválida");
        return;
    }

    let steps = `Números Inseridos: ${input}\n`;

    numeros.sort((a, b) => a - b);
    steps += `Ordenando: ${numeros.join(", ")}\n`;

    let mid = Math.floor(numeros.length / 2);
    let median;

    if (numeros.length % 2 !== 0) {
        median = numeros[mid];
        steps += `Números de Elementos é Ímpar. Mediana é o Valor Central: ${median}`;
    } else {
        median = (numeros[mid - 1] + numeros[mid]) / 2;
        steps += `Números de Elementos é Par. Mediana: (${numeros[mid - 1]} + ${numeros[mid]}) / 2 = ${median}`;
    }

    document.getElementById("resultado").innerText = Number.isInteger(median) ? Math.round(median) : median;
    document.getElementById("calcular").innerText = steps;
}

function copiarResultado() {
    let resultadoText = document.getElementById("resultado").innerText;
    if (resultadoText) {
        navigator.clipboard.writeText(resultadoText).then(() => {
            alert("Resultado Copiado");
        }).catch(() => {
            alert("Erro ao Copiar o Resultado");
        })
    } else {
        alert("Nenhum Resultado para Copiar");
    }
}