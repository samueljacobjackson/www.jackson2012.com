for(var i = 1; i <= 172; i++){
    var n = String(i).padStart(5, '0');
    var $div = $("<div>", { "class": "mb-3 pics animation" });
    var $img = $("<img>", { "class": "img-fluid hide", "src": 'img/image_' + n + '.png', "alt": "image_" + n});
    $div.append($img);
    $('#gallery').append($div);
}