function calcular(operacion) {
    // Recoger los valores de los inputs
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    let resultado;

    // Verificar que los números no estén vacíos
    if (isNaN(numero1) || isNaN(numero2)) {
        document.getElementById("resultado").textContent = "Por favor, introduce ambos números.";
        return;
    }

    // Realizar la operación según el botón presionado
    switch (operacion) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            if (numero2 === 0) {
                document.getElementById("resultado").textContent = "Error: División por cero.";
                return;
            }
            resultado = numero1 / numero2;
            break;
        default:
            resultado = "Operación no válida";
    }

    // Mostrar el resultado en la página
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}