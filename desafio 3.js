//DESAFIO PARA MOSTRAR DE ACORDO COM O LEVEL A CLASSE

//jogadores e o level deles
const jogadores = [
  { nome: "Luna", nivel: 150 },
  { nome: "Theo", nivel: 600 },
  { nome: "Maya", nivel: 80 }
];

//mapeia os jogadores para transformar nas classes
const a = jogadores.map ((jogador) => {
  if (jogador.nivel < 100) {
  nivel = "iniciante";
} else if (jogador.nivel <= 500) {
  nivel = "intermediário";
} else {
  nivel = "avançado";
}
//retorna o resultado dos jogadores, o level e as classes 
 return {
    nome: jogador.nome,
    xp: jogador.nivel,
    nivel: nivel
  };

})

console.log (a)