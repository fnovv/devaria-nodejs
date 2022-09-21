const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
    
})

const validarNumeroInformado =(numero) => {
    const resultado = Number.parseFloat(numero);
    if (!resultado){
        console.log('O número informado é inválido.');
    }
    return resultado
}

const validarOperador = (operador) => {
    switch(operador) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
            return operador;
        default: 
            console.log('O operador informado não é válido');
            return null;
    }
}

readline.question('Informe um número:', (numero1) => {
    const numeroValidado1 = validarNumeroInformado(numero1);

    if(numeroValidado1){
        readline.question('Informe outro número: ', (numero2) => {
            const numeroValidado2 = validarNumeroInformado(numero2);

            if(numeroValidado2){
                readline.question('Informe um operador: ', (operador) => {
                    const operadorValido = validarOperador(operador);

                    if(operadorValido){
                    switch(operadorValido){
                        case '+': console.log(`O resultado da adição dos números: ${numeroValidado1} + ${numeroValidado2} é: ${numeroValidado1 + numeroValidado2}`);
                            break;
                        case '-': console.log(`O resultado da subtração dos números: ${numeroValidado1} - ${numeroValidado2} é: ${numeroValidado1 - numeroValidado2}`);
                            break;
                        case '*': console.log(`O resultado da multiplicação dos números: ${numeroValidado1} * ${numeroValidado2} é: ${numeroValidado1 * numeroValidado2}`);
                            break;
                        case '/': console.log(`O resultado da divisão dos números: ${numeroValidado1} / ${numeroValidado2} é: ${numeroValidado1 / numeroValidado2}`);
                            break;
                        case '%': console.log(`O resultado da módulo dos números: ${numeroValidado1} % ${numeroValidado2} é: ${numeroValidado1 % numeroValidado2}`);
                        break;
                        default: break;
                    }}
                })
            }
        });
    }
})