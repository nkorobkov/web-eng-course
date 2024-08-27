
function addToDo() {
    const textField = document.querySelector("#addField");

    addToDoValue(textField.value);
    //saveTask(textField.value, 0)

    textField.value = ''
}

function saveTask(text, checked) {
    tasks = JSON.parse(localStorage.getItem("tasks"))
    console.log('saving', tasks)
    if (tasks){
        tasks.push({"text": text, "checked": checked})
    } else {
        tasks = [{"text": text, "checked": checked}]
    }
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

function updateTask(text, checked) {
    tasks = JSON.parse(localStorage.getItem("tasks"))

    tasks.forEach((task) => {
        if(task['text'] == text) {
            task.checked = checked
        }
    })
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

function addToDoValue(text, checked = 0) {
    console.log("Adding todo: " + text);
    const list = document.getElementById("todoList");
    const listEl = document.createElement("li");

    const inputEl = document.createElement("input")
    inputEl.type = "checkbox"
    inputEl.addEventListener('change', check)

    listEl.appendChild(inputEl);
    const spanEl = document.createElement('span')
    spanEl.innerText = text;
    
    if (checked) {
        inputEl.setAttribute("checked", true)
        spanEl.classList.add("completed")
    }
    listEl.appendChild(spanEl);
    list.appendChild(listEl)
}


function check() {
    console.log(this.nextElementSibling)
    let textSpan = this.nextElementSibling
    if(this.checked){
        textSpan.classList.add("completed")
    } else {
        textSpan.classList.remove("completed")
    }
    updateTask(textSpan.innerText, this.checked)
}

function restore() {
    let tasks = JSON.parse(localStorage.getItem("tasks"))

    if (!tasks) return;
    tasks.forEach(task => {
        addToDoValue(task['text'], task['checked'])
    });
}

document.addEventListener("DOMContentLoaded", restore)
