document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("taskForm");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const showPopupBtn = document.getElementById("showPopupBtn");
    const popup = document.getElementById("popup");
  
    // 1. Add task with preventDefault
    taskForm.addEventListener("submit", (e) => {
      e.preventDefault(); // To Prevent form reload
  
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
          <span class="task-text">${taskText}</span>
          <button class="delete-btn">🗑️</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
      }
    });
  
    // 2. Event delegation for task list
    taskList.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove(); // Delete task
      } else if (e.target.classList.contains("task-text")) {
        e.target.classList.toggle("completed"); // Toggle completion
      }
    });
  
    // 3. Custom event to show popup
    showPopupBtn.addEventListener("click", () => {
      const popupEvent = new CustomEvent("show-welcome");
      document.dispatchEvent(popupEvent);
    });
  
    document.addEventListener("show-welcome", () => {
      popup.classList.remove("hidden");
  

      setTimeout(() => {
        popup.classList.add("hidden");
      }, 3000);
    });
  });
  