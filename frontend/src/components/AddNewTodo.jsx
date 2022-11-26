import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Modal from './Modal';


const titles = [
  { id: 1, name: 'личное', numOfTodos: 0 },
  { id: 2, name: 'работа', numOfTodos: 1 },
  { id: 3, name: 'другое', numOfTodos: 2 },
];

const AddNewTodo = () => {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState('');
  const [day, setDay] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const handleSubmit = () => {};

  return (
    <div className="addNewTodo">
      <div className="btn">
        <button onClick={() => setShowModal(true)}>+ Новая задача</button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TodoForm
            handleSubmit={handleSubmit}
            heading="Добавить новую задачу"
            text={text}
            setText={setText}
            day={day}
            setDay={setDay}
            time={time}
            setTime={setTime}
            titles={titles}
            showButtons={true}
            setShowModal={setShowModal}
          />
        </LocalizationProvider>
      </Modal>
    </div>
  );
};

export default AddNewTodo;
