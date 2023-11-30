class heroi{
    constructor(nome, idade, tipo){
      this.nome = nome
      this.idade = idade
      this.tipo = tipo
  }
    atacar(){
      let ataque = ""
  
      if (this.tipo === "mago") {
        ataque = "magia";
      } else if (this.tipo === "guerreiro") {
        ataque = "espada";
      } else if (this.tipo === "monge") {
        ataque = "artes marciais";
      } else if (this.tipo === "ninja") {
        ataque = "shuriken";
      } else {
        ataque = 'usou um ataque indefinido';
      }
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
     }
    }
    let heroiA = new heroi("Gustavo", 35, "monge")
    heroiA.atacar()
    let heroiB = new heroi("Allan", 25, "guerreiro")
    heroiB.atacar()
    let heroiC = new heroi("Marcelo", 42, "mago")
    heroiC.atacar()
    let heroiD = new heroi("Adriano", 38, "ninja")
    heroiD.atacar()