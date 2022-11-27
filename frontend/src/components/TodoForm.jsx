import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import bell from '../assets/img/bell.png';
import calendar from '../assets/img/calendar.png';
import clock from '../assets/img/clock.png';
import palette from '../assets/img/palette.png';
import cancel from '../assets/img/cancel.png';

const TodoForm = ({
  handleSubmit,
  heading = false,
  text,
  setText,
  day,
  setDay,
  time,
  setTime,
  todoTitle,
  setTodoTitle,
  titles,
  showButtons = false,
  setShowModal = false,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form onSubmit={handleSubmit} className="TodoForm">
        <div className="text">
          {heading && <h3>{heading}</h3>}
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
            <p>Выберите день</p>
          </div>
          <DatePicker
            value={day}
            onChange={(day) => setDay(day)}
            renderInput={(params) => <TextField {...params} />}
          />
        </div>
        <div className="pick-time">
          <div className="title">
            <img src={clock} className="clock-icon" alt="clock" />
            <p>Выберите время</p>
          </div>
          <TimePicker
            value={time}
            onChange={(time) => setTime(time)}
            renderInput={(params) => <TextField {...params} />}
          />
        </div>
        <div className="pick-title">
          <div className="title">
            <img src={palette} className="palette-icon" alt="palette" />
            <p>Выберите тему</p>
          </div>
          <div className="themes">
            {
            titles.length > 0 ? 
            titles.map((title) => (
              <div 
              className={`theme ${todoTitle === title.name ? 'active' : ''}`} 
              key={title.id}
              onClick={()=> setTodoTitle(title.name)}
              >
                {title.name}
              </div>
            ))
            : 
            <div style={{color: 'red'}}>
              Пожалуйста добавьте тему.
            </div>
            }
          </div>
        </div>
        {showButtons && (
          <>
            <div className="cancel" onClick={() => setShowModal(false)}>
              <img src={cancel} className="cancel-icon" alt="close" />
            </div>
            <div className="confirm">
              <button>+ Добавить задачу</button>
            </div>
          </>
        )}
      </form>
    </LocalizationProvider>
  );
};

export default TodoForm;
