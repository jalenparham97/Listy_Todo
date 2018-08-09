"use strict";

function TodoController() {
  const vm = this;
  vm.todoList = [];

  vm.addTodo = (newTodo) => {
    vm.todoList.push({
      task: newTodo.task,
      completed: false
    });
  }

  vm.deleteTodo = (index) => {
    vm.todoList.splice(index, 1);
  }
}

angular
  .module("todoApp")
  .controller("TodoController", TodoController);