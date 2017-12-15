$('document').ready(function() {
    $('#copy-picar-auth-flow-code').on('click', function() {
        copyToClipboard('.auth-code');
    });
    $('#copy-picar-control-flow-code').on('click', function() {
        copyToClipboard('.control-code');
    });
});

// A PEN BY Shaik Maqsood
// https://codepen.io/shaikmaqsood/pen/XmydxJ/
var copyToClipboard = function(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    //      Minify
    $temp.val(JSON.stringify($.parseJSON($(element).text()))).select();
    //$temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}