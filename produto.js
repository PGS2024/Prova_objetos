class Produto {
    constructor(nome, preço, categoria) {
        this.nome = nome;
        this.preço = preço;
        this.categoria = categoria;
    }
    // método da classe = ação 
    apresentar() {
        console.log(`Indefinido ${this.nome}`)
    }

}