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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpIHtcblxuICAgIC8vIHNsaWRlcnNcbiAgICB2YXIgJGxvZ29zID0gJCgnI2VhbS1zZWN0aW9uLXRydXN0X19sb2dvcycpO1xuICAgIHZhciAkcGFydG5lcnMgPSAkKCcjZWFtLXNlY3Rpb24tcGFydG5lcnNfX2Nhcm91c2VsJyk7XG4gICAgdmFyIHBhcnRuZXJzSGVpZ2h0ID0gZmFsc2U7XG4gICAgdmFyIGxvZ29zQXJyb3cgPSBmYWxzZTtcblxuICAgICQoJy5lYW0tc2VjdGlvbi10cnVzdF9fbG9nbycpLnVud3JhcCgpO1xuICAgIC8vLSAkKCcuZWFtLXNlY3Rpb24tcGFydG5lcnNfX2l0ZW0nKS51bndyYXAoKTtcblxuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDwgMTEyNCkge1xuICAgICAgICB3aGlsZSAoJGxvZ29zLmNoaWxkcmVuKCcuZWFtLXNlY3Rpb24tdHJ1c3RfX2xvZ28nKS5ub3QoJy53cmFwJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAkbG9nb3MuY2hpbGRyZW4oJy5lYW0tc2VjdGlvbi10cnVzdF9fbG9nbycpLm5vdCgnLndyYXAnKS5maWx0ZXIoJzpsdCgnICsgMiArICcpJykud3JhcEFsbCgnPGRpdiBjbGFzcz1cIndyYXBcIj4nKTtcbiAgICAgICAgfVxuICAgICAgICAkKCcuZWFtLXNlY3Rpb24tcGFydG5lcnNfX2l0ZW0nKS51bndyYXAoKTtcbiAgICAgICAgcGFydG5lcnNIZWlnaHQgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgd2hpbGUgKCRsb2dvcy5jaGlsZHJlbignLmVhbS1zZWN0aW9uLXRydXN0X19sb2dvJykubm90KCcud3JhcCcpLmxlbmd0aCkge1xuICAgICAgICAgICAgJGxvZ29zLmNoaWxkcmVuKCcuZWFtLXNlY3Rpb24tdHJ1c3RfX2xvZ28nKS5ub3QoJy53cmFwJykuZmlsdGVyKCc6bHQoJyArIDYgKyAnKScpLndyYXBBbGwoJzxkaXYgY2xhc3M9XCJ3cmFwXCI+Jyk7XG4gICAgICAgIH1cbiAgICAgICAgbG9nb3NBcnJvdyA9IHRydWU7XG4gICAgICAgIC8vLSB3aGlsZSAoJHBhcnRuZXJzLmNoaWxkcmVuKCcuZWFtLXNlY3Rpb24tcGFydG5lcnNfX2l0ZW0nKS5ub3QoJy5lYW0tc2VjdGlvbi1wYXJ0bmVyc19fc2xpZGUnKS5sZW5ndGgpIHtcbiAgICAgICAgLy8tICAgICAkcGFydG5lcnMuY2hpbGRyZW4oJy5lYW0tc2VjdGlvbi1wYXJ0bmVyc19faXRlbScpLm5vdCgnLmVhbS1zZWN0aW9uLXBhcnRuZXJzX19zbGlkZScpLmZpbHRlcignOmx0KCcgKyAzICsgJyknKS53cmFwQWxsKCc8ZGl2IGNsYXNzPVwiZWFtLXNlY3Rpb24tcGFydG5lcnNfX3NsaWRlXCI+Jyk7XG4gICAgICAgIC8vLSB9XG4gICAgfVxuXG4gICAgJGxvZ29zLnNsaWNrKHtcbiAgICAgICAgYXJyb3dzOiBsb2dvc0Fycm93LFxuICAgICAgICBzcGVlZDogNTAwLFxuICAgICAgICBmYWRlOiB0cnVlLFxuICAgICAgICBjc3NFYXNlOiAnbGluZWFyJyxcbiAgICAgICAgLy8tIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICBkb3RzOiAhbG9nb3NBcnJvdyxcbiAgICAgICAgcHJldkFycm93OiAnI2VhbS1zZWN0aW9uLXRydXN0X19sb2dvcy1hcnJvdy1sZWZ0JyxcbiAgICAgICAgbmV4dEFycm93OiAnI2VhbS1zZWN0aW9uLXRydXN0X19sb2dvcy1hcnJvdy1yaWdodCdcbiAgICAgICAgLy8tIGFwcGVuZERvdHM6ICcjZWFtLXNlY3Rpb24tcGFydG5lcnNfX2Nhcm91c2VsLWRvdHMnXG4gICAgfSk7XG5cbiAgICAkcGFydG5lcnMuc2xpY2soe1xuICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICBzcGVlZDogNTAwLFxuICAgICAgICBmYWRlOiB0cnVlLFxuICAgICAgICBjc3NFYXNlOiAnbGluZWFyJyxcbiAgICAgICAgLy8tIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICBhZGFwdGl2ZUhlaWdodDogcGFydG5lcnNIZWlnaHQsXG4gICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgIGFwcGVuZERvdHM6ICcjZWFtLXNlY3Rpb24tcGFydG5lcnNfX2Nhcm91c2VsLWRvdHMnXG4gICAgfSk7XG5cblxuXG5cbiAgICAvLyBmb3JtIG1vZGFsXG4gICAgJCgnLm4tZm9ybS1zaG93Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoJyNuLW1vZGFsLWZvcm0nKS5mYWRlSW4oMjAwKTtcbiAgICAgICAgJChkb2N1bWVudCkud2lkdGgoKSA8IDEyNzkgJiYgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG4gICAgfSk7XG4gICAgJCgnI24tbW9kYWwtZm9ybV9fY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnI24tbW9kYWwtZm9ybScpLmZhZGVPdXQoMjAwKTtcbiAgICAgICAgJChkb2N1bWVudCkud2lkdGgoKSA8IDEyNzkgJiYgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnYXV0bycpO1xuICAgIH0pO1xuXG5cblxuXG4gICAgLy8gcHJldHR5IGlucHV0c1xuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgZnVuY3Rpb24gc2V0UGxhY2Vob2xkZXJQb3NpdGlvbigpIHtcbiAgICAgICAgICAgICRpbnB1dHMgPSAkKCcucHJldHR5LWlucHV0IGlucHV0Jyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8ICRpbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoISQoJGlucHV0c1tpXSkudmFsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyICRwbGFjZWhvbGRlciA9ICQoJGlucHV0c1tpXSkuc2libGluZ3MoJy5wcmV0dHktaW5wdXRfX3BsYWNlaG9sZGVyJyk7XG4gICAgICAgICAgICAgICAgICAgICRwbGFjZWhvbGRlci5yZW1vdmVDbGFzcygnbi1zaG93ZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2V0UGxhY2Vob2xkZXJQb3NpdGlvbigpO1xuXG4gICAgICAgIGlmICgkKGUudGFyZ2V0KS5jbG9zZXN0KCcucHJldHR5LWlucHV0X19jbG9zZScpLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyICRpbnB1dCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5wcmV0dHktaW5wdXQnKS5maW5kKCdpbnB1dCcpO1xuICAgICAgICAgICAgJGlucHV0LnZhbCgnJyk7XG4gICAgICAgICAgICBzZXRQbGFjZWhvbGRlclBvc2l0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICAkKCcucHJldHR5LWlucHV0X19jbG9zZScpLnJlbW92ZUNsYXNzKCduLXNob3dlZCcpO1xuXG4gICAgICAgIGlmICgkKGUudGFyZ2V0KS5pcygnLnByZXR0eS1pbnB1dCBpbnB1dCcpKSB7XG4gICAgICAgICAgICB2YXIgJGNsb3NlQnRuID0gJChlLnRhcmdldCkuc2libGluZ3MoJy5wcmV0dHktaW5wdXRfX2Nsb3NlJyk7XG4gICAgICAgICAgICB2YXIgJHBsYWNlaG9sZGVyID0gJChlLnRhcmdldCkuc2libGluZ3MoJy5wcmV0dHktaW5wdXRfX3BsYWNlaG9sZGVyJyk7XG5cbiAgICAgICAgICAgIGlmICghJGNsb3NlQnRuLmhhc0NsYXNzKCduLXNob3dlZCcpKSB7XG4gICAgICAgICAgICAgICAgJGNsb3NlQnRuLmFkZENsYXNzKCduLXNob3dlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEkcGxhY2Vob2xkZXIuaGFzQ2xhc3MoJ24tc2hvd2VkJykpIHtcbiAgICAgICAgICAgICAgICAkcGxhY2Vob2xkZXIuYWRkQ2xhc3MoJ24tc2hvd2VkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuXG59KTtcbiJdLCJmaWxlIjoic2NyaXB0LmpzIn0=
