import { useState } from "react";

import "./style.css";

const Counter = () => {
  const [count, setCount] = useState(0); // count (state), setCount (setState)
  const [person, setPerson] = useState({ name: "MindX", age: 10 });

  const handleClickIncrease = () => {
    setCount(count + 1);
    console.log(count);
  };

  const handleClickDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const increaseAge = () => {
    // const newPerson = { ...person, age: person.age + 1 };
    // setPerson(newPerson);

    setPerson((prev) => {
      return {
        ...prev,
        age: prev.age + 1,
      };
    });
  };

  return (
    <div className="counter">
      <h1>{count}</h1>
      <button onClick={handleClickIncrease}>+</button>
      <button onClick={handleClickDecrease}>-</button>
      <h1>
        Hello! I'm {person.name}. I'm {person.age} years old.
      </h1>
      <button onClick={increaseAge}>Increase age</button>
    </div>
  );
};

export default Counter;
