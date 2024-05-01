//jantar

const temFome = prompt('Voce esta com fome? (sim/nao)')
const temDinheiro = prompt('Voce tem dinheiro? (sim/nao)')
const restauranteAberto = prompt('O restaurante esta aberto? (sim/nao)')

if (temFome === 'nao' || temDinheiro === 'nao') {
    console.log("Hoje a janta será em casa!");
}else if (temDinheiro === 'sim' && restauranteAberto === 'sim'){
    console.log('Hoje o jantar será no seu restaurante preferido!');
} else {
    console.log('Peça um delivery!');
}