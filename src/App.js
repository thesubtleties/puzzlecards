import React, { useState, useEffect } from 'react';
import Topbar from './Components/Topbar';
import CardArea from './Components/CardArea';
import './App.css';


function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [pickOrder, setPickOrder] = useState([]);
  

  const carDetails = [
    {
      name: "Audi R8",
      img: "r8.jpg",
      id: "1",
    },
    {
      name: "Chevrolet Corvette",
      img: "corvette.jpg",
      id: "2",
    },
    {
      name: "Porsche Boxster",
      img: "boxster.jpg",
      id: "3",
    },
    {
      name: "Porsche 911",
      img: "911.jpg",
      id: "4",
    },
    {
      name: "Nissan GT-R",
      img: "gtr.jpg",
      id: "5",
    },
    {
      name: "Jaguar F-Type",
      img: "jaguarftype.jpg",
      id: "6",
    },
    {
      name: "Mercedes GT",
      img: "mercedesgt.jpg",
      id: "7",
    },
    {
      name: "Mercedes SL Class",
      img: "mercedessl.jpg",
      id: "8",
    },
    {
      name: "Toyota Supra",
      img: "supra.jpg",
      id: "9",
    },
    {
      name: "Lexus LC",
      img: "lexuslc.jpg",
      id: "10",
    },
    {
      name: "Acura NSX",
      img: "nsx.jpg",
      id: "11",
    },
    {
      name: "Porsche Cayman",
      img: "cayman.jpg",
      id: "12",
    }
  ]
  const [placementOrder, setPlacementOrder] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const newPlacementOrder = () => {
    const placeArray = []
    while (placeArray.length < 12) {
      const randomNumber = getRandomInt(12);
      if (!placeArray.includes(randomNumber)) {
        placeArray.push(randomNumber);
  
      }
    }
    setPlacementOrder(placeArray);
    
  }
  const resetPickOrder = () => {
    setPickOrder([]);
  }

  const addToPickOrder = (props) => {
    const carPicked = props.id;
    if (pickOrder.includes(carPicked)) {
      resetPickOrder();
      setCurrentScore(0);
    } else {
      pickOrder.push(carPicked);
      setCurrentScore(currentScore + 1);
      if (currentScore >= highScore) {
        setHighScore(highScore + 1);
      }
    }

  }
  const clickHandler = (props) => {
    addToPickOrder(props);
    newPlacementOrder();
    console.log(props.id)
    console.log(pickOrder)
    
  }


  return (
    <div className="App">
    <Topbar currentScore={currentScore} highScore={highScore} />
    <CardArea carDetails={carDetails} placementOrder={placementOrder} newPlacementOrder={newPlacementOrder} addToPickOrder={addToPickOrder} clickHandler={clickHandler} />
    
    </div>
  );
}

export default App;
