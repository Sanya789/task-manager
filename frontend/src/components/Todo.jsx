import React, { useState } from 'react';
import checkFill from '../assets/img/check-fill.png';
import checkEmpty from '../assets/img/check-empty.png';
import arrowClockwise from '../assets/img/arrowClockwise.png';
import trash from '../assets/img/trash.png';
import firebase from '../firebase';
import dayjs from 'dayjs';

const Todo = ({ todo }) => {
  const [hover, setHover] = useState(false);

  const deleteTodo = (todo) => {
    firebase.firestore().collection('todos').doc(todo.id).delete();
  };

  const checkTodo = (todo) => {
    firebase.firestore().collection('todos').doc(todo.id).update({
      checked: !todo.checked,
    });
  };

  const repeatNextDay = (todo) => {
    const nextDayDate = dayjs(todo.date, 'MM/DD/YYYY').add(1, 'day');
    const repeatedTodo = {
      ...todo,
      checked: false,
      date: nextDayDate.format('MM/DD/YYYY'),
      day: nextDayDate.format('d'),
    };
    delete repeatedTodo.id;

    firebase.firestore().collection('todos').add(repeatedTodo);
  };
  return (
    <div className="Todo">
      <div
        className="todo-container"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
        <div className="check-todo" onClick={() => checkTodo(todo)}>
          {todo.checked ? (
            <span className="checked">
              <img src={checkFill} alt="checked" />
            </span>
          ) : (
            <span className="unchecked">
              <img src={checkEmpty} alt="checked" />
            </span>
          )}
        </div>
        <div className="text">
          <p style={{ color: todo.checked ? '#bebebe' : 'black' }}>{todo.text}</p>
          <span>
            {todo.time} - {todo.titleName}
          </span>
          <div className={`line ${todo.checked ? 'line-through' : ''}`}></div>
        </div>
        <div className="add-to-next-day" onClick={() => repeatNextDay(todo)}>
          {todo.checked && (
            <span>
              <img src={arrowClockwise} alt="arrow" />
            </span>
          )}
        </div>
        <div className="delete-todo" onClick={() => deleteTodo(todo)}>
          {(hover || todo.checked) && (
            <span>
              <img src={trash} alt="trash" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
