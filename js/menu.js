$(function()
{
  var header  = document.getElementById("header");
  var headroom  = new Headroom(header);
  headroom.init();

  //menu responsive
  //Calculo el ancho de la página
  var ancho = $(window).width(),
      enlaces = $('#enlaces'),
      btnMenu = $('#btn-menu'),
      icono = $('#btn-menu .icono');

      if(ancho < 700)
      {
        enlaces.hide(); //ocultamos los enlaces
        icono.addClass('fa bars');
      }

      btnMenu.on('click', function(e)
      {
        enlaces.slideToggle();
        icono.toggleClass('fa-bars');
        icono.toggleClass('fa-times');
      });

      $(window).on('resize', function() //ejecutamos una función cada vez que se detecte un cambio en la ventana
      {
        if($(this).width() > 700)
        {
          enlaces.show();
          icono.addClass('fa-times');
          icono.removeClass('fa-bars');
        }else
        {
          enlaces.hide();
          icono.addClass('fa-bars');
          icono.removeClass('fa-times');
        }
      });
});
