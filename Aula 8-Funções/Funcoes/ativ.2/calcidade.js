function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: "Maria",
    idade: 30,
};

const pessoa2 = {
    nome: "Joao",
    idade: 5,
};

const animal = {
    nome: "Nina",
    idade: 3,
};

console.log(calculaIdade.call(animal, 10))