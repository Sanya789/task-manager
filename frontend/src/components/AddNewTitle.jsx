import React, { useState } from 'react';
import firebase from '../firebase';
import plus from '../assets/img/plus.png';
import Modal from './Modal';
import TitleForm from './TitleForm';

const AddNewTitle = () => {
  const [showModal, setShowModal] = useState(false);
  const [titleName, setTitleName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (titleName) {
      const titlesRef = firebase.firestore().collection('titles');
      titlesRef
        .where('name', '==', titleName)
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.empty) {
            titlesRef.add({
              name: titleName,
            });
          } else {
            alert('Тема уже существует!');
          }
        });
        setShowModal(false)
        setTitleName('')
    }
  };

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
