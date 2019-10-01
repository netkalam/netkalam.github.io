jQuery(function ($) {
    'use strict'; (function () { $('#status').fadeOut(); $('#preloader').delay(200).fadeOut('slow'); }()); $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) { $('nav.navbar').addClass('sticky-nav'); }
        else { $('nav.navbar').removeClass('sticky-nav'); }
    }); (function () { $('button.navbar-toggle').ucOffCanvasMenu({ documentWrapper: '#main-wrapper', contentWrapper: '.content-wrapper', position: 'uc-offcanvas-left', effect: 'slide-along', closeButton: '#uc-mobile-menu-close-btn', menuWrapper: '.uc-mobile-menu', documentPusher: '.uc-mobile-menu-pusher' }); }()); (function () { $('[data-toggle="tooltip"]').tooltip() }()); (function () { $('body').append('<div id="toTop"><i class="fa fa-angle-up"></i></div>'); $(window).scroll(function () { if ($(this).scrollTop() != 0) { $('#toTop').fadeIn(); } else { $('#toTop').fadeOut(); } }); $('#toTop').on('click', function () { $("html, body").animate({ scrollTop: 0 }, 600); return false; }); }()); (function () {
        if ($('#googleMap').length > 0) {
            var $latitude = 48.869319, $longitude = 2.354261, $map_zoom = 16; var $marker_url = 'img/google-map-marker.png'; var style = [{ "stylers": [{ "hue": "#000" }, { "saturation": -100 }, { "gamma": 2.15 }, { "lightness": 12 }] }]; var map_options = { center: new google.maps.LatLng($latitude, $longitude), zoom: $map_zoom, panControl: false, zoomControl: false, mapTypeControl: false, streetViewControl: false, mapTypeId: google.maps.MapTypeId.ROADMAP, scrollwheel: false, styles: style, }
            var map = new google.maps.Map(document.getElementById('googleMap'), map_options); var marker = new google.maps.Marker({ position: new google.maps.LatLng($latitude, $longitude), map: map, visible: true, icon: $marker_url });
        }
    }());
}); $(document).on('click', '.m-menu .dropdown-menu', function (e) { e.stopPropagation() })