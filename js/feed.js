var feed = new Instafeed({
    get: 'user',
    userId: '2183023665',
    clientId: 'bb0c5dae9e514f5e92d00bbade7074a3',
    accessToken: '2183023665.bb0c5da.6180f64355db47818f93ddfe55f87ec2',
    resolution: 'standard_resolution',
    limit: 10,
    template: '<div class="w3-margin-right"><a class="animation" href="{{link}}" target="_blank"><img src="{{image}}" class="mySlides w3-hover-grayscale" style="width:100%;"/></a></div>',
    after: function() {
        $('.instafeed').slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            }, {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }],
            autoplay: true,
            autoplaySpeed: 2000,
        });
    }
});
feed.run();
