let amigos = []
let nomeAmigo = document.getElementById('nome-amigo')
let mostraNome = document.getElementById('lista-amigos')
let sorteio = document.getElementById('lista-sorteio')

// Evento para executar a function adicionar apenas pressionando a tecla enter
nomeAmigo.addEventListener('keydown', function(e) {
    if (e.code === 'Enter') {
        adicionar()
    } 
})

function capializaPrimeiraLetra(nome){
        return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase()
}

//adicionar o amigo na lista
function adicionar() {
    //validacao do nome
    if (nomeAmigo.value === '') {
        alert('Por favor, insira um nome para adicionar ao sorteador!')
        return
    }

    if (amigos.includes(nomeAmigo.value)) {
        alert('Essa pessoa ja foi adicionada a lista!')
        nomeAmigo.value = ''
        return
    }

    amigos.push(capializaPrimeiraLetra(nomeAmigo.value))
    mostraNome.textContent = amigos.join(', ')
    nomeAmigo.value = ''
    nomeAmigo.focus()
}


//sortear os amigos que irão juntos
function sortear() {
    if (amigos.length < 4){
        alert('Insira no mínimo 4 participantes')
        return
    }
    let amigosParaEmbaralhar = [...amigos]
    const amigosEmbaralhados = embaralhar(amigosParaEmbaralhar)     
    
    for (let i = 0; i < amigosEmbaralhados.length; i++) {
        //mostrar o resultado do sorteio
        if (i == amigosEmbaralhados.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigosEmbaralhados[i] + ' --> ' + amigosEmbaralhados[0] + '<br>'
            
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigosEmbaralhados[i] + ' --> ' + amigosEmbaralhados[i + 1] + '<br>'
        }
    }
}

//embaralhar a lista de pessoas
function embaralhar(array) {
    
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
   }
   return array
}

//reiniciar o programa
function reiniciar() {
    amigos = []
    mostraNome.textContent = ''
    sorteio.innerHTML = ''
}