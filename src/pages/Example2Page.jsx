import { useState, useEffect } from "react";

function Example2Page() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    return () => {
      console.log("Esto es el unmount");
      // aqui limpiamos todo
    };
  }, []);

  // estoy controlando la fase de update

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>➕</button>
    </>
  );
}

export default Example2Page;
