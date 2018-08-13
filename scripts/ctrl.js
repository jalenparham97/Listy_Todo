"use strict";

function TodoController() {
  const vm = this;
  vm.todoList = [];

  vm.addTodo = (newTodo) => {
    vm.todoList.push({
      task: newTodo.task,
      completed: false,
      edit: false
    });
    console.log(vm.task);
  }

  vm.deleteTodo = (index) => {
    vm.todoList.splice(index, 1);
  }

  vm.completedTask = (index) => {
    vm.todoList[index].completed = true;
    console.log("completed");
  } 

  vm.editTask = (index) => {
    vm.todoList[index].edit = true;
    
  } 

  vm.editTaskDone = (index) => {
    vm.todoList[index].edit = false;
    console.log("task has been editted");
  } 
}

angular
  .module("todoApp")
  .controller("TodoController", TodoController);