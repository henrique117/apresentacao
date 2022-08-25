const mario = document.querySelector('.mario')
const cano = document.querySelector('.cano')
const butao = document.querySelector('.butao')

var over = document.querySelector(".over")
var copyright = document.querySelector(".copy")

var score = document.querySelector(".score")
var counter = 0
var gameOver = false
var tempo = 4000

const jogar = () => {

    butao.setAttribute('disabled', '')

    start()

    setTimeout(() => {

        const loop2 = setInterval(() => {

            if (!gameOver) {
                score.innerHTML = counter
                counter++
            }

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
    
                    over.innerHTML = 'GAME OVER'
                    copyright.innerHTML = '@henrique_moreira177'
    
                    return(gameOver)
            
                }
                    
                if (counter > 1) {
                    if (counter > 200 && counter < 400 && canoPos < -30) {
                        tempo = 3500
                        cano.style.animation = 'none'
                        cano.offsetHeight
                        cano.style.animation = null
                        cano.style.animationDuration = `${tempo}ms`
                    }
        
                    if (counter > 400 && counter < 600 && canoPos < -30) {
                        tempo = 3000
                        cano.style.animation = 'none'
                        cano.offsetHeight
                        cano.style.animation = null
                        cano.style.animationDuration = `${tempo}ms`
                    }
        
                    if (counter > 600 && counter < 800 && canoPos < -30) {
                        tempo = 2500
                        cano.style.animation = 'none'
                        cano.offsetHeight
                        cano.style.animation = null
                        cano.style.animationDuration = `${tempo}ms`
                    }
        
                    if (counter > 800 && counter < 1000 && canoPos < -30) {
                        tempo = 2000
                        cano.style.animation = 'none'
                        cano.offsetHeight
                        cano.style.animation = null
                        cano.style.animationDuration = `${tempo}ms`
                    }
        
                    if (counter > 1000 && counter < 1200 && canoPos < -30) {
                        tempo = 1500
                        cano.style.animation = 'none'
                        cano.offsetHeight
                        cano.style.animation = null
                        cano.style.animationDuration = `${tempo}ms`
                    }
        
                    if (counter > 1200 && counter < 1400 && canoPos < -30) {
                        tempo = 1000
                        cano.style.animation = 'none'
                        cano.offsetHeight
                        cano.style.animation = null
                        cano.style.animationDuration = `${tempo}ms`
                    }
        
                    if (counter > 1400 && counter < 1600 && canoPos < -30) {
                        tempo = 500
                        cano.style.animation = 'none'
                        cano.offsetHeight
                        cano.style.animation = null
                        cano.style.animationDuration = `${tempo}ms`
                    }
    
                    if (counter > 1600 && counter < 1800 && canoPos < -30) {
                        tempo = 300
                        cano.style.animation = 'none'
                        cano.offsetHeight
                        cano.style.animation = null
                        cano.style.animationDuration = `${tempo}ms`
                    }
    
                    if (counter > 1800 && counter < 2000 && canoPos < -30) {
                        tempo = 200
                        cano.style.animation = 'none'
                        cano.offsetHeight
                        cano.style.animation = null
                        cano.style.animationDuration = `${tempo}ms`
                    }
    
                }
            
            }, 5)

        }, 100)

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

const stop = () => {
    gameOver = true
}

const jump = () => {

    mario.classList.add('jump')
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 700)

}

document.addEventListener('keydown', jump)