import React, { useState } from 'react';
import DatePicker from "./components/DatePicker/DatePicker";


const App = () => {
    const [date, setDate] = useState<Date>(new Date());
    const handleChange = (date: Date) => {
        setDate(date)
    };

  return (
    <div className="App">
      <DatePicker placeholder="Введите дату" dateFormat="yyyy.MM.dd" label="День рождения" date={date} onChange={handleChange}/>
      <DatePicker placeholder="Неактивный инпут" disabled={true} dateFormat="yyyy.MM.dd" date={date} onChange={handleChange}/>
    </div>
  );
};

export default App;
