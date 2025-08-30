const text = document.querySelector("#textbox");
const addTaskBtn = document.querySelector("#add-task");

addTaskBtn.addEventListener("click", addTaskBtnOnclick);

function addTaskBtnOnclick() {
  const addList = document.createElement("li");
  addList.setAttribute("class", "task");
  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "del-btn");

  deleteBtn.textContent = "x";
  const taskText = text.value;
  addList.textContent = taskText;

  addList.appendChild(deleteBtn);
  deleteBtn.addEventListener("click", function (e) {
    e.target.parentNode.remove();
  });

  document.querySelector("#list-container").append(addList);
}
