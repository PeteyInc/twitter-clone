$(document).ready(function() {
  $('#tweet-controls').hide();
  $('textarea').on('click', function() {
    $(this).height('200%');
    $('#tweet-controls').show();
  });
});
