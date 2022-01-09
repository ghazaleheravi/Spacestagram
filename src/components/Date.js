import React from 'react';

function Date(props) {

  return(
    <form>
      <label className="start_date" htmlFor="start_date">Pick A StartDate:</label>
      <input 
        type="date"
        id="start_date"
        name="startDate"
      />
      <label className="end_date" htmlFor="end_date">Pick A EndDate</label>
      <input
        type="date"
        id="end_date"
        name="endDate"
      />
      <button type="submit" className="btn">date-picker</button>
    </form>
  );
}

export default Date;