(function(){

  $(document).ready(function(){

    setTimeout(function(){
      $(".share").fadeIn();
    }, 1000);

    var updatePos = function () {
        var el = $("#content");
        var width = $(window).width();
        var height = $(window).height();
        var left = Math.max(0, (width / 2) - (el.width() / 2)) + "px";
        var top = Math.max(0, (height / 2) - (el.height() / 2)) + "px";
        el.css("position","absolute").css("left", left).css("top", top);
    }; 
    $(window).resize(updatePos);
    updatePos();

    
    $('.vimeo').fancybox({
      openEffect  : 'none',
      closeEffect : 'none',
      helpers : {
        media : {}
      },
      width: 1000
    });
  });
  
})();

