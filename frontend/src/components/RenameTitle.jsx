import React, { useContext, useState } from 'react';
import TitleForm from './TitleForm';
import firebase from '../firebase';
import { TodoContext } from '../context';

const RenameTitile = ({ title, setShowModal }) => {
  const [newTitleName, setNewTitleName] = useState(title.name);
  const { selectedTitle, setSelectedTitle } = useContext(TodoContext);
  const renameTitle = (title, newTitleName) => {
    const titlesRef = firebase.firestore().collection('titles');
    const todosRef = firebase.firestore().collection('todos');

    const { name: oldTitleName } = title;

    titlesRef
      .where('name', '==', newTitleName)
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          alert('Такая тема уже существует');
        } else {
          titlesRef
            .doc(title.id)
            .update({
              name: newTitleName,
            })
            .then(() => {
              todosRef
                .where('titleName', '==', oldTitleName)
                .get()
                .then((querySnapshot) => {
                  querySnapshot.forEach((doc) => {
                    doc.ref.update({
                      titleName: newTitleName,
                    });
                  });
                })
                .then(() => {
                  if (selectedTitle === oldTitleName) {
                    setSelectedTitle(newTitleName);
                  }
                });
            });
        }
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    renameTitle(title, newTitleName);
    setShowModal(false);
  };

  return (
    <div className="RenameTitile">
      <TitleForm
        handleSubmit={handleSubmit}
        heading="Редактировать тему"
        value={newTitleName}
        setValue={setNewTitleName}
        setShowModal={setShowModal}
        confirmButtonText="Подтвердить"
      />
    </div>
  );
};

export default RenameTitile;
