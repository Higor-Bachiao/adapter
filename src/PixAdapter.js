const ProcessadorPagamento = require('./ProcessadorPagamento');

// Adaptador que permite usar a API externa dentro do nosso ProcessadorPagamento
class PixAdapter extends ProcessadorPagamento {
  constructor(apiPixExterno) {
    super();
    this.apiPixExterno = apiPixExterno;
  }

  creditar(valor) {
    // Traduz a chamada do nosso sistema para a chamada da API externa
    this.apiPixExterno.executarCobrancaInstantanea(valor);
  }
}

module.exports = PixAdapter;
