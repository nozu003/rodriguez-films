$(document).ready(function(){

  const images = ["assets/images/gallery/landscape/20210817_074845.jpg","assets/images/gallery/landscape/aaaaa.jpg","assets/images/gallery/landscape/IMG_0662.jpg","assets/images/gallery/landscape/IMG_1224.jpg","assets/images/gallery/landscape/IMG_3748.jpg","assets/images/gallery/landscape/IMG_5613.jpg","assets/images/gallery/landscape/IMG_8093-2.jpg","assets/images/gallery/landscape/IMG_9590.jpg","assets/images/gallery/landscape/IMG_9971.jpg","assets/images/gallery/landscape/LRM_EXPORT_20180420_182024.jpg","assets/images/gallery/landscape/LRM_EXPORT_20180422_183447.jpg","assets/images/gallery/landscape/WallpaperX.jpg","assets/images/gallery/landscape/Wide.jpg","assets/images/gallery/landscape/1_Thumbnail.jpg"];
  
    if(document.title == "Rodriguez Films | Home"){
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
    }

    // GALLERY
    if(document.title == "Rodriguez Films | Gallery")
      $('.categ-1').click(function(){
        location.href = "/landscape.html";
      });

    // LANDSCAPE
    if(document.title == "Rodriguez Films | Landscape")
    // CATEG 1
      $('.categ-1').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = images[0];
      });
      // CATEG 2
      $('.categ-2').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = images[1];
      });
      // CATEG 3
      $('.categ-3').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = images[2];
      });
      // CATEG 4
      $('.categ-4').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = images[3];
      });
      // CATEG 5
      $('.categ-5').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = images[4];
      });
      // CATEG 6
      $('.categ-6').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = images[5];
      });
      // CATEG 7
      $('.categ-7').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = images[6];
      });
      // CATEG 8
      $('.categ-8').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = images[7];
      });
      // CATEG 9
      $('.categ-9').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = images[8];
      });
      // CATEG 10
      $('.categ-10').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = images[9];
      });
      // CATEG 11
      $('.categ-11').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = images[10];
      });
      // CATEG 12
      $('.categ-12').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = images[11];
      });
      // CATEG 13
      $('.categ-13').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = images[12];
      });
      // CATEG 14
      $('.categ-14').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = images[13];
      });
      // CATEG 15
      $('.categ-15').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = images[14];
      });
    // D-BOX
      $('.display-bg').click(function(){
        $('.display-box').addClass('d-none');
        $('body').removeClass('overflow-hidden');
      });
});