(function () {

    $(function() {
        var $carDisk = $('.carousel_discount');
        var $carMasters = $('.carousel_masters');
        var $carCosm = $('.carousel_cosmetics');


        $carDisk.slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            infinite: true,
            centerPadding: '15px'
        });

        $carMasters.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            infinite: true,
            // centerMode: true,
            centerPadding: '15px'
        });

        $carCosm.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            infinite: true,
            // centerMode: true,
            centerPadding: '15px'
        });


    });



})();
