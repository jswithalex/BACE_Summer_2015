var mylists = document.getElementById('mylists-header');
mylists.onclick = function(event) {
  var i;
  var lists = document.getElementsByClassName('hidden');
  for (var i = 0; i < lists.length; i++)
  {
    lists[i].style.display = 'block';
  }
  console.log(lists);
}
