// 1. ESTA É A CLASSE EXTERNA FORNECIDA PELO BANCO (NÃO PODE SER ALTERADA)
class SistemaPixExterno {
  executarCobrancaInstantanea(valorInformado) {
    console.log("PIX: Verificando chaves e enviando R$ " + valorInformado);
  }
}

module.exports = SistemaPixExterno;
