import React, {useState} from 'react';
import TodoForm from './TodoForm';

const titles = [
  { id: 1, name: 'личное', numOfTodos: 0 },
  { id: 2, name: 'работа', numOfTodos: 1 },
  { id: 3, name: 'другое', numOfTodos: 2 },
];

const EditTodo = () => {
  const [text, setText] = useState('');
  const [day, setDay] = useState();
  const [time, setTime] = useState();
const [todoTitle, setTodoTitle] = useState()

  const handleSubmit = () => {};

  return (
    <div className="EditTodo">
      <div className="header">Редактировать задачу</div>
      <div className="container">
        <TodoForm
          handleSubmit={handleSubmit}
          text={text}
          setText={setText}
          day={day}
          setDay={setDay}
          time={time}
          setTime={setTime}
          todoTitle={todoTitle}
          setTodoTitle={setTodoTitle}
          titles={titles}
        />
      </div>
    </div>
  );
};

export default EditTodo;
