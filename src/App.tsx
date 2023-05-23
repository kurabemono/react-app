import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
//import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  return (
    <div>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  );
}

export default App;
