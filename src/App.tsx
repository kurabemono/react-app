import { useState } from "react";
import { produce } from "immer";
//import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    // add 1 quantity to Product 1

    // using vanilla React
    // setCart({
    //   ...cart,
    //   items: cart.items.map((item) =>
    //     item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
    //   ),
    // });

    // using immer
    setCart(
      produce((draft) => {
        const item = draft.items.find((item) => item.id === 1);
        if (item) item.quantity = item.quantity + 1;
      })
    );
  };

  return (
    <>
      <p>Cart</p>
      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            Product: {item.title}, Qty: {item.quantity}
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Add Item</button>
    </>
  );
}

export default App;
