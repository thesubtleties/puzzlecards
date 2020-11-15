import React, { useState, useEffect } from 'react';
import OneCard from './OneCard';


function CardArea(props) {
  const cardsInOrder = props.carDetails.map((card) => <OneCard key={card.id} id={card.id} name={card.name} imageUrl={card.img} newPlacementOrder={props.newPlacementOrder} placementOrder={props.placementOrder} clickHandler={props.clickHandler}  />)

  return (
    <div className="cardArea">
    {cardsInOrder}
    </div>
  );
}

export default CardArea;
