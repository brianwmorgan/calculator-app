import React, { useState } from "react";

import Wrapper from "./components/Wrapper";
import Display from "./components/Display";
import ButtonBox from "./components/ButtonBox";
import Buttons from "./components/Buttons";

const App = () => {
  const [displayValue, setDisplayValue] = useState("");

  const clickHandler = (event) => {
    event.preventDefault();
    const value = event.target.innerHTML;
    setDisplayValue(displayValue + value);
  };

  const clearHandler = (event) => {
    event.preventDefault();
    setDisplayValue("");
  };

  const calculateHandler = (event) => {
    event.preventDefault();
    let result = "";
    let statement = displayValue.replaceAll("^", "**").replaceAll(" ", "");
    try {
      result = eval(statement);
      setDisplayValue(result);
    } catch (error) {
      result = "error";
      setDisplayValue(result);
    }
  };

  return (
    <Wrapper>
      <Display value={displayValue ? displayValue : 0} />
      <ButtonBox>
        <Buttons
          clickHandler={clickHandler}
          clearHandler={clearHandler}
          calculateHandler={calculateHandler}
        />
      </ButtonBox>
    </Wrapper>
  );
};

export default App;
