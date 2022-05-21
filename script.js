
/*
  Reference: 
    https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
    https://javascript.info/indexeddb
*/

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const taskList = document.getElementById('task-list');
const title = document.getElementById('title');
const year = document.getElementById('year');
const month = document.getElementById('month')
const day = document.getElementById('day');
const hour = document.getElementById('hour');
const min = document.getElementById('min');
const submit = document.getElementById('submit');

MONTHS.forEach(m => {
  var opt = document.createElement('option');
    opt.value = m;
    opt.innerHTML = m;
    month.appendChild(opt);
})

let db;

let newTask = [
  { 
    title: "",
    hours: 0,
    minutes: 0,
    day: 0,
    month: "",
    year: 0,
  }
];

/**** first task
create a "toDoList" database in indexeddb
.
.
.
.
.
.
.
.
.

/**** first task ended *****/

/**** second task
// making an "tasks" objectstore and add task fields
.
.
.
.
.
.
.
.
.

/**** second task ended *****/

/**** third task
//get task values from inputs and add new task to "tasks" objectStore
function addTask() {
  let newItem = [
    { 
      title: title.value,
      year: year.value,
      month: month.value,
      day: day.value,
      hour: hour.value,
      min: min.value
    }
  ];
.
.
.
.
.
.
.
.
.
  let objectStoreRequest = ???????;
  objectStoreRequest.onsuccess = event => {
    .
    .
    .
  };
}
/**** third task ended *****/


/**** fourth task *****/
//create a list of tasks and show them.
function displayData() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.lastChild);
  }
/*
.
.
.
.
.
.
.
.
.
*/
}
function createListItem(contents) {
  const listItem = document.createElement('li');
  listItem.textContent = contents;
  return listItem;
}
/**** fourth task ended *****/


/**** fifth task *****/
//be able to delete task
function deleteItem(event) {
  /*let transaction = ???????;
  transaction.oncomplete = () => {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
  };*/
};
/**** fifth task ended *****/
