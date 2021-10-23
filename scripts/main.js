$(document).ready (function(){

    var $header =   $("header");
        // var is tied to header in document.  When var iable is used,
        // HTML and JS will know
        // that the header is being reference

    var $stickey =   $header.before ($header.clone( ). addClass ( "stickey") );
         // This creates a clone copy of the header on top of the original
         // so there are two headers.  A class is add to cloned header with the  .addClass



    $(window).on("scroll", function( ){
        // callback function is called whenever scroll event occurs
        // function will run, when you scroll past something
            var scrollFromTop = $(window).scrollTop( );
                    // .scollTop is a jQuery method that scrolls website from
                    // top or gives option to do something when scrolling
                    // from top
            $("body").toggleClass( "scroll", (scrollFromTop > 300) );
            // select body, add toggleClass( ) of scroll. This changes
            //  the class of  body to 'scroll'  whenever you
            // scroll more than 350px from top

    });

    // Smooth Scroll

             $('.menu li a[href^="#"]').on('click', function( e) {

                e.preventDefault( );
                // The default is to jump to the section which as the same id(#)
                // as in the href, but it does not take the user to the begining of the
                // section, hence the prevent default is invoked.

                var target = $(this.hash);

                    if ( target.length){
                        $('html, body').stop() .animate( {
                            scrollTop: target.offset( ).top -130

                        }, 1000);
                    }
                });
                // this.hash reads the href attribute and gets the url. this value is then stored in the variable
                // The conditional statement is checking if the variable is true, meaning there
                    // the variable is not empty, there is an 'id' present, then the function will run
                    // first method applied is .stop, so stop default function and animate instead
                    // The function called is scrollTop.  .scollTop is a jQuery method that scrolls from top. But since
                    // there is  a 60px margin, the offset function is used to substract 60 px
                    // finally the 1000 stands for 1000miliseconds, the animation will last that long
           
        // Selects all of the li elements, there  "a"tags and their particular hrefs
        // Then this is attached to an event listener- on-click and a callback function,
        // with a parameter of the 'e' or target.


        // Masonry
            // options
        $(".grid").masonry({
            itemSelector: '.grid-item',
            // selects all items with grid-item class
            columnWidth: 120,
            // Aligns items to a horizontal grid
            fitWidth: true,
            // Sets the width of the container to fit the number of columns
            gutter:1
            // adds horizontal space between elements
        });


        // Slick Slider Start

        $('.slider').slick({
            prevArrow:'<button type="button" class="slick-prev">Previous</button>',
            nextArrow:'<button type="button" class="slick-next">Next</button>',
            fade: false,
            autoplay:true,
            autoplaySpeed: 2000,
            arrows: true,
            dots: false,
            rtl: false,
            centerMode: true,
            slidesToShow: 3, 

            responsive: [ 
                {
                    breakpoint: 990,
                    settings: {
                        slidesToShow: 2,

                    }

                },

                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,

                    }

                }

            ]

            // Setting the responsiveness using JS for the Slider
        });

         // Slick Slider End


        // Responsive Menu Start

        var body = $('body');
        var menuTrigger= $( '.js-menu-trigger');
        var mainOverlay= $('.js-main-overlay');

        menuTrigger.on('click', function( ) {

                body.addClass('menu-is-active');
                // add new class to body when hamburger icon is click
        });

        $('.menu li a').on('click', function( ) {

            body.removeClass('menu-is-active');
            // remove new class to body when navbar item is click
         });

         mainOverlay.on('click', function( ) {

            body.removeClass('menu-is-active');
            // removes new class from body when  anywhere on the
            // mainOverlay is click but the idea is when the user clicks
            // on the 'X', the overlay disappears
    });

     
         // Responsive Menu End
    });
          
