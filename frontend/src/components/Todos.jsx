import React, { useContext } from 'react';
import Todo from './Todo';
import NextWeek from './NextWeek';
import { TodoContext } from '../context';

const Todos = () => {
  const {todos, selectedTitle} = useContext(TodoContext);
  // const todos = [
  //   {
  //     id: '1',
  //     text: 'test',
  //     time: '10:00 AM',
  //     date: '06/03/2022',
  //     day: '6',
  //     checked: true,
  //     color: '#000000',
  //     title: 'personal',
  //   },
  //   {
  //     id: '2',
  //     text: 'test 2',
  //     time: '9:00 AM',
  //     date: '08/03/2022',
  //     day: '1',
  //     checked: false,
  //     color: '#00ff00',
  //     title: 'work',
  //   },
  // ];

  

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
