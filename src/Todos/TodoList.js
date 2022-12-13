import React from 'react';
import {connect} from "react-redux";
import TodoListItem from './TodoListItem';
import './TodoList.css';
import NewTodoForm from "./newTodoForm";
import {removeTodo, markTodo} from "../action";

const TodoList = ({ todos = [], onRemovePressed, onMarkPressed }) => (
    <div className="list-wrapper">
        <NewTodoForm></NewTodoForm>
        {todos.map(todo => <TodoListItem todo={ todo }
                                         onRemovePressed={onRemovePressed}
                                         onMarkPressed = {onMarkPressed}/>)}
    </div>
)

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onMarkPressed: text => dispatch(markTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);