import React, { useState } from "react";
import { connect } from 'react-redux';
import { createTodo } from "../action";
import './newTodoForm.css'

const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');
    return (
    <div className="new-todo-form">
        <input className="new-todo-input"
               type="text"
               placeholder="type your new todo here"
               value={inputValue}
               onChange={e => setInputValue(e.target.value)}
        />
        <button
            onClick={() => {
                const isDuplicatedText =
                    todos.some(todo => todo.text === inputValue)
                if(!isDuplicatedText) {
                    onCreatePressed(inputValue);
                    setInputValue('');
                }
            }}
            className="new-todo-button">Create Todo</button>
    </div>)
};
const mapStateProps = state => ({
    todos: state.todos,
});

const mapDispatchProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text))
});

export default connect(mapStateProps, mapDispatchProps) (NewTodoForm);