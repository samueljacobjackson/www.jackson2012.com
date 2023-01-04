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

document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img.hide"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                let lazyImage = entry.target;
                lazyImage.classList.remove("hide");
                lazyImage.classList.add("show");
            }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        // Possibly fall back to event handlers here
    }
});