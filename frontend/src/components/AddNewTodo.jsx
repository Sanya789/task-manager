import React from 'react';
import { useState } from 'react';
import Modal from './Modal';

const AddNewTodo = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="addNewTodo">
      <div className="btn">
        <button onClick={()=> setShowModal(true)}>+ Новая задача</button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div>HI</div>
      </Modal>
    </div>
  );
};

export default AddNewTodo;
