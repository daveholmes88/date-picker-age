import React, { useState } from 'react'
import Calendar from 'react-calendar';
import './App.css';
import 'react-calendar/dist/Calendar.css';

function App() {

  const date = new Date()
  const [age, setAge] = useState('')

  const changeDate = newDate => {
    const birthDate = newDate
    let year = date.getFullYear() - birthDate.getFullYear()
    let month = date.getMonth() - birthDate.getMonth()
    let day = date.getDate() - birthDate.getDate()
    if (month < 0) {
      year -= 1
      month += 12
    }
    if (month === 0 && day < 0) {
      year -= 1
      month += 11
    }
    setAge(`${year} years, ${month} months`)
  }

  return (
    <div className="App">
      <Calendar
        onChange={changeDate}
        value={date}
      />
      <h3>{`Age: ${age}`}</h3>
    </div>
  );
}

export default App;
