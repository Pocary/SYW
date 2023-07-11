window.addEventListener('load', function () {
    var curtain = document.querySelector('.curtain');
    
    // curtain.classList.add('fade-in');
    // setTimeout(function () {
    //     curtain.classList.add('fade-out');
    // }, 600);
    
    
});

function delayedRedirect(url, delay) {
    setTimeout(function() {
      window.location.href = url;
    }, delay);
  }
$(function(){
    $('.curtainButton').click(function(){
      $('curtain').css('animation-play-state','running');
    });
  });

  