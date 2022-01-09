import React from 'react';

function Image(props) {
  console.log('props', props);

  return (
    <div>
      <h3>{props.title}</h3>
      <img src={props.url}/>
      <p>{props.explanation}</p>
    </div>

  );
}

export default Image;