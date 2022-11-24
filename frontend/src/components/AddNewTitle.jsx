import React, { useState } from 'react';
import plus from '../assets/img/plus.png';
import Modal from './Modal';
import TitleForm from './TitleForm';

const AddNewTitle = () => {
  const [showModal, setShowModal] = useState(false);
  const [titleName, setTitleName] = useState('');
  const handleSubmit = () => {};

  return (
    <div className="addNewTitle">
      <div className="add-button">
        <span onClick={() => setShowModal(true)}>
          <img src={plus} alt="plus" />
        </span>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <TitleForm
          handleSubmit={handleSubmit}
          heading="Новая тема"
          value={titleName}
          setValue={setTitleName}
          setShowModal={setShowModal}
          confirmButtonText="+ Добавить тему"
        />
      </Modal>
    </div>
  );
};

export default AddNewTitle;
