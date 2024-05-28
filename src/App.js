import "./App.css";
import React, { useState } from "react";
import { Display } from "./components/Display";
import { Form } from "./components/Form";

const App = () => {
  const [value, setvalue] = useState("");
  const display = (inputValue) => {
    setvalue(inputValue);
  };
  return (
    <div className="wrapper">
      <h1>DISPLAY LIST! React</h1>
      {value !== "" && <Display value={value}></Display>}
      <Form display={display}></Form>
    </div>
  );
};

export default App;
