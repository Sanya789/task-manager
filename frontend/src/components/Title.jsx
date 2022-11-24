import React from 'react';
import RenameTitle from './RenameTitle';
import pencil from '../assets/img/pencil.png';
import cancel from '../assets/img/cancel.png';

const Title = ({ title, edit }) => {
  return (
    <div className="Title">
      <div className="name">{title.name}</div>
      <div className="btns">
        {edit ? (
          <div className="edit-delete">
            <span className='edit'>
              <img src={pencil} alt="pencil" />
            </span>
            <span className='delete'>
              <img src={cancel} alt="delete" />
            </span>
          </div>
        ) : (
          title.numOfTodos === 0 ? '' : 
          <div className="total-todos">{title.numOfTodos}</div>
        )}
      </div>
    </div>
  );
};

export default Title;
