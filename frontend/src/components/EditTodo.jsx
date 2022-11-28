import dayjs from 'dayjs';
import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../context';
import TodoForm from './TodoForm';
import firebase from '../firebase';

const EditTodo = () => {
  const [text, setText] = useState('');
  const [day, setDay] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [todoTitle, setTodoTitle] = useState('');
  const { selectedTodo, titles } = useContext(TodoContext);


  useEffect(() => {
    if (selectedTodo) {
      setText(selectedTodo.text);
      setDay(dayjs(selectedTodo.date, 'MM/DD/YYYY'));
      setTime(dayjs(selectedTodo.time, 'hh:mm A'));
      setTodoTitle(selectedTodo.titleName);
    }
  }, [selectedTodo]);

  useEffect(() => {
    if (selectedTodo) {
      firebase
        .firestore()
        .collection('todos')
        .doc(selectedTodo.id)
        .update({
          text,
          date: dayjs(day).format('MM/DD/YYYY'),
          day: dayjs(day).format('d'),
          time: dayjs(time).format('hh:mm A'),
          titleName: todoTitle,
        });
    }
  }, [text, day, time, todoTitle]);

  const handleSubmit = () => {};

  return (
    <div>
      {selectedTodo && (
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
      )}
    </div>
  );
};

export default EditTodo;
