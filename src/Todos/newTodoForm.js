import React, { useState } from "react";
import { connect } from 'react-redux';
import './newTodoForm.css'
import {addTodoRequest} from "./thunks";
import {getTodos} from "./selectors";

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
    todos: getTodos(state),

});

const mapDispatchProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodoRequest(text))
});

export default connect(mapStateProps, mapDispatchProps) (NewTodoForm);