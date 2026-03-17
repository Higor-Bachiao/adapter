const SistemaPixExterno = require('./SistemaPixExterno');
const PixAdapter = require('./PixAdapter');

console.log("\n>>> TESTANDO O DESAFIO: PIX ADAPTER");
const apiPix = new SistemaPixExterno();
const pag3 = new PixAdapter(apiPix);

pag3.creditar(50.00);
