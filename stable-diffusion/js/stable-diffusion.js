$(document).ready(() => {
    $('.pics').on('click', (e) => {
        $('.lightbox-image').empty()
        var url = $($(e.currentTarget).children()[0]).attr('src');
        $('.lightbox-image').html('<img src="' + url.replace('image', 'large/image') + '">');
        $('.lightbox').addClass('d-block');
        $('.lightbox').removeClass('d-none');
    });

    $('.lightbox').on('click', (e) => {
        $('.lightbox').addClass('d-none');
        $('.lightbox').removeClass('d-block');
    });
});