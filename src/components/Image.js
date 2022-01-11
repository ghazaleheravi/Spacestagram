import React from 'react'
import Like from './Like';

function Image(props) {

  return (
    <div>
      <hr></hr>
      <h3>{props.title} {  } {props.date}</h3>
      <img src={props.url} alt={props.explanation} loading="lazy" />
      <Like data={props} />
    </div>
  );
}

export default Image;