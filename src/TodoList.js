import React from 'react';
import {Todo} from './Todo'

function TodoList(props){
  const lista = props.todolist;
  const listItems = lista.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

export default TodoList;
