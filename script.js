/**
 * Função pura para cálculo - Organização e Reuso
 */
function calcularTotalSementes(area, preco) {
    return area * preco;
}

/**
 * Função principal que interage com o HTML (DOM)
 */
function iniciarSistema() {
    // Captura os valores
    const areaInput = document.getElementById("area").value;
    const precoInput = document.getElementById("preco").value;
    const campoResultado = document.getElementById("resultado");
    const containerResultado = document.getElementById("resultado-container");

    // Validação simples
    if (areaInput <= 0 || precoInput <= 0) {
        alert("Por favor, insira valores válidos!");
        return;
    }

    // Uso da função separada
    const total = calcularTotalSementes(areaInput, precoInput);

    // Exibe o resultado com formatação
    campoResultado.innerText = `R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
    
    // Mostra o container escondido
    containerResultado.classList.remove("hidden");

    // Lógica extra: Feedback de valor alto
    if (total > 1000) {
        console.log("Alerta: Investimento de grande porte detectado.");
    }
}