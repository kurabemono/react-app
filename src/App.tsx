import { useState } from "react";
import Like from "./components/Like";
//import "./App.css";

function App() {
  return <Like onClick={() => console.log("Clicked")} />;
}

export default App;
