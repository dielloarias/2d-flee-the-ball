function Node(posicao, tamanho, tipo) {
    this.x = posicao.x;
    this.y = posicao.y;
    this.tamanho = tamanho;

    this.node = document.createElement("div");
    this.node.style.height = tamanho.height + 'px';
    this.node.style.width  = tamanho.width + 'px';
    this.node.classList.add(tipo);

    this.posicaoAtual = function () {
        let posicao = "x: " + this.x + " y: " + this.y;
        return posicao;
    }

    this.posiciona = function () {
        if (this.node.parentElement == null) {
            return;
        }

        let parentHeight = this.node.parentElement.offsetHeight;
        let parentWidth = this.node.parentElement.offsetWidth;
        let playerHeight = this.node.offsetHeight;
        let playerWidth = this.node.offsetWidth;

        let posY = ((parentHeight / playerHeight) - (this.y + 1)) * playerHeight;
        let posX = this.x * playerWidth;

        if (posY < 0 || posY > parentHeight - playerHeight) {
            return false;
        }

        if (posX < 0 || posX > parentWidth - playerWidth) {
            return false;
        }

        this.node.style.top = posY + 'px';
        this.node.style.left = posX + 'px';

        return true;
    }

    this.move = function (direcao) {

        let originalX = this.x;
        let originalY = this.y;

        switch (direcao) {
            case 'norte':
                this.y = this.y + 1;
                break;

            case 'sul':
                this.y = this.y - 1;
                break;

            case 'leste':
                this.x = this.x + 1;
                break;

            case 'oeste':
                this.x = this.x - 1;
                break;

            default:
                break;
        }
        let podePosicionar = this.posiciona();

        if (!podePosicionar) {
            this.x = originalX;
            this.y = originalY;
        }
        console.log(this.posicaoAtual())
    }

}