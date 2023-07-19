function setBackgroundGradient(a, b) {
    body.style.background = 'linear-gradient(to right,' + a + ',' + b + ')'
    colorInfo.innerText = 'background: '+body.style.background+';'
}

function setGradient() {
    color1code = color1.value;
    color2code = color2.value;
    setBackgroundGradient(color1code, color2code)
}

function randomColorGenerator(event) {
    if (event.target.classList.contains('randColor')) {
        var randColor = Math.floor(Math.random() * 1000000)
        if(event.target.classList.contains('randColor1')){
            color1code = '#'+randColor
            console.log(color1code)
            console.log(event)
            event.target.style.background = color1code
            setBackgroundGradient(color1code,color2code)
        }
        if(event.target.classList.contains('randColor2')){
            color2code = '#'+randColor
            console.log(color2code)
            event.target.style.background = color2code
            setBackgroundGradient(color1code,color2code)
        }
    }
}

var body = document.getElementById('body')
var color1 = document.getElementById('color1')
var color2 = document.getElementById('color2')
var colorInfo = document.getElementById('colorInfo')
var btnRandColor = document.querySelectorAll('button')
var color1code = color1.value;
var color2code = color2.value;
setBackgroundGradient(color1code, color2code);

btnRandColor.forEach(function (cv) {
    console.log(cv)
    cv.addEventListener('click',randomColorGenerator)
})
color1.addEventListener('input', setGradient)
color2.addEventListener('input', setGradient)