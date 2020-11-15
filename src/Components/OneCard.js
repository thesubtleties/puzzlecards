import React, { useState, useEffect } from 'react';



function OneCard(props) {
  const singleUrl = "./images/" + props.imageUrl;
  return (
    <div className="Card" onClick={() => { return props.clickHandler(props) }} style={{order:props.placementOrder[props.id - 1]}} >
      <img className="carImage" src={process.env.PUBLIC_URL + singleUrl} alt="test" />
      <div className="carName">{props.name}</div>
      <div className="carName"></div>
      
    </div>
  );
}

export default OneCard;
