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

// Character count
  $('.tweet-compose').keyup(function() {
    var count = 140-$('.tweet-compose').val().length;
    $('#char-count').html(count);
    if (count < 10) {
      $('#char-count').css('color', 'red');
    } else {
      $('#char-count').css('color', 'inherit');
    } if (count == 140 || count < 0) {
      $('#tweet-controls button').prop('disabled', true);
    } else {
      $('#tweet-controls button').prop('disabled', false);
    }
  });


});
