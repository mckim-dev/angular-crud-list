angular.module('todoApp', [])
    .controller('TodoController', function () {
        var todoCtrl = this;
        var idCount = 0;

        todoCtrl.showTable = false;

        todoCtrl.todos = [];

        todoCtrl.addTodoItem = function () {
            idCount++;
            let d = new Date()
            let dd = todoCtrl.duedate.toLocaleString().split(',')[0]
            let todayDate = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`
            todoCtrl.todos.push({ name: todoCtrl.name, description: todoCtrl.description, date: todayDate, id: idCount, duedate: dd, editName: false, editDescription: false });
            todoCtrl.name = '';
            todoCtrl.description = '';
            todoCtrl.duedate = '';
            todoCtrl.date = null;
            todoCtrl.id = null;
            todoCtrl.showTable = true;
        };

        todoCtrl.remove = function (todo) {
            console.log(todo.id);
            for (i in todoCtrl.todos) {
                if (todoCtrl.todos[i].id == todo.id) {
                    todoCtrl.todos.splice(i, 1);
                }
            }
            if (todoCtrl.todos.length < 1) {
                todoCtrl.showTable = false;
            }
        };

        todoCtrl.editName = function (todo) {
            console.log("edit was clicked");
            todo.editName = true;
            console.log(todo.editName);
        };
        todoCtrl.editDescription = function (todo) {
            console.log("edit was clicked");
            todo.editDescription = true;
            console.log(todo.editDescription);
        };

        todoCtrl.updateName = function (todo) {
            console.log("Name update was clicked");
            if (todoCtrl.todo.name) {
                todo.name = todoCtrl.todo.name;
                todo.editName = false;
                console.log(todo.editName);
                todoCtrl.todo.name = '';
            } else {
                alert("You must enter a name");
            }
        };

        todoCtrl.updateDescription = function (todo) {
            console.log("Description update was clicked");
            if (todoCtrl.todo.description) {
                todo.description = todoCtrl.todo.description;
                todo.editDescription = false;
                console.log(todo.editDescription);
                todoCtrl.todo.description = '';
            } else {
                alert("You must enter a description");
            }
        };
    })