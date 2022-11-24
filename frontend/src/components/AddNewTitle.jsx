import React from 'react';
import plus from '../assets/img/plus.png';

const AddNewTitle = () => {
  return (
    <div className="addNewTitle">
      <div className="add-button">
        <span>
          <img src={plus} alt="plus" />
        </span>
      </div>
    </div>
  );
};

export default AddNewTitle;
