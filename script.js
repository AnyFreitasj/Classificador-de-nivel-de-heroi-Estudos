// Desafio Classificador de Nível de Herói

// Array de objetos para armazenar os heróis com seus nomes e XP
const herois = [
    { nome: "Link", xp: 950 },
    { nome: "Gandalf", xp: 1800 },
    { nome: "Aragorn", xp: 4500 },
    { nome: "Legolas", xp: 6200 },
    { nome: "Kratos", xp: 7500 },
    { nome: "Goku", xp: 8800 },
    { nome: "Voldemort", xp: 9900 },
    { nome: "Saitama", xp: 12000 },
];

// Seleciona o elemento HTML onde a lista de heróis será exibida
const heroListDiv = document.getElementById("hero-list");

// Loop para iterar sobre cada herói no array
for (let i = 0; i < herois.length; i++) {
    const nomeDoHeroi = herois[i].nome;
    const xpDoHeroi = herois[i].xp;
    let nivelDoHeroi;

    // Estrutura de decisão para classificar o nível do herói com base na XP
    if (xpDoHeroi <= 1000) {
        nivelDoHeroi = "Ferro";
    } else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
        nivelDoHeroi = "Bronze";
    } else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
        nivelDoHeroi = "Prata";
    } else if (xpDoHeroi >= 5001 && xpDoHeroi <= 7000) {
        nivelDoHeroi = "Ouro";
    } else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
        nivelDoHeroi = "Platina";
    } else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
        nivelDoHeroi = "Ascendente";
    } else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
        nivelDoHeroi = "Imortal";
    } else {
        nivelDoHeroi = "Radiante";
    }

    // Cria um novo elemento para exibir as informações do herói
    const heroInfoElement = document.createElement("div");
    heroInfoElement.className = "hero-info";

    // Define o conteúdo HTML do elemento com a mensagem formatada
    heroInfoElement.innerHTML = `
    <p>O Herói de nome <b>${nomeDoHeroi}</b> está no nível de <b>${nivelDoHeroi}</b></p>
  `;

    // Adiciona o novo elemento à div principal no HTML
    heroListDiv.appendChild(heroInfoElement);
}