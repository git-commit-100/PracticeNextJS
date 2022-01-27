import React from "react";
import styles from "./Card.module.css";

function Card(props) {
  const { className } = props;
  return (
    <div
      className={className ? `${className} ${styles["card"]}` : styles["card"]}
    >
      {props.children}
    </div>
  );
}

export default Card;
