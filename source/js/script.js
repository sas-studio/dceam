$(function() {

    // sliders
    var $logos = $('#eam-section-trust__logos');
    var $partners = $('#eam-section-partners__carousel');
    var partnersHeight = false;
    var logosArrow = false;

    $('.eam-section-trust__logo').unwrap();
    //- $('.eam-section-partners__item').unwrap();

    if ($(document).width() < 1124) {
        while ($logos.children('.eam-section-trust__logo').not('.wrap').length) {
            $logos.children('.eam-section-trust__logo').not('.wrap').filter(':lt(' + 2 + ')').wrapAll('<div class="wrap">');
        }
        $('.eam-section-partners__item').unwrap();
        partnersHeight = true;
    }
    else {
        while ($logos.children('.eam-section-trust__logo').not('.wrap').length) {
            $logos.children('.eam-section-trust__logo').not('.wrap').filter(':lt(' + 6 + ')').wrapAll('<div class="wrap">');
        }
        logosArrow = true;
        //- while ($partners.children('.eam-section-partners__item').not('.eam-section-partners__slide').length) {
        //-     $partners.children('.eam-section-partners__item').not('.eam-section-partners__slide').filter(':lt(' + 3 + ')').wrapAll('<div class="eam-section-partners__slide">');
        //- }
    }

    $logos.slick({
        arrows: logosArrow,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        //- autoplay: true,
        dots: !logosArrow,
        prevArrow: '#eam-section-trust__logos-arrow-left',
        nextArrow: '#eam-section-trust__logos-arrow-right'
        //- appendDots: '#eam-section-partners__carousel-dots'
    });

    $partners.slick({
        arrows: false,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        //- autoplay: true,
        adaptiveHeight: partnersHeight,
        dots: true,
        appendDots: '#eam-section-partners__carousel-dots'
    });




    // form modal
    $('.n-form-show').on('click', function(e) {
        e.preventDefault();
        $('#n-modal-form').fadeIn(200);
        $(document).width() < 1279 && $('body').css('overflow', 'hidden');
    });
    $('#n-modal-form__close').on('click', function(e) {
        e.preventDefault();
        $('#n-modal-form').fadeOut(200);
        $(document).width() < 1279 && $('body').css('overflow', 'auto');
    });




    // pretty inputs
    $('body').on('click', function(e) {

        function setPlaceholderPosition() {
            $inputs = $('.pretty-input input');
            for (var i = 0; i < $inputs.length; i++) {
                if (!$($inputs[i]).val()) {
                    var $placeholder = $($inputs[i]).siblings('.pretty-input__placeholder');
                    $placeholder.removeClass('n-showed');
                }
            }
        }
        setPlaceholderPosition();

        if ($(e.target).closest('.pretty-input__close').length) {
            var $input = $(e.target).closest('.pretty-input').find('input');
            $input.val('');
            setPlaceholderPosition();
        }

        $('.pretty-input__close').removeClass('n-showed');

        if ($(e.target).is('.pretty-input input')) {
            var $closeBtn = $(e.target).siblings('.pretty-input__close');
            var $placeholder = $(e.target).siblings('.pretty-input__placeholder');

            if (!$closeBtn.hasClass('n-showed')) {
                $closeBtn.addClass('n-showed');
            }
            if (!$placeholder.hasClass('n-showed')) {
                $placeholder.addClass('n-showed');
            }
        }
    });


});
