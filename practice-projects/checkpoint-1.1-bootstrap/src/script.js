import 'bootstrap/dist/css/bootstrap.min.css';


function addToDo() {
    const textField = document.querySelector("#addField");

    addToDoValue(textField.value);
    saveTask(textField.value, 0)

    textField.value = ''
}

function saveTask(text, checked) {
    console.log(localStorage.getItem("tasks"))
    let tasks = JSON.parse(localStorage.getItem("tasks"))
    console.log('saving', tasks)
    if (tasks){
        tasks.push({"text": text, "checked": checked})
    } else {
        tasks = [{"text": text, "checked": checked}]
    }
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

function updateTask(text, checked) {
    const tasks = JSON.parse(localStorage.getItem("tasks"))
    console.log('update task')
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
    inputEl.classList.add("form-check-input", "me-3")
    inputEl.addEventListener('change', check)
    listEl.classList.add("list-group-item")
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

function setup() {
    // Bind button
    document.querySelector('#addButton').addEventListener('click', addToDo);

    let tasks = JSON.parse(localStorage.getItem("tasks"))

    if (!tasks) return;
    tasks.forEach(task => {
        addToDoValue(task['text'], task['checked'])
    });
}

document.addEventListener("DOMContentLoaded", setup)
