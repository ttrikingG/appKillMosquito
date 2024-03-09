var height = 0
var width = 0
var life = 1
var time = 10
var createMosquitoTime = 1500

var level = window.location.search
level = level.replace('?', '')

var createMosquitoTime = level === 'easy' ? 1500 : level === 'medium' ? 1000 : level === 'hard' ? 750 : 1500;

function adjustScreen()
{
    height = window.innerHeight
    width = window.innerWidth
    
    console.log(width, height)
}

adjustScreen()
var stopwath = setInterval(function() {
    time -= 1

    time < 0 ? (clearInterval(stopwath), clearInterval(createMosquito), window.location.href = 'winner.html') : 
    document.getElementById('stopwath').innerHTML = time;

}, 1000);

function randomPosition()
{
    //remover mosquito se existir
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        life > 3 ? window.location.href = 'game_over.html' : 
        (document.getElementById('l' + life).src = "./assets/image/coracao_vazio.png", 
        life++)

    }

    var positionX = Math.floor(Math.random() * width) - 90
    var positionY = Math.floor(Math.random() * height) - 90

    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY

    console.log(positionX, positionY)

    //criar elemento HTML
    var mosquito = document.createElement('img')
    mosquito.src = './assets/image/mosquito.png'
    mosquito.className = randomImageSize() + ' ' + randomImageSide()
    mosquito.style.left = positionX + 'px'
    mosquito.style.top = positionY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito' 
    mosquito.onclick = function(){
        this.remove()
    }


    document.body.appendChild(mosquito)
}

function randomImageSize()
{
    var imageClass = Math.floor(Math.random() * 3)

    switch(imageClass){
        case 0:
            return 'mosquitoImageA'
        case 1:
            return 'mosquitoImageB'
        case 2:
            return 'mosquitoImageC'
    }
}

function randomImageSide()
{
    var imageClass = Math.floor(Math.random() * 2)

    switch(imageClass){
        case 0:
            return 'sideA'
        case 1:
            return 'sideB'
    }
}