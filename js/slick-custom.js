$(document).ready(function() {
    $('.senior-slick').slick({
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false,

    });
});

$(document).ready(function() {
    $('.cordless-slick').slick({
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false,

    });
});

function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
}
