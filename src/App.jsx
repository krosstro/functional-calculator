import React, { useState } from "react";
import styles from "./App.module.css";
import Display from "./display";
import Btn from "./Btn";

const App = () => {

  let [calVal,setcalVal] = useState([''])
  const buttonClick = (item) => {
    if(item === "C"){
      setcalVal('')
    }else if(item === "="){
      const output = eval(calVal)
      setcalVal(output)
    }else{
      const newDisplay = calVal + item
      setcalVal(newDisplay)
    }
  }

  return (
    <div className={styles.border}>
      <Display value={calVal}></Display>
      <Btn buttonClick={buttonClick}></Btn>
    </div>
  );
};

export default App;
