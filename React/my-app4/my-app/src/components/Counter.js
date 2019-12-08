import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Kliknięto ${count} razy`;
  }, [count]);

// czyszczenie tytułu strony (w zakładce) po ukryciu countera
  useEffect(() => {
    return ( ) => {
      window.document.title = '';
    }
  }, [count]);

  return (
    <div>
      <p class="counter">Kliknięto {count} razy</p>
      <button  onClick={() => setCount(count + 1)} disabled={count >= 20}>Kliknij mnie</button>
    </div>
  );
}

export default Counter;
