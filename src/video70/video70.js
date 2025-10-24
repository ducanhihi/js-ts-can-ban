console.log("video 70")

const saveBtn = document.getElementById("btnSave")
const inputTodo = document.getElementById("name")


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
if (saveBtn) {
    saveBtn.addEventListener("click", () => {
        const myTodo = {
            id: getRandomInt(1, 100000000000000),
            name: inputTodo.value
        }

        const currentTodoStr = localStorage.getItem("todo")
        if (currentTodoStr) {
            const currentTodo = JSON.parse(currentTodoStr)

            currentTodo.push(myTodo)
            localStorage.setItem("todo", JSON.stringify([currentTodo]))
        }
        else {
            localStorage.setItem("todo", JSON.stringify([myTodo]))
        }
        window.location.href = "video70.html"
    })
}

const generateTodoTable = () => {
    const todoListStr = localStorage.getItem("todo")
    if (todoListStr) {
        const todoList = JSON.parse(todoListStr)
        console.log(todoList)
    }
}
generateTodoTable();

