$(function() {

  $('button.toggle-popup').on('click', function(event) {
    $('.popup-wrapper').addClass('active');
  });

  $('.popup .exit').on('click', function() {
    hidePopUp();
  });

  $('body').on('click', function(event) {
    event.preventDefault();
    if ($(event.target).hasClass('popup-wrapper'))
      hidePopUp();
    /* Act on the event */
  });

  

  // timer time setting

  var date = new Date($("#date").text());
  var currentDate = new Date();
  var time = (date.getTime()-currentDate.getTime())/1000;
    console.log(time);
  if(time > 359999 || time < 0)
    time = 0;

  var clock = $('.timer').FlipClock(time, {
      clockFace: 'DailyCounter',
      countdown: true
    });
});

function hidePopUp() {
  $('.popup-wrapper').removeClass('active');
}