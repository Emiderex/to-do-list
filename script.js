function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const completedCounter = document.getElementById('completedCounter');

  if (taskInput.value.trim() !== '') {
      const newTask = document.createElement('li');
      const taskText = document.createElement('span');
      taskText.textContent = taskInput.value;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'delete-button';

      newTask.appendChild(taskText);
      newTask.appendChild(deleteButton);
      taskList.appendChild(newTask);

      taskInput.value = '';

      newTask.addEventListener('click', function (event) {
          if (!event.target.classList.contains('delete-button')) {
              newTask.classList.toggle('completed');
              updateCompletedCounter();
          }
      });

      deleteButton.addEventListener('click', function (event) {
          event.stopPropagation();
          taskList.removeChild(newTask);
          updateCompletedCounter();
      });
  }
}

function updateCompletedCounter() {
  const completedCounter = document.getElementById('completedCounter');
  const completedTasks = document.querySelectorAll('.completed').length;
  completedCounter.textContent = `Completed Tasks: ${completedTasks}`;
}
