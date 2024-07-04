const elementos = document.querySelectorAll('.opção-jogador div > img')
let Opjogador = ''
let Opcomputador = ''
const modo = document.querySelector('dialog')

function abrir() {
    const button = document.querySelector('#abrir')
    modo.show()
}
function fechar() {
    const fechar = document.querySelector('#fechar')
    modo.close()
}



function resetarOpacidade() {
    for (let i= 0; i < elementos.length; i++) {
         elementos[i].style.opacity = 0.3;
    }
}

function resetarComputador(EsqComputador) {
    for(i = 0; i< EsqComputador.length; i++){
        EsqComputador[i].style.opacity = 0.3;
    }
}

function validação() {
    let vencedor = document.querySelector('#resultado')
    if(Opjogador == Opcomputador){
        vencedor.innerHTML = "EMPATE"
        vencedor.style.color = ''
    }else{
        if (Opjogador == 'pedra') {
            if (Opcomputador == 'lagarto' || Opcomputador == 'tesoura') {
                vencedor.innerHTML = "PARABÉNS,VOCÊ GANHOU!"
                vencedor.style.color = 'green'
                
             
            }else{
                vencedor.innerHTML = "VITÓRIA DO COMPUTADOR"
                vencedor.style.color = '#a11316'
            }
        }
        else if(Opjogador == 'papel'){
            if (Opcomputador == 'pedra' || Opcomputador == 'spock') {
                vencedor.innerHTML = "PARABÉNS,VOCÊ GANHOU!"
                vencedor.style.color = 'green'
            }else{
                vencedor.innerHTML = "VITÓRIA DO COMPUTADOR"
                vencedor.style.color = '#a11316'
            }
        }
        else if(Opjogador == 'tesoura'){
            if (Opcomputador == 'papel' || Opcomputador == 'lagarto')  {
                vencedor.innerHTML = "PARABÉNS,VOCÊ GANHOU!"
                vencedor.style.color = 'green'
            }else{
                vencedor.innerHTML = "VITÓRIA DO COMPUTADOR"
                vencedor.style.color = '#a11316'
            }
        }
        else if(Opjogador == 'lagarto'){
            if (Opcomputador == 'papel' || Opcomputador == 'spock') {
                vencedor.innerHTML = "PARABÉNS,VOCÊ GANHOU!"
                vencedor.style.color = 'green'
            }else{
                vencedor.innerHTML = "VITÓRIA DO COMPUTADOR"
                vencedor.style.color ='#a11316'
            }
        }
        else if(Opjogador == 'spock'){
            if (Opcomputador == 'tesoura' || Opcomputador == 'pedra') {
                vencedor.innerHTML = "PARABÉNS,VOCÊ GANHOU!"
                vencedor.style.color = 'green'
            }else{
                vencedor.innerHTML = "VITÓRIA DO COMPUTADOR"
                vencedor.style.color = '#a11316'
            }
        }
    }
}

function ComputadorJogar() {
    let rand = Math.floor(Math.random()* 5)
    const EsqComputador = document.querySelectorAll('.opção-computador div > img')
    resetarComputador(EsqComputador)
    for (let i = 0; i < EsqComputador.length; i++) {
        if (rand == i) {
            EsqComputador[i].style.opacity = 1
            Opcomputador = EsqComputador[i].getAttribute('opt')
        }
        
    }
}
for (let i=0; i < elementos.length; i++) {
    elementos[i].addEventListener('click', function(t){
        resetarOpacidade();
        ComputadorJogar()
        validação()
        t.target.style.opacity = 1
        Opjogador = t.target.getAttribute('opt')
    })




}