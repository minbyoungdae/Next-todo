import React from 'react';
import styled from 'styled-components';
import { TodoType } from '../types/todo';

const Container = styled.div`
  width: 100%;

  .todo-list-header {
    padding: 12px;
    border-bottom: 1px solid gray;

    .todo-list-last-todo {
      font-size: 14px;
      span {
        margin-left: 8p;
      }
    }
  }
`;

interface IProps {
  todos: TodoType[];
}

const TodoList: React.FC<IProps> = ({ todos }) => {
  return (
    <Container>
      <div className="todo-list-header">
        <p className="todo-list-last-todo">
          남은 TODO <span>{todos.length}개</span>
        </p>
      </div>
    </Container>
  );
};

export default TodoList;
