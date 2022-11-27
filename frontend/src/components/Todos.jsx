import React, { useContext } from 'react';
import Todo from './Todo';
import NextWeek from './NextWeek';
import { TodoContext } from '../context';

const Todos = () => {
  const {todos, selectedTitle} = useContext(TodoContext);
  

  return (
    <div className="Todos">
      <div className="selected-title">{selectedTitle}</div>
      <div className="todos">
        {selectedTitle === 'Неделя' ? (
          <NextWeek todos={todos} />
        ) : (
          todos.map((todo) => <Todo todo={todo} key={todo.id} />)
        )}
      </div>
    </div>
  );
};

export default Todos;
