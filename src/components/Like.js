import React, { useState } from 'react';
import LikeImage from '../svgComponents/LikeImage';
import UnlikeImage from '../svgComponents/UnlikeImage';

function Like(props) {
  const [isLiked, setIsLiked] = useState(false);
  const [disLike, setDisLike] = useState(false);
  
  function handleLikeClick() {
    if(!isLiked) {
      setIsLiked(true);
      localStorage.setItem(props.data.title, 'Liked');
    } else {
      setIsLiked(false);
      localStorage.removeItem(props.data.title);
    }
  }

  function handleDisLikeClick() {
    if(disLike) {
      setDisLike(false);
    } else {
      setDisLike(true);
      localStorage.removeItem(props.data.title);
    }
  }

  if (disLike === false && localStorage.getItem(props.data.title)) {
    return ( 
      <button 
        className="like-btn" 
        type="button" 
        onClick={handleDisLikeClick} 
        name="favorite"
        aria-hidden="true"
      >
        {disLike === true ? <UnlikeImage /> : <LikeImage />}
      </button>
    )
  } 
  else {
    return (
      <button 
        className="like-btn"  
        type="button" 
        onClick={handleLikeClick} 
        name="favorite"
        aria-hidden="true"
      >
        {isLiked === false ? <UnlikeImage /> : <LikeImage />}
      </button>
    )
  }
}

export default Like;