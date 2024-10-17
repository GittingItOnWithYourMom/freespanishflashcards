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
