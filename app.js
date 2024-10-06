const theme = document.getElementById("theme")
const body = document.body
const darktext = document.querySelectorAll(".darkmode")
const backdoor = document.getElementById('backdoor')

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