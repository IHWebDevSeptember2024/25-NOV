import { useEffect, useState } from "react";

function Example1Page() {
  const [countUp, setCountUp] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCountUp((ditto) => ditto + 1);
    }, 1000);

    return 
  }, []); // con el array vacío estamos controlando la fase de mounting

  console.log("esto sale dos veces");

  return (
    <>
      <h1>{countUp}</h1>
    </>
  );
}

export default Example1Page;
