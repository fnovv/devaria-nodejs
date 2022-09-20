const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const minhaPrimeiraConstanteSpring = 'Minha primeira constante';
console.log (minhaPrimeiraConstanteSpring);

let leituraDeCampo;
readline.question('Informe o seu nome: ', input => {
    leituraDeCampo = input; 
    console.log(`O nome do usuário é: ${leituraDeCampo}`);
    });