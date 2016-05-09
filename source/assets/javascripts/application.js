//= require_tree .

$(window).load(function(){
  if(Math.random() > 0.5) {
    $('#header').empty().html('Allisa <span class="amp">&amp;</span> Gabe');
  } else {
    $('#header').empty().html('Gabe <span class="amp">&amp;</span> Allisa');
  }
  $('#header').animate({opacity: 1}, 2000);
});
