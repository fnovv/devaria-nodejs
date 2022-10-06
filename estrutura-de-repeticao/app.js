console.log(process.argv.slice(2));

const ListaArgs = process.argv.slice(2);

console.log(`----------- Exercício de FOR -----------`);
for(let controladorFor = 0; controladorFor < ListaArgs.length; controladorFor++){
    console.log(`Posição: ${controladorFor}, Valor da lista: ${ListaArgs[controladorFor]}`);
}

console.log(`---------- Exercício de WHILE ----------`);
let controladorWhile = 0;
while(controladorWhile < ListaArgs.length){
    console.log(`Posição: ${controladorWhile}, Valor da lista: ${ListaArgs[controladorWhile]}`);
    controladorWhile++;
}

console.log(`---------- Exercícico de DO WHILE ----------`);
let controladorDoWhile = 0;
do{
    console.log(`Posição: ${controladorDoWhile} Valor da lista: ${ListaArgs[controladorDoWhile]}`);
    controladorDoWhile++
} while(
    controladorDoWhile < ListaArgs.length
)

console.log(`---------- Exercício de FOR OF ----------`)
let controladorForOf = 0;
for (const argumento of ListaArgs) {
    console.log(`Posição: ${controladorForOf}, Valor da lista: ${argumento}`);
    controladorForOf++;
}



