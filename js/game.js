
let gameContainer = document.querySelector("#game-container");
let tamanho = {};
    tamanho.width = gameContainer.offsetWidth / 50;
    tamanho.height = gameContainer.offsetHeight / 50;

let posicao = {
    x: getRandomInteger(0, 49),
    y: getRandomInteger(0, 49)
}


let jogador = new Node(posicao, tamanho, 'player');

gameContainer.appendChild(jogador.node)
jogador.posiciona()



document.onkeydown = function (e) {
    let direcao = ''
    switch (e.which) {
        case 38:
            direcao = 'norte';
            break;
        case 40:
            direcao = 'sul';
            break;
        case 37:
            direcao = 'oeste';
            break;
        case 39:
            direcao = 'leste';
            break;
        default:
            break;
    }

    if (direcao == '') {
        return
    }
    jogador.move(direcao)
}