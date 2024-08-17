let imageStart = 1
let imagecount = 100

$(document).ready(() => {
    function addImages (){ 
        var imageEnd = imageStart + imagecount - 1
        for(var i = imageStart; i <= imageEnd; i++){
            
            num = i.toString().padStart(5, '0');

            dom = '<div class="mb-3 pics animation"><a href="../img/image_' + num + '.jpg"><img class="img-fluid lodaz" src="../img/image_' + num + '_thumbnail.jpg" alt="Card image cap" /></a></div>';
            $('#gallery').append(dom);
        }
    }
    addImages();
});