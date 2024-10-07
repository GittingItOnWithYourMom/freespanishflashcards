const theme = document.getElementById("theme")
const body = document.body
const darktext = document.querySelectorAll(".darkmode")
const backdoor = document.getElementById('backdoor')
const ball = document.getElementById('ball')

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

var AdminUser = false
backdoor.addEventListener('submit',function(event){
    event.preventDefault()

    var pass = document.getElementById('adminpass')
    var text = document.getElementById('admintext')
    if (pass.value == 'oppenheimer2'){
        pass.value = ''
        pass.hidden = true
        backdoor.style.width = '110px'
        text.style.color = 'green'
        text.textContent = 'Welcome Admin'
        body.style.backgroundImage = "url('images/school_picture3.jpg')"
        AdminUser = true
    }
    else{
        pass.value = ''
        text.textContent = 'Wrong Password'
        text.style.color = 'red'
        setTimeout(function(){
            text.textContent = 'Admin Backdoor'
            text.style.color = 'black'
        }, 2000)
    }
})

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
var framerate = 10
var bottom = 845
var wall = 1802
var physics_objects = [ball]
var deltaTX = 0
var deltaTY = 0
var posY = 0
var posX = 0
var initialY = 0
var initialX = 0
var friction = 0
setInterval(() => {
    physics_objects.forEach((object) => {
        //Y
        if (posY < bottom + scrollY){
            friction = 1
            var accY = 4.8
            var velY = 0
            posY = initialY + velY*deltaTY + accY*deltaTY*deltaTY * 0.01
            
            var amount = "translate(" +0+ "px, " +posY+ "px)"
            object.style.transform = amount
            deltaTY += 1
        }
        else{
            friction = 0.001
            deltaTY = 0
            initialY = posY
            posY = bottom + scrollY
            var amount = "translate(" +0+ "px, " +posY+ "px)"
            object.style.transform = amount
        }
        //X
        if (posX < wall){
            var accX = 0
            var velX = 4
            posX = initialX + velX*deltaTX + accX*deltaTX*deltaTX
            var amount = "translate(" +posX+ "px, " +posY+ "px)"
            object.style.transform = amount
            deltaTX += 1
        }
        else{
            deltaTX = 0
            initialX = posX
            posX = wall
            var amount = "translate(" +posX+ "px, " +posY+ "px)"
            object.style.transform = amount
        }
    })
}, framerate)