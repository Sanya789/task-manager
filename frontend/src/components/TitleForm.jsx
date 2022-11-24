import React from 'react';

const TitleForm = ({ handleSubmit, heading, value, setValue, setShowModal, confirmButtonText }) => {
  return (
    <form  className='TitleForm' onSubmit={handleSubmit}>
      <h3>{heading}</h3>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Название темы..."
        autoFocus
      />
      <button className="cancel" role="button" onClick={() => setShowModal(false)}>
        Отменить
      </button>
      <button className="confirm">{confirmButtonText}</button>
    </form>
  );
};

export default TitleForm;
