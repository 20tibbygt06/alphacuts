var feed = new Instafeed({
    get: 'user',
    userId: '3918077001',
    clientId: '42da5094e33f4c0aa03c70001cc77507',
    accessToken: '3918077001.1677ed0.416562183387474e945226fcaf064be2',
    resolution: 'standard_resolution',
    limit: 15,
    template: '<div> <a href="{{link}}" target="_blank"><img src="{{image}}" alt="{{caption}}" style="width:100%;"></a> </div>',
    after: function() {
        $('.instafeed').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
            pauseOnHover: false,
            pauseOnFocus: false,
            responsive: [{
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
});
feed.run();
