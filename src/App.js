import Component1, { Component2 } from "./allComponents/Component1.jsx";
import Form from "./allComponents/Assignment-form/form.jsx";
import Counter from './allComponents/Assignment-form/practice.jsx'
import React, { useState } from "react";
import Calculator from "./allComponents/Assignment-form/testing.jsx";
import { Formpractice } from "./allComponents/Assignment-form/testing.jsx";

function App() {
  const [initialNumber, newNumber] = useState(0);

  const addOne = () => {
    newNumber(initialNumber + 1);
  };

  const minusOne = () => {
    newNumber(initialNumber - 1);
  };
  const reset = () => {
    newNumber(0);
  };

  return (
    <>
    <div className="first-react-app-calculating">
      <p>Number {initialNumber}</p>
      <div>
        <button onClick={addOne}>Add One</button>
        <button onClick={minusOne}> Minus One</button>
        <button onClick={reset}>Reset </button>
      </div>
      <Calculator/>
      <Counter/>
      <Component1 name="ebuka" age={16} />
      <Component1 name="David" age={22} />
      <Component2 name="Sureboy" age={19} />
      <Form/>

      <Formpractice/>
      
    </div>
    </>
  );
}

export default App; 
