/* TITLE FORM */

var edit_mode = false;
var task_title_form = document.getElementById('task-title');
var task_title_h1 = document.getElementById('task-title-h1');

/* the input field that replaces the h1 when we click on it*/
var task_title_input = document.createElement('INPUT');
task_title_input.id = 'task-title-input';

/* when we click on task list title, turns into a form input */
task_title_h1.onclick = function(event) {
  edit_mode = true;
  var parent = this.parentNode;
  parent.replaceChild(task_title_input,this);
  task_title_input.focus();
}

/* when we submit that new name, it takes effect if non-empty */
task_title_form.onsubmit = function(event) {
  event.preventDefault();
  var new_title = task_title_input.value.trim(' ');
  if (new_title) {
    task_title_h1.textContent = new_title;
    this.replaceChild(task_title_h1,task_title_input);
  }
  else {
    this.replaceChild(task_title_h1,task_title_input);
  }
  edit_mode = false;
}

/* 
  when we click on the document body after having triggered a new title
  if title isn't empty, insert new title, otherwise revert to old
*/
document.body.onclick = function(event) {
  if (edit_mode && event.target.nodeName === 'BODY') {
    var new_title = task_title_input.value.trim(' ');
    if (new_title) {
      task_title_h1.textContent = new_title;
      task_title_form.replaceChild(task_title_h1,task_title_input);
    }
    else {
      task_title_form.replaceChild(task_title_h1,task_title_input);
    }
    edit_mode = false;
  }
}
