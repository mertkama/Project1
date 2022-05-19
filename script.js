const btnAddTask =document.getElementById("btn-add-task");
const txtAddTask=document.getElementById("txt-add-task");
const taskList=document.querySelector("#container-task-list .task-list");
const btnAllTasksComplete=document.getElementById
("btn-all-tasks-complete");
const tasks =[];
let newTaskText ="";

function eventListeners(){

btnAddTask.addEventListener("click", addTask)

}


function addTask(){
   // console.log(e.target);
   
   newTaskText = txtAddTask.value.trim();
   if(newTaskText!==null && newTaskText!==""){
       tasks.push(newTaskText);
       addTaskUI(tasks[tasks.length-1]);
      // addTaskLocalStorage()
   }

}

function addTaskUI(newTaskText){
            /* <div class ="task">
                    <div class = "task-text">
                        Saat 15:00'de 256987
                        numaralı müşteri ile görüş.
                    </div>
                    <div class ="task-icon">
                        <span class ="icon icone-done"></span>
                    </div>
                </div>*/
    const task=document.createElement("div");
    const taskText=document.createElement("div");
    const taskIcon=document.createElement("div");
    const icon= document.createElement("span");

    task.className = "task";
    taskText.className = "task-text";
    taskIcon.className = "task-icon";
    icon=className="icon icon done";


    taskText.innerText = newTaskText;


    taskIcon.appendChild(icon);
    task.appendChild(taskText);
    task.appendChild(taskIcon);
    taskList.insertBefore(task,btnAllTasksComplete);

}
