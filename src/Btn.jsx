import React from 'react'
import styles from "./Btn.module.css"

const Btn = ({buttonClick}) => {

  const value = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];


  return (
    <div className={styles.section}>
      {value.map((item) => (<button key={item} onClick={()=>buttonClick(item)}  className={styles.btn}>{item}</button>))}
    </div>
  )
}

export default Btn;