const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log ('Este programa irá verificar se você é maior de 18 anos e se você é habilitado para entrar no kart.');
console.log ('Além disso, irá verificar se você está confirmado para esse horário no kart.');

readline.question('Qual é o seu ano de nascimento?', ano => {
    if(ano > 2004){
        console.log("Você não tem 18 anos e não pode entrar no Kart");
    } else {
        readline.question ('Você tem habilitação? (Sim/Não)', temHabilitacao => {
            if(!(temHabilitacao.toLocaleUpperCase() === 'SIM')){
                console.log('Você tem 18 anos, mas não tem habilitação e não poderá entrar no Kart.');
            } else {
                readline.question ('Qual é o seu nome?', nome =>  {
                    switch(nome){
                        case 'Francisco' :
                            console.log('Francisco, bem vindo ao Kart!');
                            break;
                        case 'Junior' :
                            console.log('Junior, bem vindo ao Kart!');
                            break;
                        default:
                            console;log('Não tem uma reserva com o seu nome nesse horário');
                        }
                    })
                }
            })
        }
    })