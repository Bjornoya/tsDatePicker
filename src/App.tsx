import React, { useState } from 'react';
import DatePicker from "./components/DatePicker/DatePicker";

import './App.scss';

const App = () => {
    const [date, setDate] = useState<Date>(new Date());
    const handleChange = (date: Date) => {
        setDate(date)
    };

  return (
    <div className="wrapper">
      <DatePicker placeholder="Введите дату" dateFormat="yyyy.MM.dd" label="Дата" date={date} onChange={handleChange}/>
      <DatePicker label="Неактивный инпут" disabled={true} dateFormat="yyyy.MM.dd" date={date} onChange={handleChange}/>
    </div>
  );
};

export default App;
