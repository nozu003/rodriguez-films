$(document).ready(function(){

  var index = 0;

  const landscape = ["assets/images/gallery/landscape/20210817_074845.jpg","assets/images/gallery/landscape/aaaaa.jpg","assets/images/gallery/landscape/IMG_0662.jpg","assets/images/gallery/landscape/IMG_1224.jpg","assets/images/gallery/landscape/IMG_3748.jpg","assets/images/gallery/landscape/IMG_5613.jpg","assets/images/gallery/landscape/IMG_8093-2.jpg","assets/images/gallery/landscape/IMG_9590.jpg","assets/images/gallery/landscape/IMG_9971.jpg","assets/images/gallery/landscape/LRM_EXPORT_20180420_182024.jpg","assets/images/gallery/landscape/LRM_EXPORT_20180422_183447.jpg","assets/images/gallery/landscape/WallpaperX.jpg","assets/images/gallery/landscape/Wide.jpg","assets/images/gallery/landscape/1_Thumbnail.jpg"];

  const portrait = ["assets/images/gallery/portrait/1.jpg","assets/images/gallery/portrait/2.jpg","assets/images/gallery/portrait/3.jpg","assets/images/gallery/portrait/4.jpg","assets/images/gallery/portrait/5.jpg","assets/images/gallery/portrait/6.jpg","assets/images/gallery/portrait/7.jpg","assets/images/gallery/portrait/8.jpg","assets/images/gallery/portrait/9.jpg","assets/images/gallery/portrait/10.jpg","assets/images/gallery/portrait/11.jpg","assets/images/gallery/portrait/12.jpg"];
  
  // LOADING
  $('#home').click(function(){
    $('.loading-bar').addClass('lb-animation');
    setInterval(function(){
      location.href = "./index.html";
    }, 1500);
  });
  $('#portfolio').click(function(){
    $('.loading-bar').addClass('lb-animation');
    setInterval(function(){
      location.href = "./portfolios.html";
    }, 1500);
  });
  $('#about').click(function(){
    $('.loading-bar').addClass('lb-animation');
    setInterval(function(){
      location.href = "./about.html";
    }, 1500);
  });
  $('#contact').click(function(){
    $('.loading-bar').addClass('lb-animation');
    setInterval(function(){
      location.href = "./contact.html";
    }, 1500);
  });
  $('#films').click(function(){
    $('.loading-bar').addClass('lb-animation');
    setInterval(function(){
      location.href = "./films.html";
    }, 1500);
  });
  $('#gallery').click(function(){
    $('.loading-bar').addClass('lb-animation');
    setInterval(function(){
      location.href = "./gallery.html";
    }, 1500);
  });
  // HOME
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

    // FILMS
    if(document.title == "Rodriguez Films | Films"){
      $('.film-1').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('video-player').src = "https://www.youtube.com/embed/zkbUvTHETds?autoplay=1&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0";
      });
      $('.play-1').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('video-player').src = "https://www.youtube.com/embed/zkbUvTHETds?autoplay=1&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0";
      });
      $('.film-2').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('video-player').src = "https://www.youtube.com/embed/DRrg1gC0fhM?autoplay=1&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0";
      });
      $('.play-2').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('video-player').src = "https://www.youtube.com/embed/DRrg1gC0fhM?autoplay=1&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0";
      });
      $('.film-3').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('video-player').src = "https://www.youtube.com/embed/mbJbR_AV0Fc?autoplay=1&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0";
      });
      $('.play-3').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('video-player').src = "https://www.youtube.com/embed/mbJbR_AV0Fc?autoplay=1&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0";
      });
      $('.film-4').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('video-player').src = "https://www.youtube.com/embed/CoBoAi_tAdA?autoplay=1&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0";
      });
      $('.play-4').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('video-player').src = "https://www.youtube.com/embed/CoBoAi_tAdA?autoplay=1&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0";
      });
      $('.film-5').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('video-player').src = "https://www.youtube.com/embed/KK7-QLDjqdw?autoplay=1&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0";
      });
      $('.play-5').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('video-player').src = "https://www.youtube.com/embed/KK7-QLDjqdw?autoplay=1&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0";
      });
      $('.film-6').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('video-player').src = "https://www.youtube.com/embed/ltpUsDduaOM?autoplay=1&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0";
      });
      $('.play-6').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('video-player').src = "https://www.youtube.com/embed/ltpUsDduaOM?autoplay=1&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0";
      });
      // D-BOX
      $('.display-bg').click(function(){
        $('.display-box').addClass('d-none');
        $('body').removeClass('overflow-hidden');
        document.getElementById('video-player').src = "";
      });
      document.addEventListener('keydown', function(event){
        if(event.key === "Escape"){
        $('.display-box').addClass('d-none');
        $('body').removeClass('overflow-hidden');
        document.getElementById('video-player').src = "";
        }
      });
    };

    // GALLERY
    if(document.title == "Rodriguez Films | Gallery"){
      $('.categ-1').click(function(){
        $('.loading-bar').addClass('lb-animation');
          setInterval(function(){
            location.href = "./landscape.html";
          }, 1500);
      });
      $('.categ-2').click(function(){
        $('.loading-bar').addClass('lb-animation');
          setInterval(function(){
            location.href = "./portrait.html";
          }, 1500);
      });
    }
      
    // PORTRAIT
    if(document.title == "Rodriguez Films | Portrait"){
      // CATEG 1
      $('.categ-1').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = portrait[0];
        index = 0;
      });
      // CATEG 2
      $('.categ-2').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = portrait[1];
        index = 1;
      });
      // CATEG 3
      $('.categ-3').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = portrait[2];
        index = 2;
      });
      // CATEG 4
      $('.categ-4').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = portrait[3];
        index = 3;
      });
      // CATEG 5
      $('.categ-5').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = portrait[4];
        index = 4;
      });
      // CATEG 6
      $('.categ-6').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = portrait[5];
        index = 5;
      });
      // CATEG 7
      $('.categ-7').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = portrait[6];
        index = 6;
      });
      // CATEG 8
      $('.categ-8').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = portrait[7];
        index = 7;
      });
      // CATEG 9
      $('.categ-9').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = portrait[8];
        index = 8;
      });
      // CATEG 10
      $('.categ-10').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = portrait[9];
        index = 9;
      });
      // CATEG 11
      $('.categ-11').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = portrait[10];
        index = 10;
      });
      // CATEG 12
      $('.categ-12').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = portrait[11];
        index = 11;
      });
    // D-BOX
      $('.display-bg').click(function(){
        $('.display-box').addClass('d-none');
        $('body').removeClass('overflow-hidden');
      });
      document.addEventListener('keydown', function(event){
        if(event.key === "Escape"){
          $('.display-box').addClass('d-none');
          $('body').removeClass('overflow-hidden');
        }
      });

      // NAVIGATION
      $('#right').click(function(){
        index++;
        document.getElementById('image-display').src = portrait[index];
        if(index == 12){
          index = 0;
          document.getElementById('image-display').src = portrait[index];
        }
      });
      $('#left').click(function(){
        if(index == 0){
          index = 11;
          document.getElementById('image-display').src = portrait[index];
        }
        index--;
        document.getElementById('image-display').src = portrait[index];
        
      });
    };
    
    // LANDSCAPE
    if(document.title == "Rodriguez Films | Landscape"){
      // CATEG 1
      $('.categ-1').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = landscape[0];
        index = 0;
      });
      // CATEG 2
      $('.categ-2').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = landscape[1];
        index = 1;
      });
      // CATEG 3
      $('.categ-3').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = landscape[2];
        index = 2;
      });
      // CATEG 4
      $('.categ-4').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = landscape[3];
        index = 3;
      });
      // CATEG 5
      $('.categ-5').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = landscape[4];
        index = 4;
      });
      // CATEG 6
      $('.categ-6').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = landscape[5];
        index = 5;
      });
      // CATEG 7
      $('.categ-7').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = landscape[6];
        index = 6;
      });
      // CATEG 8
      $('.categ-8').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = landscape[7];
        index = 7;
      });
      // CATEG 9
      $('.categ-9').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = landscape[8];
        index = 8;
      });
      // CATEG 10
      $('.categ-10').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = landscape[9];
        index = 9;
      });
      // CATEG 11
      $('.categ-11').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = landscape[10];
        index = 10;
      });
      // CATEG 12
      $('.categ-12').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = landscape[11];
        index = 11;
      });
      // CATEG 13
      $('.categ-13').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = landscape[12];
        index = 12;
      });
      // CATEG 14
      $('.categ-14').click(function(){
        $('.display-box').removeClass('d-none');
        $('body').addClass('overflow-hidden');
        document.getElementById('image-display').src = landscape[13];
        index = 13;
      });
      // CATEG 15
      // $('.categ-15').click(function(){
      //   $('.display-box').removeClass('d-none');
      //   $('body').addClass('overflow-hidden');
      //   document.getElementById('image-display').src = landscape[14];
      //   index = 14;
      // });
    // D-BOX
      $('.display-bg').click(function(){
        $('.display-box').addClass('d-none');
        $('body').removeClass('overflow-hidden');
      });
      document.addEventListener('keydown', function(event){
        if(event.key === "Escape"){
          $('.display-box').addClass('d-none');
          $('body').removeClass('overflow-hidden');
        }
      });

      // NAVIGATION
      $('#right').click(function(){
        index++;
        document.getElementById('image-display').src = landscape[index];
        if(index == 14){
          index = 0;
          document.getElementById('image-display').src = landscape[index];
        }
      });
      $('#left').click(function(){
        if(index == 0){
          index = 14;
          document.getElementById('image-display').src = landscape[index];
        }
        index--;
        document.getElementById('image-display').src = landscape[index];
        
      });
    };
    
});