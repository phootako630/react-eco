import React from 'react';
import './TodoListItem.css'

const TodoListItem = ({todo, onRemovePressed, onMarkPressed}) => (
    <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <div>
            {todo.isCompleted
                ? null
                : <button
                    onClick={() => onMarkPressed(todo.text)}
                    className="completed-button">Mark as Completed</button>
            }
            <button
                onClick={() => onRemovePressed(todo.id)}
                className="remove-button">Remove
            </button>
        </div>
    </div>
);

export default TodoListItem;