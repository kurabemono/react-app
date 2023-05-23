import { useState } from "react";
import { produce } from "immer";
//import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    // add topping to pizza
    // pizza.toppings.push("Cheese");

    // using vanilla React
    // setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });

    // using immer
    setPizza(
      produce((draft) => {
        draft.toppings.push("Cheese");
      })
    );
  };

  return (
    <>
      <p>
        {pizza.name} Pizza topped with {pizza.toppings.join(", ")}
      </p>
      <button onClick={handleClick}>Add Cheese!</button>
    </>
  );
}

export default App;
