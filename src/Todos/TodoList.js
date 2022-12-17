import React, {useEffect} from 'react';
import {connect} from "react-redux";
import TodoListItem from './TodoListItem';
import './TodoList.css';
import NewTodoForm from "./newTodoForm";
import {removeTodo, markTodo} from "../action";
import {displayAlert, loadTodos, markTodoAsCompletedRequest, removeTodoRequest} from "./thunks";


const TodoList = ({ todos = [], onRemovePressed, onMarkPressed, isLoading, startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos()
    }, [ ]);
    
    
    const  loadingMessage = <div>Loading todos...</div>;
    
   const content = (
       <div className="list-wrapper">
           <NewTodoForm></NewTodoForm>
           {todos.map(todo => <TodoListItem todo={ todo }
                                            key={todo.index + todo.text}
                                            onRemovePressed={onRemovePressed}
                                            onMarkPressed = {onMarkPressed}/>)}
       </div>

    );
   return isLoading ? loadingMessage : content;
};
const mapStateToProps = state => ({
    isLoading: state.isLoading,
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onMarkPressed: id => dispatch(markTodoAsCompletedRequest(id)),
    onDisplayAlertClicked: () => dispatch(displayAlert()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);