import React, { useState } from 'react';
import checkFill from '../assets/img/check-fill.png';
import checkEmpty from '../assets/img/check-empty.png';
import arrowClockwise from '../assets/img/arrowClockwise.png';
import trash from '../assets/img/trash.png';

const Todo = ({ todo }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="Todo">
      <div 
      className="todo-container" 
      onMouseEnter={() => setHover(true)}
      onMouseLeave={()=> setHover(false)}
      >
        <div className="check-todo">
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
            {todo.time} - {todo.title}
          </span>
          <div className={`line ${todo.checked ? 'line-through' : ''}`}></div>
        </div>
        <div className="add-to-next-day">
          {todo.checked && (
            <span>
              <img src={arrowClockwise} alt="arrow" />
            </span>
          )}
        </div>
        <div className="delete-todo">
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
