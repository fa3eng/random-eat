import React from "react";

import { AddTodo } from "./addTodo";
import { ToDoList } from "./todoList";

const Todo = () => (
  <>
    <h5>
      <span role="img" aria-label="img">
        🌰&nbsp;
      </span>
      A simple TODO application based on&nbsp;
      <a href="https://rematch.github.io/rematch">rematch</a>
    </h5>
    <AddTodo />
    <ToDoList />
  </>
);

export { Todo };
