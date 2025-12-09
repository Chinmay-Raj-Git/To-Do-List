function addTask(task) {
    const taskItem = document.createElement("li")
    taskItem.textContent = task
    document.getElementById("list").appendChild(taskItem)
    // alert(task + " has been added")
    removeInputBox()
}

function getInput() {
    const inpDiv = document.createElement("div")
    inpDiv.className = "inputBox";
    inpDiv.id = "inputBox";

    const inp = document.createElement("input")
    inp.id = "task"
    inp.placeholder = "Enter your task..."
    inp.type = "text"

    const butt = document.createElement("button")
    butt.textContent = "Done"
    butt.className = "done"
    butt.addEventListener("click", function (e) {
        const task = document.getElementById("task").value
        addTask(task)
    })

    inpDiv.appendChild(inp)
    inpDiv.appendChild(butt)
    document.body.appendChild(inpDiv)
}

function removeInputBox(){
    document.getElementById("inputBox").remove()
}