//task(id, title,isCompleted)
//UI
//LS

import UI from './UI.js';
import Task from './Task.js';

const ui = new UI();

ui.showAllTasks();

document.querySelector('.AddTaskBtn').addEventListener('click', e => {
    const taskTitle = document.querySelector('#newtaskID').value;
    //console.log(taskTitle);

    if (taskTitle.length > 0) {

        const task = new Task(taskTitle);

        ui.addToUI(task);
        //console.log(task);

        ui.resetForm();

    }

});

document.querySelector('.task-list').addEventListener('click', e =>{

    if(e.target.className.includes('task__op_edit')){
        ui.editTask(e);
    }

    //console.log(e.target.className);

    if(e.target.className.includes('task__op_delete')){
       // console.log('Delete Button Pressed');

       ui.deleteTask(e);
    }

    if(e.target.className.includes('task-check')){
        ui.completeTask(e);
    }

});

document.querySelector('.EditTaskBtn').addEventListener('click', (e) => {
    ui.updateTask(e);
  });
  document.querySelector('.CancelTaskBtn').addEventListener('click', (e) => {
    ui.cancelTask(e);
  });
