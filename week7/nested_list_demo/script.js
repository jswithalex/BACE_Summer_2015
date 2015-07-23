// select items in a way similar to document.querySelectorAll
$('#menu > li').on('click',function(e) {
  if ($(this).children().length) {
    $(this).children().not('span').toggleClass('hidden');
  }
});
