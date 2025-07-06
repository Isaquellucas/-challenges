//DESAFIO PARA MOSTRAR QUEM DEU DANO, ALVO, DANO

//entrada separada por: quem, acao, alvo, dano
const entrada = "Luna-atacar-Dragão-50";

//separando entre cada utilidade
const separacao = entrada.split ('-')

//objeto e function
const guerreiro = {
  nome: "Luna",
  atacar: function(alvo, dano) {
    return `${this.nome} atacou ${alvo} causando ${dano} de dano!`;
  }
};

//caso o nome seja "Theo"
const mago = {
  nome: "Theo"
};
//faz o resultado entre quem, ataque, alvo, dano
const persona = separacao[0] === "Luna" ? guerreiro : mago;
const resultado = guerreiro.atacar.apply(persona,[separacao[2], separacao[3]])

console.log (resultado)