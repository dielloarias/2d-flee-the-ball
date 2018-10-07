
function novoElemento(container, elemento){
    container.appendChild(elemento.node);
    elemento.posiciona();
}

function criaInimigos(gameContainer, jogador, quantidade){
    
    if (quantidade == undefined) {
        quantidade = 1;
    }
    
    for (let i = 0; i < quantidade; i++) {
        let x = getRandomInteger(0, 49);
        let y = getRandomInteger(0, 49);
        while ((x == jogador.x) && (y == jogador.y)) {
            x = getRandomInteger(0, 49);
            y = getRandomInteger(0, 49);
        }

        let posicao = {
            x: x,
            y: y
        }
        let inimigo = new Node(posicao, jogador.tamanho, 'enemy')
        novoElemento(gameContainer, inimigo);
    }
}

let gameContainer = document.querySelector("#game-container");
let containerSize = {};
    containerSize.width = gameContainer.offsetWidth / 50;
    containerSize.height = gameContainer.offsetHeight / 50;

    
let playerSize = { x: getRandomInteger(0, 49), y: getRandomInteger(0, 49) };
let jogador = new Node(playerSize, containerSize, 'player');

novoElemento(gameContainer, jogador);

criaInimigos(gameContainer, jogador);


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