import { useState, useEffect } from "react";
import Todo from "./Components/ToDo";

function App() {
  const [cards, setCards] = useState();

  useEffect(() => {
    setCards([
      { id: 1, name: "Learn React" },
      { id: 2, name: "Master React" },
    ]);
  }, []);

  const removeCard = (id) => {
    console.log("id:", id);
  };

  return (
    <div>
      <h1>My Todos</h1>
      {cards?.map((card) => (
        <Todo
          key={card.id}
          id={card.id}
          text={card.name}
          removeCard={removeCard}
        />
      ))}
    </div>
  );
}

export default App;
