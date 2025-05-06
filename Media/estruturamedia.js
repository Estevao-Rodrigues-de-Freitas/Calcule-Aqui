function calcularMedia() {
    let separador = document.getElementById("separador").value;
    let numerosTexto = document.getElementById("numeros").value;

    if (!separador) {
        alert("Defina um Separador");
        return;
    }

    try {
        let numeros = numerosTexto.split(separador).map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
        if (numeros.length === 0) throw new Error("Nenhum Número Válido foi Escolhido");

        let detalhes = "Passo a passo da soma:\n";
        let soma = 0;
        numeros.forEach((num, index) => {
            if(index === 0) {
                soma = num;
                detalhes += `${num}\n`;
            } else {
                detalhes += `${soma} + ${num} = ${soma + num}\n`;
                soma += num;
            }
        });

        detalhes += `\nDivisão detalhada:\n`;
        detalhes += ` ${soma} | ${numeros.length}\n`;
        detalhes += `-${(Math.floor(soma / numeros.length) * numeros.length)} |--\n`;
        detalhes += ` ${soma % numeros.length}`;

        let media = soma / numeros.length;
        let resultadoFormatado = Number.isInteger(media) ? media.toFixed(0) : media.toFixed(2);

        detalhes += `\n\nResultado Final: ${resultadoFormatado}`;

        document.getElementById("resultado").innerText = resultadoFormatado;
        document.getElementById("detalhes").innerText = detalhes; 
    } catch (error) {
        alert("Adicione Números.");
    }  
}

function copiarResultado() {
    let texto = document.getElementById("resultado").innerText;
    if (texto) {
        navigator.clipboard.writeText(texto).then(() => {
            alert("Resultado Copiado");
        }).catch(() => {
            alert("Erro ao Copiar o Resultado");
        });
    } else {
        alert("Nenhum Resultado para Copiar");
    }
}