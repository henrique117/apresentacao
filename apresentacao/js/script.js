const mario = document.querySelector('.mario')
const cano = document.querySelector('.cano')
const butao = document.querySelector('.butao')

var over = document.querySelector(".over")

var score = document.querySelector(".score")
var counter = 0
var gameOver = false

const jogar = () => {

    butao.setAttribute('disabled', '')

    const loop = setInterval(() => {

        const canoPos = cano.offsetLeft
        const squarePos = +window.getComputedStyle(mario).bottom.replace('px', '')
    
        if(canoPos <= 100 && canoPos > 0 && squarePos < 60) {
    
            cano.style.animation = 'none'
            mario.style.animation = 'none'
    
            cano.style.left = `${canoPos}px`
            mario.style.bottom = `${squarePos}px`
    
            mario.src = './images/game-over.png'
            mario.style.width = '47px'
            mario.style.height = '60px'
            mario.style.marginLeft = '50px'
    
            gameOver = true
    
        }
    
        if(!gameOver) {
            score.innerHTML = counter
            counter++
        } else {
            over.innerHTML = 'GAME OVER'
        }
    
    }, 80)

}

const dif1 = () => {
    cano.classList.remove('cano1')
    cano.classList.add('cano2')
}

const dif2 = () => {
    cano.classList.remove('cano2')
    cano.classList.add('cano3')
}

const dif3 = () => {
    cano.classList.remove('cano3')
    cano.classList.add('cano4')
}

const dif4 = () => {
    cano.classList.remove('cano4')
    cano.classList.add('cano5')
}

const dif5 = () => {
    cano.classList.remove('cano5')
    cano.classList.add('cano6')
}

const dif6 = () => {
    cano.classList.remove('cano6')
    cano.classList.add('cano7')
}

const jump = () => {

    mario.classList.add('jump')
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 700)

}

document.addEventListener('keydown', jump)