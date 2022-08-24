const mario = document.querySelector('.mario')
const cano = document.querySelector('.cano')
const butao = document.querySelector('.butao')

var over = document.querySelector(".over")
var copyright = document.querySelector(".copy")

var score = document.querySelector(".score")
var counter = 0
var gameOver = false
var tempo = 4

const jogar = () => {

    butao.setAttribute('disabled', '')

    start()

    setTimeout(() => {
        const loop = setInterval(() => {

            const canoPos = cano.offsetLeft
            const squarePos = +window.getComputedStyle(mario).bottom.replace('px', '')
        
            if (canoPos <= 400 && canoPos > 330 && squarePos < 60) {
        
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
        
            if (!gameOver) {
                score.innerHTML = counter
                counter++
            } else {
                over.innerHTML = 'GAME OVER'
                copyright.innerHTML = '@henrique_moreira177'
            }
    
            if (counter > 1) {
                if (counter > 200 && counter < 400 && canoPos < -30) {
                    tempo = 3.5
                    cano.style.animation = 'none'
                    cano.offsetHeight
                    cano.style.animation = null
                    cano.style.animationDuration = `${tempo}s`
                }
    
                if (counter > 400 && counter < 600 && canoPos < -30) {
                    tempo = 3
                    cano.style.animation = 'none'
                    cano.offsetHeight
                    cano.style.animation = null
                    cano.style.animationDuration = `${tempo}s`
                }
    
                if (counter > 600 && counter < 800 && canoPos < -30) {
                    tempo = 2.5
                    cano.style.animation = 'none'
                    cano.offsetHeight
                    cano.style.animation = null
                    cano.style.animationDuration = `${tempo}s`
                }
    
                if (counter > 800 && counter < 1000 && canoPos < -30) {
                    tempo = 2
                    cano.style.animation = 'none'
                    cano.offsetHeight
                    cano.style.animation = null
                    cano.style.animationDuration = `${tempo}s`
                }
    
                if (counter > 1000 && counter < 1200 && canoPos < -30) {
                    tempo = 1.5
                    cano.style.animation = 'none'
                    cano.offsetHeight
                    cano.style.animation = null
                    cano.style.animationDuration = `${tempo}s`
                }
    
                if (counter > 1200 && counter < 1400 && canoPos < -30) {
                    tempo = 1
                    cano.style.animation = 'none'
                    cano.offsetHeight
                    cano.style.animation = null
                    cano.style.animationDuration = `${tempo}s`
                }
    
                if (counter > 1400 && counter < 1600 && canoPos < -30) {
                    tempo = 0.5
                    cano.style.animation = 'none'
                    cano.offsetHeight
                    cano.style.animation = null
                    cano.style.animationDuration = `${tempo}s`
                }
            }
        
        }, 50)
    }, 2000)

}

const start = () => {
    cano.style.removeProperty('right')
    cano.style.animation = "tubinho 4s infinite linear"
    mario.style.removeProperty('left')
    mario.style.animation = "start 1s 1"
    setTimeout(() => {
        mario.style.left = "300px"
        mario.style.removeProperty('animation')
    }, 1000)
}

const jump = () => {

    mario.classList.add('jump')
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 700)

}

document.addEventListener('keydown', jump)