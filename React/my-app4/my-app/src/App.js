import React, { useState, useEffect } from "react";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  const [showCounter, setShowCounter] = useState(false);
  return (
    <div>
      <button class="show-button" onClick={() => setShowCounter(true)}>Pokaz licznik</button>
      <button class="hide-button" onClick={() => setShowCounter(false)}>Ukryj licznik</button>
      {showCounter && <Counter />}
    </div>
  );
}

export default App;
