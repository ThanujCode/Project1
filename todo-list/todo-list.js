//alert("hi");

let list = [];
let saved = JSON.parse(localStorage.getItem("data"));
if (Array.isArray(saved)) {
  list = saved;
}

let main = document.getElementsByClassName("main-section")[0];
//taking text from input bar and clearing input field
function create_task() {
  let text_box = document.getElementsByClassName("text-bar");
  let val = text_box[0].value;
  list.push(val);
  text_box[0].value = "";
  save_data();
  //add_task(val);
  render();
}

function delete_task(e) {
  list.splice(list.indexOf(e.target.id), 1);
  save_data();
  //console.log(e);
  render();
}

//creating button element and assigning text and class name
function create_remove_button(val) {
  let button = document.createElement("button");
  button.innerHTML = "&#8722;";
  button.className = "remove-button";
  button.id = val;
  //button.addEventListener("click", delete_task);
  button.onclick = delete_task;
  //console.log(button.id);
  return button;
}

//creating para element and assigning text and class name
function create_par(val) {
  let task = document.createElement("p");
  task.innerText = val;
  task.className = "task";
  return task;
}

function add_task(val) {
  //creating div element and assinging class name
  let task_bar = document.createElement("div");
  task_bar.className = "task-list";

  //appending both para and buttons elements into div
  let para_box = document.createElement("div");
  para_box.className = "para_box";
  para_box.appendChild(create_par(val));
  task_bar.appendChild(para_box);
  task_bar.appendChild(create_remove_button(val));

  //appending div to the body
  main.appendChild(task_bar);
}

function render() {
  main.innerHTML = "";
  let len = list.length;
  for (let i = 0; i < len; ++i) {
    add_task(list[i]);
    //console.log(list[i]);
  }
}

function save_data() {
  localStorage.setItem("data", JSON.stringify(list));
}
/*

*/
