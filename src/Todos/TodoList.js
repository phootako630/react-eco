import React from 'react';
import {connect} from "react-redux";
import TodoListItem from './TodoListItem';
import './TodoList.css';
import NewTodoForm from "./newTodoForm";
import {removeTodo} from "../action";

const TodoList = ({ todos = [], onRemovePressed }) => (
    <div className="list-wrapper">
        <NewTodoForm></NewTodoForm>
        {todos.map(todo => <TodoListItem todo={ todo } onRemovePressed={onRemovePressed}/>)}
    </div>
)

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);