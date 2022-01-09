import React, { useState } from 'react';

function Image(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <hr></hr>
      <h3>{props.title} {  } {props.date}</h3>
      <img src={props.url} alt={props.explanation} loading="lazy"/>
      <button 
        type="button"
        onClick={() => setCount(count + 1)}
      >
        Like
      </button>
      {count}
    </div>
  );
}

export default Image;