import React, { useContext } from 'react';
import Title from './Title';
import AddNewTitle from './AddNewTitle';
import palette from '../assets/img/palette.png';
import pencil from '../assets/img/pencil.png';
import clearPencil from '../assets/img/clearPencil.png';
import careteUp from '../assets/img/caretUp.png';
import { useState } from 'react';
import { TodoContext } from '../context';

// const titles = [
//   { id: 1, name: 'личное', numOfTodos: 0 },
//   { id: 2, name: 'работа', numOfTodos: 1 },
//   { id: 3, name: 'другое', numOfTodos: 2 },
// ];

const Titles = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [edit, setEdit] = useState(false);
  const pencilColor = edit ? pencil : clearPencil;

  const {titles} = useContext(TodoContext)
  return (
    <div className="titles">
      <div className="header">
        <div className="title">
          <img src={palette} alt="palette" />
          <p>Темы</p>
        </div>
        <div className="btns">
          {showMenu && titles.length > 0 && (
            <span onClick={() => setEdit((edit) => !edit)}>
              {<img src={pencilColor} alt="pencil" />}
            </span>
          )}
          <AddNewTitle />
          <span className="arrow">
            <img src={careteUp} alt="careteUp" />
          </span>
        </div>
      </div>
      <div className="items">
        {titles.map((title) => (
          <Title title={title} key={title.id} edit={edit} />
        ))}
      </div>
    </div>
  );
};

export default Titles;
