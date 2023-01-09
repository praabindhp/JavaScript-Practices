// Import Packages
const readline = require('readline-sync'); // npm i readline-sync

let taskArray = [];
let taskObject = {};

// Getting Name Of User To Manage The ToDo
let username = readline.question('Enter Your Name : ');
taskObject.username = username;

let numberOfTask = readline.question('Enter Number Of Tasks : ')
for (let i = 1; i <= numberOfTask; i++) {
    let task = readline.question('Enter Task ' + i + ' : ');
    taskArray.push(task);
}

function displayTasks(taskArray) {
    let n = 0;
    const work = taskArray.map(function(work) {
        n += 1;
        console.log('[' + n + '] : ' + work);
    })
}

taskObject.tasks = taskArray;

console.log('\nTasks : ' + taskArray);
console.log(taskObject);
console.log('\nTasks To Be Done : ');
displayTasks(taskArray);

console.log('\nEnter Completed Tasks : ')

const taskCompleted = [];

while (true) {
    let taskMarkedCompleted = readline.question('Task Completed : ');
    if (taskMarkedCompleted == '') {
        console.log('Updated The Status !');
        break;
    } else {
        taskCompleted.push(Number(taskMarkedCompleted));
    }
}

console.log('\nCompleted Task Number : ' + taskCompleted);

const completedTask = [];
for (let num of taskCompleted) {
    completedTask.push(taskObject.tasks[num]);
    taskObject.tasks.pop(taskObject.tasks[num]);
}

taskObject.completed = completedTask;

console.log(taskObject);
console.log('\nWelcome, To Todo Application')
console.log('\nHowdy, ' + taskObject.username + ' !')
console.log('Your Current Task Status : ');
console.log('\nTask(s) Completed : ')
displayTasks(taskObject.completed)
console.log('\nTask(s) Incomplete : ')
displayTasks(taskObject.tasks)

// End Of Program

// Output

// Enter Your Name : Praabindh
// Enter Number Of Tasks : 3
// Enter Task 1 : Edit
// Enter Task 2 : Copy
// Enter Task 3 : Paste

// Tasks : Edit,Copy,Paste
// { username: 'Praabindh', tasks: [ 'Edit', 'Copy', 'Paste' ] }

// Tasks To Be Done : 
// [1] : Edit
// [2] : Copy
// [3] : Paste

// Enter Completed Tasks : 
// Task Completed : 2
// Task Completed : 1
// Task Completed : 
// Updated The Status !

// Completed Task Number : 2,1
// {
//   username: 'Praabindh',
//   tasks: [ 'Edit' ],
//   completed: [ 'Paste', 'Copy' ]
// }

// Welcome, To Todo Application

// Howdy, Praabindh !
// Your Current Task Status : 

// Task(s) Completed : 
// [1] : Paste
// [2] : Copy

// Task(s) Incomplete : 
// [1] : Edit