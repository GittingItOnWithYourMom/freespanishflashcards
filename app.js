const theme = document.getElementById("theme")
const body = document.body
const darktext = document.querySelectorAll(".darkmode")


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
function adminlog(){
    console.log('yo')
    var pass = document.getElementById('adminpass').value
    var text = document.getElementById('admintext').textContent
    if (pass == 'diddy'){
        text = 'Welcome Admin'
        AdminUser = true
    }
    else{
        console.log('nope')
        text = 'Wrong Password'
    }
}

function changetheme(){
    if(theme.checked){
        body.style.backgroundColor = 'rgb(70, 70, 70)';
        darktext.forEach((text) => {
            text.style.color = 'white';    
        });
    }
    else{
        body.style.backgroundColor = 'white';
        darktext.forEach((text) => {
            text.style.color = 'black';    
        });
    }
}