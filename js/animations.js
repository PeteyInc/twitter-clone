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

  $('.content').hover(function() {

    $('.tweet-actions').toggle();
  })


});
