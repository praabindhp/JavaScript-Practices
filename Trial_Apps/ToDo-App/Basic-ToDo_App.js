const todos = [{
    id: 1,
    task: 'Take Out Trash',
    isCompleted: true
}, {
    id: 2,
    task: ' Meeting With CEO',
    isCompleted: true
}, {
    id: 3,
    task: 'Dentist Appointment',
    isCompleted: false
}];

// forEach, map, filter
const todoCompleted = todos.filter(function(todo) {
        return todo.isCompleted === true;
    })
    .map(function(todo) {
        return todo.task;
    })

const todoInCompleted = todos.filter(function(task) {
        return task.isCompleted === false;
    })
    .map(function(task) {
        return task.task
    })
console.log(`Completed Tasks : ${todoCompleted}`);
console.log(`Tasks ToDo : ${todoInCompleted}`);