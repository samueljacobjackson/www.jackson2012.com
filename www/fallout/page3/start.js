let imageStart = 201
let imagecount = 50
$(document).ready(() => {
    function addImages(){
    var imageEnd = imageStart + imagecount - 1
        for(var i = imageStart; i <= imageEnd; i++){
            num = i.toString().padStart(5, '0');
            dom = '<div class="col-sm-8 col-md-6 col-lg-4 "><a href="../img/image_' + num + '.png"><img class="img-fluid" src="../img/image_' + num + '_thumbnail.png"></a></div>'
            $('#gallery').append(dom);
        }
    }
    addImages();
});
