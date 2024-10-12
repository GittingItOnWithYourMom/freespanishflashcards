const theme = document.getElementById("theme")
const body = document.body
const darktext = document.querySelectorAll(".darkmode")
const ballimage = document.getElementById('ball')
const boximage = document.getElementById('box')

function start(game){
    removeIframe()
    var iframe = document.createElement('iframe');
    iframe.width = '1920'
    iframe.height = '1080'
    iframe.frameBorder = '0';
    
    if (game == 'minecraft'){
        iframe.src = 'https://eaglercraft.com/mc/1.8.8/';
    };

    document.getElementById('iframe-container').appendChild(iframe);
    iframe.onload = function() {
        iframe.contentWindow.focus();
    }
}
function removeIframe() {
    var iframe = document.querySelector('iframe');
    if (iframe) {
        iframe.remove();
    }
    
}
function custom(){
    removeIframe()
    var customurl = document.getElementById('custom').value;
    console.log(customurl);
    var iframe = document.createElement('iframe');
    
    iframe.src = customurl;
    iframe.width = '1920';
    iframe.height = '1080';
    iframe.frameBorder = '0';

    document.getElementById('iframe-container').appendChild(iframe);

    iframe.onload = function() {
        iframe.contentWindow.focus();
    };
}



var combo = '' 
document.addEventListener('keypress', (event) => {
    if (event.key == 'g')
        combo = combo + 'g'
    if (event.key == 'l')
        combo = combo + 'l'
    if (event.key == 'i')
        combo = combo + 'i'
    if (event.key == 'z')
        combo = combo + 'z'
    if (event.key == 'y')
        combo = combo + 'y'
    if (combo.includes('')){
        body.style.backgroundImage = "url('images/school_picture3.jpg')"
        AdminUser = true
    }
        

})

var AdminUser = false

function changetheme(){
    if(theme.checked){
        body.style.backgroundColor = 'rgb(70, 70, 70)'
        darktext.forEach((text) => {
            text.style.color = 'white'
        })
    }
    else{
        body.style.backgroundColor = 'white'
        darktext.forEach((text) => {
            text.style.color = 'black';   
        })
    }
}

function hideball(){
    ball.remove()
}

//physics

class physicsobject{
    constructor(image, initialX, initialY, posX, posY, velX, velY, accX, accY, deltaTX, deltaTY){
        this.image = image
        this.initialX = initialX
        this.initialY = initialY
        this.posX = posX
        this.posY = posY
        this.velX = velX
        this.velY = velY
        this.accX = accX
        this.accY = accY
        this.deltaTX = deltaTX
        this.deltaTY = deltaTY
    }
    moveImage(){
        var amount = "translate(" +this.posX+ "px, " +this.posY+ "px)"
        this.image.style.transform = amount
    }
}

var ball = new physicsobject(ballimage, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0)
var box = new physicsobject(boximage, 900, 0, 900, 0, 0, 0, 0, 0, 0, 0)

var framerate = 1
var physics_objects = [ball, box]
var prevScroll
var newScroll
var prevWindow
var newWindow

var friction = 0
setInterval(() => {
    prevScroll = newScroll
    newScroll = scrollY
    var accBorder = scrollY - prevScroll
    prevWindow = newWindow
    newWindow = innerHeight
    var accWindow = innerHeight - prevWindow

    physics_objects.forEach((object) => {
        var bottom = window.innerHeight - 105
        var wall = window.innerWidth - 120
        var offset = 0
        const limiter = 0.00001

        object.accY = 9.8

        object.initialY = object.posY
        object.initialX = object.posX
        if (object.posY > bottom + scrollY){
            object.accY -= object.accY
            object.velY -= object.velY
            object.deltaTY = 0
            if (accBorder < 0){
                offset += accBorder
            }
            if (accWindow < 0){
                offset += accWindow
            }
        }
        if (object.posX > wall){
            object.accX -= object.accX
            object.velX -= object.velX
            object.deltaTX = 0
        }
        object.posY = object.initialY + object.velY*object.deltaTY*limiter + object.accY*object.deltaTY*object.deltaTY*limiter + offset
        object.posX = object.initialX + object.velX*object.deltaTX*limiter + object.accX*object.deltaTX*object.deltaTX*limiter
        object.deltaTY += 1
        object.deltaTX += 1
        object.moveImage()
    })
}, framerate)

function moveobject(object){
    setTimeout(() => {
        console.log(`Mouse X: ${mousex}, Mouse Y: ${mousey}`)
    },10)
}

var mousex
var mousey
document.addEventListener('mousemove', (event) => {
    mousex = event.clientX;
    mousey = event.clientY;
})