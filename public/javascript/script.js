$(window).on('load', function() { // makes sure the whole site is loaded 
    $('#preloader').delay(500).fadeOut('slow', function() { $(this).remove(); });
});

(function($) {
	$(document).ready(function() {
		$('.animated-form-control').each(function() {
          var group = this;
          $(this).find('.form-control').each(function(){
            $(this).focus(function(){
              $(group).addClass('focus');
            });
            $(this).focusout(function(){
              $(group).removeClass('focus');
            });
          });
        });

        $( '.dropdown-menu a.dropdown-toggle' ).on( 'click', function ( e ) {
	        var $el = $( this );
	        var $parent = $( this ).offsetParent( ".dropdown-menu" );
	        if ( !$( this ).next().hasClass( 'show' ) ) {
	            $( this ).parents( '.dropdown-menu' ).first().find( '.show' ).removeClass( "show" );
	        }
	        var $subMenu = $( this ).next( ".dropdown-menu" );
	        $subMenu.toggleClass( 'show' );
	        
	        $( this ).parent( "li" ).toggleClass( 'show' );

	        $( this ).parents( 'li.nav-item.dropdown.show' ).on( 'hidden.bs.dropdown', function ( e ) {
	            $( '.dropdown-menu .show' ).removeClass( "show" );
	        } );
	        
	         if ( !$parent.parent().hasClass( 'navbar-nav' ) ) {
	            $el.next().css( { "top": $el[0].offsetTop, "left": $parent.outerWidth() - 4 } );
	        }

	        return false;
		} );

        // Animation on scroll initializing
        ACOS.init();
        

	});

}(jQuery));

var gmapStyles = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#b9d8ec"
            },
            {
                "visibility": "on"
            }
        ]
    }
]