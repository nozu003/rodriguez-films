$(document).ready(function(){
    var counter = 1;
    setInterval(function(){
        document.getElementById('radio-' + counter).checked = true;
        counter++;
        if(counter > 5){
            counter = 1;
        }
    }, 2500);

    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
        
      }, {
          offset: '90%;'
      });
});