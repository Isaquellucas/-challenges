//DESAFIO PARA MOSTRAR QUEM ESTA PRONTO PARA BATALHAR

//obejto com todos os jogadores
const jogadores = [
  { nome: "Luna", energia: 80 },
  { nome: "Theo", energia: 30 },
  { nome: "Gael", energia: 60 }
];

//filtra quem está pronto 
const prontos = jogadores
.filter((j) => j.energia > 50)
.map ((j) => ( `O jogador ${j.nome} está pronto para a batalha!`));

console.log (prontos)