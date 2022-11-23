import React from 'react';
import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker, TimePicker} from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import Modal from './Modal';
import bell from '../assets/img/bell.png';
import calendar from '../assets/img/calendar.png';
import clock from '../assets/img/clock.png';
import palette from '../assets/img/palette.png';
import cancel from '../assets/img/cancel.png';

const AddNewTodo = () => {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState('');
  const [day, setDay] = useState(new Date());
  const [time, setTime] = useState(new Date());

  return (
    <div className="addNewTodo">
      <div className="btn">
        <button onClick={() => setShowModal(true)}>+ Новая задача</button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <form>
          <div className="text">
            <h3>Добавьте новую задачу</h3>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Я хочу сделать..."
              autoFocus
            />
          </div>
          <div className="remind">
            <img src={bell} className="bell-icon" alt="bell" />
            <p>Напомнить!</p>
          </div>
          <div className="pick-day">
            <div className="title">
              <img src={calendar} className="calendar-icon" alt="calendar-day" />
              <p>Выберете день</p>
            </div>
            <DatePicker
            value={day}
            onChange={day => setDay(day)}
            renderInput={(params) => <TextField {...params}/>}
            />
          </div>
          <div className="pick-time">
            <div className="title">
              <img src={clock} className="clock-icon" alt="clock" />
              <p>Выберете время</p>
            </div>
            <TimePicker
            value={time}
            onChange={time => setTime(time)}
            renderInput={(params) => <TextField {...params}/>}
            />
          </div>
          <div className="pick-title">
            <div className="title">
              <img src={palette} className="palette-icon" alt="palette" />
              <p>Выберете тему</p>
            </div>
            <div className="themes">
              <div className="theme active">Личное</div>
              <div className="theme">Работа</div>
            </div>
          </div>
          <div className="cancel" onClick={()=>setShowModal(false)}>
            <img src={cancel} className="cancel-icon" alt="close" />
          </div>
          <div className='confirm'>
            <button>+ Добавить задачу</button>
          </div>
        </form>
        </LocalizationProvider>
      </Modal>
    </div>
  );
};

export default AddNewTodo;
