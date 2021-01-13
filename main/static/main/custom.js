$(document).ready(function() {

  $(this).scrollTop(0);

  // ************************** //
  // left nav menu
  // ************************** //

  $('.left-nav .menu').click(function() {
    console.log('menu clicked');
    $('.left-nav').toggleClass('active');
    $('.container-fluid').toggleClass('offset');
    if ($('.left-nav').hasClass('active')) {
      $('.menu .menu-inner .close-icon').show()
      $('.menu .menu-inner .menu-icon').hide()
    } else {
      $('.menu .menu-inner .menu-icon').show()
      $('.menu .menu-inner .close-icon').hide()
    }
  });

  $('.container-fluid').click(function() {
    $('.left-nav').removeClass('active');
    $('.container-fluid').removeClass('offset');
    $('.menu .menu-inner .menu-icon').show()
    $('.menu .menu-inner .close-icon').hide()
  });
  
  // ************************** //
  // shared GSAP functions
  // ************************** //

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(DrawSVGPlugin);
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(MorphSVGPlugin);

  ScrollTrigger.defaults({
    duration: 0.25
  });

  

  // ************************** //
  // progress bar
  // ************************** //
  
  gsap.to('progress', {
    value: 100,
    ease: 'none',
    scrollTrigger: {
      trigger: "body",
      scrub: 0.3,
      start: "top top",
      end: "bottom bottom",
    }
  });

  // ************************** //
  // page transitions
  // ************************** //
  
  function getPage(page_name) {
      $.ajax({
          type:'GET',
          url:'/main/pages/' + page_name + '_main',
          data:{},
          success:function(data){
              console.log(data);
              $('.container-fluid').append(data);
              $('.container-fluid').addClass('is-exiting');
              
              setTimeout(function() {
                $('.container-fluid').find('#main').first().remove();
                $('.container-fluid').removeClass('is-exiting');                
                $(this).scrollTop(0);
                window.history.pushState('', '', './' + page_name);
              }, 400);
          },
          error : function(xhr,errmsg,err) {
            console.log('error')
              console.log(xhr.status + ": " + xhr.responseText); 
          }
      });
  };

  $(document).on("click", '#bottom-banner', function(event) { 
  // $( "#bottom-banner" ).click(function(e) {
    getPage($(this).data('target'));
  });

  window.onpopstate = function(event){
    window.location.href = document.location
  } 



  

});