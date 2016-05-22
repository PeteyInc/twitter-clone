// 1. Always use proper indentation in your css and html
// 2. An "#" selector or 'id' will override a '.' selector or 'class'
// 3. A '.' selector will override a native selector, like 'div'
// id = #
// class = .

$(document).ready(function() {
  $('#tweet-controls').css('display', 'none');
  $('.stats').css('display', 'none');
  $('.reply').css('display', 'none');
  $('.tweet-actions').css('display', 'none');

  $('textarea').on('click', function() {
    $(this).height('200%');
    $('#tweet-controls').toggle();
  });

// Hover to reveal tweet-actions
  $('.content').hover(function() {
    $(this).find('.tweet-actions').show();},
    function() { $(this).find('.tweet-actions').hide();
  });

// Click to reveal stats
  $('.tweet').click(function() {
    $(this).find('.stats').toggle();
    $(this).find('.reply').toggle();
  });


});
