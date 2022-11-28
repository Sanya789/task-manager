import React, { useState, useContext } from 'react';
import pencil from '../assets/img/pencil.png';
import cancel from '../assets/img/cancel.png';
import Modal from './Modal';
import RenameTitile from './RenameTitle';
import { TodoContext } from '../context';
import firebase from '../firebase';

const Title = ({ title, edit }) => {
  //Context
  const {defaultTitle, selectedTitle, setSelectedTitle } = useContext(TodoContext);

  //State
  const [showModal, setShowModal] = useState(false);

  const deleteTitle = (title) => {
    firebase
      .firestore()
      .collection('titles')
      .doc(title.id)
      .delete()
      .then(() =>
        firebase
          .firestore()
          .collection('todos')
          .where('titleName', '==', title.name)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              doc.ref.delete();
            });
          }),
      ).then(() => {if(selectedTitle === title.name){
        setSelectedTitle(defaultTitle)
      }})
  };
  return (
    <div className="Title">
      <div className="name" onClick={() => setSelectedTitle(title.name)}>
        {title.name}
      </div>
      <div className="btns">
        {edit ? (
          <div className="edit-delete">
            <span onClick={() => setShowModal(true)} className="edit">
              <img src={pencil} alt="pencil" />
            </span>
            <span className="delete" onClick={() => deleteTitle(title)}>
              <img src={cancel} alt="delete" />
            </span>
          </div>
        ) : title.numOfTodos === 0 ? (
          ''
        ) : (
          <div className="total-todos">{title.numOfTodos}</div>
        )}
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <RenameTitile title={title} setShowModal={setShowModal} />
      </Modal>
    </div>
  );
};

export default Title;
