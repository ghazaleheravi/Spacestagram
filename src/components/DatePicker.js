import React, { useState } from 'react';
import moment from 'moment';

function Date(props) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.setDate(startDate, endDate);
  }

  function handleSubmitedStartDate(e) {
    setStartDate(e.target.value);
  }

  function handleSubmitedEndDate(e) {
    setEndDate(e.target.value);
  }

  return(
    <form onSubmit={handleSubmit}>
      <label className="start_date" htmlFor="start_date">Pick A StartDate:</label>
      <input 
        type="date"
        id="start_date"
        name="startDate"
        required={true}
        value={startDate}
        onChange={handleSubmitedStartDate}
      />
      <label className="end_date" htmlFor="end_date">Pick A EndDate</label>
      <input
        type="date"
        id="end_date"
        name="endDate"
        required={true}
        value={endDate}
        onChange={handleSubmitedEndDate}
        max={moment().format('YYYY-MM-DD')}
      />
      <button type="submit" className="btn">DATE-PICKER</button>
    </form>
  );
}

export default Date;