/* TASK FORM */
var task_data_form = document.getElementById('task-data');
var task_data_input = document.getElementById('task-data-input');

task_data_form.onsubmit = function(event) {
  event.preventDefault();
  var task_text = task_data_input.value.trim(' ');
  if (task_text) {
    var task = document.createElement('LI');
    task.textContent = task_text;
    task_list.appendChild(task);
    task_data_input.value = '';
  }
}

/* actual task list */
var task_list = document.getElementById('task-list');
~                                                      
