
function novoElemento(container, elemento){
    container.appendChild(elemento.node);
    elemento.posiciona();
}

let gameContainer = document.querySelector("#game-container");
let tamanho = {};
    tamanho.width = gameContainer.offsetWidth / 50;
    tamanho.height = gameContainer.offsetHeight / 50;

    
let jogador = new Node({ x: getRandomInteger(0, 49), y: getRandomInteger(0, 49) }, tamanho, 'player');
novoElemento(gameContainer, jogador);

let criaInimigos = function(){
    for (let i = 0; i < 1; i++) {
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

criaInimigos();


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