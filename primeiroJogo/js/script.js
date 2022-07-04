
const quadrado = document.querySelector('.quadrado')
const cano = document.querySelector('.cano')

const jump = () => {
    quadrado.classList.add('jump')
    setTimeout(() => {
        quadrado.classList.remove('jump')
    }, 700)
}

const loop = setInterval(() => {
    const canoPos = cano.offsetLeft
    
}, 10)

document.addEventListener('keydown', jump)