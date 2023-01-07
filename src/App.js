import React from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';
import TodoList from "./Todos/TodoList";

const AppContainer = styled.div`
  margin: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #222222;
`;

const App = () => (
    <AppContainer>
        <TodoList></TodoList>
    </AppContainer>
);

export default hot(module)(App);
