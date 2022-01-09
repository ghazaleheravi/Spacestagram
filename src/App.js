import React, { useState, useEffect } from 'react';
import Date from './components/Date';
import Image from './components/Image';

function App() {
  const key = 'T3rb301Uv0xEVOjZ9V41b1SgkbKzyuAyJ8nE7nNn';
  const baseURL = 'https://api.nasa.gov/planetary/apod?api_key=' + key;
  let url = '';

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  console.log('data:', data);
  console.log('startDate', startDate);
  console.log('endDate', endDate);

  if(startDate !== '' && endDate !== '') {
    url += baseURL + '&start_date=' + startDate + '&end_date=' + endDate;
  }
  else {
    url = baseURL + '&count=10';
  }

  useEffect(() => {
    fetch(url)
      .then(response => response.json()) 
      .then(
        (json) => {
          setIsLoaded(true);
          setData(json);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [startDate, endDate]);
 
  function setDate(start, end) {
    setStartDate(start);
    setEndDate(end);
  }
  
  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Getting data from NASA...</div>
  } else {
    return (
      <div className="App">
        <h1>Some Awesome pictures from above us!!!</h1>
        <Date  setDate={setDate} setEndDate={setDate}/>
        {data.map((item,idx) => <Image key={idx} {...item} />)}
      </div>
    );
  }
}

export default App;
