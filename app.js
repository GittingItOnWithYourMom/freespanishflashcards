function start(game){
    if (game == 'minecraft'){
        var iframe = document.createElement('iframe');
        
        iframe.src = 'https://eaglercraft.com/mc/1.8.8/';
        iframe.width = '1920'
        iframe.height = '1080'
        iframe.frameBorder = '0';

        document.getElementById('iframe-container').appendChild(iframe);

        iframe.onload = function() {
            iframe.contentWindow.focus();
        };
    }
}
function removeIframe() {
    var iframe = document.querySelector('iframe');
    if (iframe) {
        iframe.remove();
    }
}