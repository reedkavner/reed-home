// smooth scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      console.log(target);
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


//hidden email
var addressText = "at r"+"@"+"reed.me"
var link = $("#hidden-address");
link.click(function(){
  link.text(addressText);
  link.contents().unwrap();
  $('.tooltip').hide();
});

//init tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});