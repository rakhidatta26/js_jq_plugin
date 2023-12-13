// js code
// wow animation
wow = new WOW(
  {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  })
  wow.init();

  // aos
  AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });

// jq code
$(document).ready(function(){
	// counter up
        $('.counter').counterUp({
          delay: 10,
          time: 1000
  });

  // counter 2
        $("#num1").countMe(40,65);
        $("#num2").countMe(30, 30);
        $("#num3").countMe(40, 50);
        $("#num4").countMe(100,200);
  // counter 3 
      $("#countdown").countdown360({
         radius      : 60,
         seconds     : 100,
         fontColor   : '#FFFFFF',
         autostart   : false,
         onComplete  : function () { console.log('done') }
       }).start()

      // mixitup
      var mixer = mixitup('#mi_up',{
    
        animation: {
            duration: 300
        }
      });

      // light box
      lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
      })
});
