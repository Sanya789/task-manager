import React from 'react';
import { useState } from 'react';
import Modal from './Modal';

const AddNewTodo = () => {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState('');

  return (
    <div className="addNewTodo">
      <div className="btn">
        <button onClick={()=> setShowModal(true)}>+ Новая задача</button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <form>
          <div className='text'>
            <h3>Добавьте новую задачу</h3>
            <input 
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder='Я хочу сделать...'
            autoFocus />
          </div>
          <div className='remind'></div>
        </form>
      </Modal>
    </div>
  );
};

export default AddNewTodo;
