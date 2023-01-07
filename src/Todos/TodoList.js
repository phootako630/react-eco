import React, {useEffect} from 'react';
import {connect} from "react-redux";
import TodoListItem from './TodoListItem';
import styled from 'styled-components';
import NewTodoForm from "./newTodoForm";
import {removeTodo, markTodo} from "../action";
import {displayAlert, loadTodos, markTodoAsCompletedRequest, removeTodoRequest} from "./thunks";
import {getCompleteTodos, getIncomleteTodos, getTodosLoading} from "./selectors";

const ListWrapper = styled.div`
      max-width: 700px;
      margin: auto;
`;

const TodoList = ({ completedTodos, incompletedTodos, onRemovePressed, onMarkPressed, isLoading, startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos()
    }, [ ]);
    
    
    const  loadingMessage = <div>Loading todos...</div>;
    
   const content = (
       <ListWrapper>
           <NewTodoForm></NewTodoForm>
           <h3>Incompleted:</h3>
           {incompletedTodos.map(todo => <TodoListItem todo={ todo }
                                            key={todo.index + todo.text}
                                            onRemovePressed={onRemovePressed}
                                            onMarkPressed = {onMarkPressed}/>)}
           <h3>Completed:</h3>
           {completedTodos.map(todo => <TodoListItem todo={ todo }
                                                       key={todo.index + todo.text}
                                                       onRemovePressed={onRemovePressed}
                                                       onMarkPressed = {onMarkPressed}/>)}
       </ListWrapper>

    );
   return isLoading ? loadingMessage : content;
};
const mapStateToProps = state => ({
    isLoading: getTodosLoading(state),
    completedTodos: getCompleteTodos(state),
    incompletedTodos: getIncomleteTodos(state),
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onMarkPressed: id => dispatch(markTodoAsCompletedRequest(id)),
    onDisplayAlertClicked: () => dispatch(displayAlert()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);