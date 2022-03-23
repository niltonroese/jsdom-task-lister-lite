document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
 
  const taskUl = document.getElementById("tasks");
 
  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskLi = document.createElement('li');
    //elements inside list
    const deleteButton = document.createElement('button');
    const updateButton = document.createElement('button');
    const spanText = document.createElement('span');
 
    spanText.innerHTML = newTaskDescription.value;
    taskUl.append(taskLi);
    deleteButton.innerHTML = 'X';
    updateButton.innerHTML = 'Update';
 
    taskLi.append(spanText);
    taskLi.append(deleteButton);
    taskLi.append(updateButton);
   
    updateButton.addEventListener('click', (event) => {
      spanText.innerHTML = newTaskDescription.value;
      e.target.reset();
    })

    deleteButton.addEventListener('click', (event) => {
      taskLi.remove();
    })
    e.target.reset();
  });
});
