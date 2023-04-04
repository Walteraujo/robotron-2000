const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach ( (elemento) => {
	//no click o manipulaDados vai ser acionado
	elemento.addEventListener ("click", (evento) => {
		manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
		atualizaEstatisticas(evento.target.dataset.peca)
	})

})



//operacao é o que foi clicado, nesse caso ele procura um sinal de "-" ou "+" no HTML
function manipulaDados(operacao, controle) {

	//toda vez que clicar no "controle", vai buscar quem é o "controle-contador" e vai add ou sub um item

	const peca = controle.querySelector ("[data-contador]")

	if (operacao === "-") {
		peca.value = parseInt (peca.value) - 1
	}
	 else {
			peca.value = parseInt (peca.value) + 1
		}
}


function atualizaEstatisticas (peca) {
	console.log(peca)

//Ao clicar em cada elemento irá atuaçizar o textContent + o elemento do valor da posição do elemento
	estatistica.forEach ( (elemento) => {
	 elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
	})
	
}