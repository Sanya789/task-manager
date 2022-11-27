import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import Todo from './Todo';

const NextWeek = ({ todos }) => {
  const [weekTodos, setWeekTodos] = useState;
  useEffect(() => {
    const days = ['0', '1', '2', '3', '4', '5', '6'];
    const sortedTodosByDay = days.map((day) => {
      return {
        todos: todos.filter((todo) => todo.day === day),
        number: day,
      };
    });
    const today = parseInt(dayjs().format('d'));
    const arrangeDays = sortedTodosByDay.slice(today).concat(sortedTodosByDay).slice(0, today);
    setWeekTodos(arrangeDays);
  }, [todos]);
  return (
    <div className="NextWeek">
      {weekTodos.map((day) => (
        <div key={day.number}>
          <div className="day">
            <div className="name">
              {dayjs(day.number, 'd').format('dddd')}
              {day.number === dayjs().format('d') && ' (Сегодня)'}
            </div>
            <div className="total-todos">({day.todos.length})</div>
          </div>
          <div className="todos">
              {day.todos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
              ))}
            </div>
        </div>
      ))}
    </div>
  );
};

export default NextWeek;
