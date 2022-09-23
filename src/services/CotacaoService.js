module.exports = {
  cotarSeguro(bem, valor, quantidade_parcelas) {
    let porcentagem = 0.08;

    if(quantidade_parcelas <= 5){
      porcentagem = 0.06
    }

    else if(quantidade_parcelas <= 8){
      porcentagem = 0.07
    }
  
    return {
        bem: bem,
        valor_do_bem: valor,
        valor_total_seguro: (valor * porcentagem).toFixed(2),
        quantidade_parcelas: quantidade_parcelas,
        valor_parcela_seguro: ((valor * porcentagem)/quantidade_parcelas).toFixed(2)
    }
  }
}