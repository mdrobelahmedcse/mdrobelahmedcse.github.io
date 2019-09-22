 /*=====================NAVIGATION BAR TOGGLE SCRIPT====================*/
 $(document).ready(function(){

         $('.sidebarbtn').click(function(){

               $('.sidebar').toggleClass('active');  
               $('.sidebarbtn').toggleClass('toggle');  

         })
   })

 
/*============SMOOTH SCROOLING SCRIPT==================*/
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 2000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

/*==========JS SCRIPT FOR PROTFOLIO FILTERING==========*/

$(document).ready(function(){
   $(".button").click(function(){
         var value = $(this).attr("data-filer");
         if (value == "all") {
              $(".filter").show("1000");

         } else{
             $(".filter").not("."+value).hide("1000");
             $(".filter").filter("."+value).show("1000");
         }
         //add active class
         $("ul .button").click(function(){
              $(this).addClass('active').siblings().removeClass('active');
         })
   })

})


 