import { useState, useEffect } from "react";

import "./style.css";

const Counter = () => {
  const [count, setCount] = useState(0); // count (state), setCount (setState)
  const [isVisible, setIsVisible] = useState(false);
  const [person, setPerson] = useState({ name: "MindX", age: 10 });

  useEffect(() => {
    console.log("Update title based on count");
    // document.title = `You clicked ${count} times`;
  }, []);

  const handleClickIncrease = () => {
    setCount(count + 1);
  };

  const handleClickDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const increaseAge = () => {
    setPerson((prev) => {
      return {
        ...prev,
        age: prev.age + 1,
      };
    });
  };

  return (
    <div className="counter">
      <h3>{count}</h3>
      <button onClick={handleClickIncrease}>+</button>
      <button onClick={handleClickDecrease}>-</button>
      <h3>
        Hello! I'm {person.name}. I'm {person.age} years old.
      </h3>
      <button onClick={increaseAge}>Increase age</button>
      <div>
        {isVisible && <p>This is hidden content</p>}
        <button onClick={() => setIsVisible(!isVisible)}>Change visible</button>
      </div>
    </div>
  );
};

export default Counter;
