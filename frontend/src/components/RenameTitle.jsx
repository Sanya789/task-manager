import React, { useState } from 'react';
import TitleForm from './TitleForm';

const RenameTitile = ({title, setShowModal}) => {
const[newTitleName, setNewTitleName] = useState(title.name)

const handleSubmit = (e) => {

}

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
