$('document').ready(function() {
    $('#copy-picar-auth-flow-code').on('click', function() {
        copyToClipboard('.auth-code', true);
    });
    $('#copy-picar-control-flow-code').on('click', function() {
        copyToClipboard('.control-code', true);
    });
    $('#copy-picar-cred-flow-code').on('click', function() {
        copyToClipboard('.cred-code', true);
    });
    $('#copy-mpjg-streamer-init-code').on('click', function() {
        copyToClipboard('.mjpeg-streamer-code', false);
    });
});

// A PEN BY Shaik Maqsood
// https://codepen.io/shaikmaqsood/pen/XmydxJ/
var copyToClipboard = function(element, minify) {
    var $temp = $('<textarea name="Text1" cols="40" rows="5"></textarea>');
    $("body").append($temp);
    //      Minify
    if(minify){
        $temp.val(JSON.stringify($.parseJSON($(element).text()))).select();
    } else {
        $temp.val($(element).text()).select();
    }
    //$temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}