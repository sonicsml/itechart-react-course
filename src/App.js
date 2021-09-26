import React, { useState } from "react";
import AllCards from "./components/Cards/AllCards";
import Header from "./components/UI/Header";
import AddCard from "./components/Cards/AddCard";
import "./App.css";

const CARD_DATA = [
  {   
    id: "1",
    title: "Card 1",
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  },
  {
    id: "2",
    title: "Card 2",
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  },
  {
    id: "3",
    title: "Card 1",
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  },
];
const App = () => {
  const [cards, setCards] = useState(CARD_DATA);
  const addCardHandler = (addFromData) => {
    setCards((prevCards) => {
      return [addFromData, ...prevCards];
    });
  };
  return (
    <div className="container"> 
      <Header sitename="itechart-react-course - React-components" />
      <AllCards items={cards} />
      <AddCard onAddCard={addCardHandler} />
    </div>
  );
};

export default App;
