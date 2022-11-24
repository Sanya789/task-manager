import React from 'react';
import calendarDate from '../assets/img/calendar-date.png';
import caretUp from '../assets/img/caretUp.png';
import {calendarItems} from '../constants';

const Calendar = () => {
  return (
    <div className="calendar">
      <div className="header">
        <div className="title">
          <img src={calendarDate} alt="calendar-date" />
          <p>Календарь</p>
        </div>
      </div>
      <div className="btns">
        <span>
          <img src={caretUp} alt="caret-up" />
        </span>
      </div>
      <div className="items">
        {calendarItems.map((item) => (
          <div className="item" key={item}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
