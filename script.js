function evaluarLogica() {
    const valor1 = parseInt(document.getElementById('valor1').value);
    const valor2 = parseInt(document.getElementById('valor2').value);
    const operador = document.getElementById('operador').value;
    let resultado;

    switch (operador) {
        case 'AND':
            resultado = valor1 & valor2;
            break;
        case 'OR':
            resultado = valor1 | valor2;
            break;
        case 'XOR':
            resultado = valor1 ^ valor2;
            break;
        default:
            resultado = 'Operador no válido';
    }

    const resultadoBooleano = resultado ? 'Verdadero' : 'Falso';

    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
    document.getElementById('resultadoBooleano').innerText = `Resultado lógico: ${resultadoBooleano}`;
}