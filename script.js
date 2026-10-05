console.log("This is connected!! Hey CCL!")

// const userComment = "<img src=\"x\" onerror=\"alert('You have been hacked')\" />"

// document.querySelector(".intro").innerHTML = userComment

const newListItem = "<li class='item'>Watermelons</li>"

document.querySelector("#list").innerHTML += newListItem

function addFruits() {
    const list = document.querySelector("#list")

    const pineapple = document.createElement("li")
    pineapple.classList.add("item")
    pineapple.textContent = "Pineapple"

    const papaya = document.createElement("li")
    papaya.classList.add("item")
    papaya.textContent = "Papaya"

    list.append(pineapple, papaya)
}

// addFruits()

// element.addEventListener("event", function)
/* Add Functionality to Add Fruits Button
X 1. select element 
2. add eventListener()
    X 2a. add event that we want to listen for
    X 2b. add the actual function 
3. test
4. fail
5. fix code
6. test again
*/

// const addFruitsButton = document.querySelector("#addFruits")
// addFruitsButton.addEventListener("click", addFruits)

/**
 * Add code for fruits form
 */

const fruits = ["Apples", "Bananas", "Cherries"]
const list = document.querySelector("#list")
const fruitsForm = document.querySelector("#fruitsForm")
const fruitsInput = document.querySelector("#fruitInput")
const deleteFruit = document.querySelector("#deleteFruit")
const sortFruits = document.querySelector("#sortFruits")
const listError = document.querySelector("#listError")

function renderFruits() {
    list.innerHTML = ""; // 1. clear the list

    // 2. loop through the array
    fruits.forEach((fruitName) => {
        // 3. create the element and add the data
        const fruit = document.createElement("li")
        fruit.classList.add("item")
        fruit.textContent = fruitName
        list.append(fruit)
    })
}

fruitsForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const fruitName = fruitsInput.value.trim()

    if (fruitName == "") {
        listError.textContent = "Please enter a fruit name"
        return
    } else if (fruits.includes(fruitName)) {
        listError.textContent = "That fruit is already in the list"
        return
    }
    listError.textContent = "";

    fruits.push(fruitName) // 1. changes the data
    renderFruits() // 2. re-renders the list with the new data
    fruitsForm.reset() // OR fruitsInput.value = ""
})

deleteFruit.addEventListener("click", () => {
    const fruitName = fruitsInput.value.trim()

    if (fruits.includes(fruitName)) {
        const fruitNameIndex = fruits.indexOf(fruitName)
        fruits.splice(fruitNameIndex, 1) // removes 1 item at fruitNameIndex
        renderFruits() // re-renders the list
    }
})

sortFruits.addEventListener("click", () => {
    fruits.sort()
    renderFruits()
})

renderFruits(); // draws the starting fruits when the page loads

// keydown fires when a key goes down. keyup fires when a key is released.
fruitsInput.addEventListener("keydown", (event) => {
    // event.key tells you which key was pressed: like "Enter", "a", or "Escape"
    console.log("Key pressed is: " + event.key)
})

// input fires whenever the input value changes, including pasting. So, if you want to react as the user types, use input
fruitsInput.addEventListener("input", (event) => {
    // event.target is the element that the event happened on.
    console.log("Input is: " + event.target.value) // event.target.value is the current text in an input
})

const title = document.querySelector("#title")

/* events that we can listen for
    - "click" (user clicks something)
    - "dblclick" (user double clicks something)
    - "mouseover" (user puts mouse over something)
    - "keydown" (user presses a key)
    - "keyup" (user releases a key)
    - "input" (user types in an input)
    - "submit" user submits a form
*/

/*
1. create a new element called (div) with an id of counter
2. add sub elements for click, double click and mouseover
3. add 3 button each with a name matching the 3 events above
4. update the count on the screen based on the number of times
each event happens
ex. if the click button is clicked at 1 to the count, if the hover
button has the mouse go over it add one to the count
*/


function titleHover() {
    console.log("Hovering over title(mouseover")
}

title.addEventListener("mouseover", titleHover)
title.style.color = "#efefef"
// title.style.fontSize = "50px" // in css/html it's font-size. in JS, it's fontSize this is called camel case
// title.style.backgroundColor = "#f442df"
title.classList.add("highlight")

//document.querySelector("#myImage").setAttribute("src", "https://marketplace.canva.com/xHPJk/MAHA8XxHPJk/1/tl/canva-MAHA8XxHPJk.jpg")
//

let clickCount = 0
let doubleClickCount = 0
let mouseverCount = 0

//select the buttons
const clickButton = document.querySelector("#clickButton")
const doubleClickButton = document.querySelector("#doubleClickButton")
const mouseoverButton = document.querySelector("#mouseoverButton")

// select the count spans
const clickCountDisplay = document.querySelector("#clickCount")
const doubleClickCountDisplay = document.querySelector("#doubleClickCount")
const mouseoverCountDisplay = document.querySelector("#mouseOverCount")


// add the event listeners and increment

clickButton.addEventListener("click", () => {
    clickCount++
    clickCountDisplay.textContent = clickCount;
})
doubleClickButton.addEventListener("dblclick", () => {
    doubleClickCount++
    doubleClickCountDisplay.textContent = doubleClickCount;
})
mouseoverButton.addEventListener("mouseover", () => {
    mouseverCount++
    mouseoverCountDisplay.textContent = mouseverCount;
})

const todos = [
  { text: "Buy groceries", completed: false },
  { text: "Study JavaScript", completed: false }
];

const todoform = document.querySelector("#todoForm")
const todolist = document.querySelector("#todoList")
const todoinput = document.querySelector("#todoInput")
const todoError = document.querySelector("#todoError");
const todoCount = document.querySelector("#todoCount");

function renderTodos() {
  todolist.innerHTML = "";

  todos.forEach((todoItem) => {
    const todoElement = document.createElement("li");
    todoElement.textContent = todoItem.text;

    if (todoItem.completed) {
      todoElement.classList.add("completed");
    }

    todoElement.addEventListener("click", () => {
      todoItem.completed = !todoItem.completed;
      renderTodos();
    });

    todolist.append(todoElement);
  });

  const itemsLeft = todos.filter((todoItem) => {
    return todoItem.completed === false;
  }).length;

  todoCount.textContent = itemsLeft + " items left";
}
todoform.addEventListener("submit", (e) => {
    e.preventDefault();
    const todoText = todoinput.value.trim()
    if (todoText == "") {
    todoError.textContent = "Please enter a to-do";
        return;
    }
    todoError.textContent = "";
    todos.push({ text: todoText, completed: false })
    renderTodos()
    todoform.reset()
})
renderTodos()
 