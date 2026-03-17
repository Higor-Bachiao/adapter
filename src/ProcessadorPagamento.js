// Interface / classe base do seu sistema
class ProcessadorPagamento {
  creditar(valor) {
    throw new Error('Método creditar deve ser implementado por subclasses');
  }
}

module.exports = ProcessadorPagamento;
