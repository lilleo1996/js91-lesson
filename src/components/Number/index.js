import { useState } from "react";

const generateId = () => Math.floor(Math.random() * 10000);

export default function Number() {
  const [inputs, setInputs] = useState([]);

  const append = () => {
    setInputs((prev) => {
      return [...prev, generateId()];
    });
  };

  const prepend = () => {
    setInputs((prev) => {
      return [generateId(), ...prev];
    });
  };

  return (
    <div className="App">
      <button onClick={append}>Append</button>
      <button onClick={prepend}>Prepend</button>
      {inputs.map((input, idx) => {
        return (
          <li key={idx}>
            <label>
              {input}
              <input />
            </label>
          </li>
        );
      })}
    </div>
  );
}
