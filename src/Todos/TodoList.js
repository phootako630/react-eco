import React from 'react';
import newTodoForm from "./newTodoForm";
import TodoListItem from './TodoListItem';
import './TodoList.css';
import NewTodoForm from "./newTodoForm";

const  TodoList = ({ todos = [{ text: 'Hello'}] }) => (
    <div className="list-wrapper">
        <NewTodoForm></NewTodoForm>
        {todos.map(todo => <TodoListItem todo={ todo } />)}
    </div>
)

export default TodoList;