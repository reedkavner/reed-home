// it's gross in here. please don't look. fine, you can look, but never tell me that you looked.

$(document).ready(function() {

  var envelope = $(".cheap-viagra-from-canada");
  var msg = $("#email-text");

  envelope.bind("mouseover", function() {
    msg.text("Click to reveal address. Unless you're a robot. No robots please.");
  });

  envelope.bind("mouseout", function() {
    msg.text("");
  });

  $(".cheap-viagra-from-canada").bind("click",
    function() {
      $(".cheap-viagra-from-canada").unbind("mouseover").unbind("mouseout").unbind("click")
      msg.html("r@" + "reed.me - <span class='copy-email' id='copy-text'>Copy it to your clipboard?</span>");
      $("footer").addClass('email');
    }
  )

  var footerClip = new ClipboardJS('.copy-email', {
    text: function(trigger) {
      return "r@" + "reed.me";
    }
  });

  footerClip.on('success', function(e) {
    $('#copy-text').text("Copied!");
    $('#copy-text').removeClass("copy-email");

  });

  var introClip = new ClipboardJS('.intro-email', {
    text: function(trigger) {
      return "r@" + "reed.me";
    }
  });

  introClip.on('success', function(e) {
    $('#intro-copied').text(", which is now copied to your clipboard!")
    $('.intro-email').removeClass("intro-email");

  });

});
