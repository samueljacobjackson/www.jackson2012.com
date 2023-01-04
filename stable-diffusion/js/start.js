$(document).ready(() => {
    function addImages (){ 
        for(var i = 1; i < 233; i++){
            
            num = i.toString().padStart(5, '0');

            dom = '<div class="mb-3 pics animation"><img class="img-fluid lodaz" src="img/image_' + num + '.jpg" alt="Card image cap"></div>';
            $('#gallery').append(dom);
        }
    }
    addImages();
});