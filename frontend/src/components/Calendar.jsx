import React, {useContext} from 'react';
import calendarDate from '../assets/img/calendar-date.png';
import caretUp from '../assets/img/caretUp.png';
import { calendarItems } from '../constants';
import { TodoContext } from '../context';

const Calendar = () => {
const {setSelectedTitle} = useContext(TodoContext)

  return (
    <div className="calendar">
      <div className="header">
        <div className="title">
          <img src={calendarDate} alt="calendar-date" />
          <p>Календарь</p>
        </div>
        <div className="btns">
          <span>
            <img src={caretUp} alt="caret-up" />
          </span>
        </div>
      </div>
      <div className="items">
        {calendarItems.map((item) => (
          <div 
          className="item" 
          key={item}
          onClick={()=> setSelectedTitle(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
