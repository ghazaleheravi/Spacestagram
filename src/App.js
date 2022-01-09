import React, { useState, useEffect } from 'react';
import Date from './components/Date';
import Image from './components/Image';

function App() {
  const key = 'T3rb301Uv0xEVOjZ9V41b1SgkbKzyuAyJ8nE7nNn';
  const baseURL = 'https://api.nasa.gov/planetary/apod?api_key=' + key;
  let url = '';

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [data, setData] = useState([]);
  console.log('data:', data);

  if(startDate !== '') {
    url += baseURL + '&start_date=' + startDate;
  }
  if(endDate !== '') {
    url += baseURL + '&end_date=' + endDate;
  }
  else {
    url += baseURL + '&count=10';
  }

  useEffect(() => {
    fetch(url)
      .then(function(response) {
        if(!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(json => {console.log('Success:', setData(json))})
      .catch(err => console.log('Fetch problem:', err.message));
  }, []);
 
  
  
  return (
    <div className="App">
      <h1>Some Awesome pictures from above us!!!</h1>
      <Date />
      <ul>
        <hr />
        {data.map((item,idx) => <Image key={idx} {...item} />)}
      </ul>
     
    </div>
  );
}

export default App;
