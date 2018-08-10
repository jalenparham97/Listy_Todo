"use strict";

function TodoController() {
  const vm = this;
  vm.todoList = [];

  vm.addTodo = (newTodo) => {
    vm.todoList.push({
      task: newTodo.task,
      completed: false
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
}

angular
  .module("todoApp")
  .controller("TodoController", TodoController);