import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  const { type, className, onClick, disabled } = props;
  return (
    <button
      type={type}
      className={className ? `${className} ${styles["btn"]}` : styles["btn"]}
      onClick={onClick ? onClick : () => {}}
      disabled={disabled}
    >
      {props.children}
    </button>
  );
}

export default Button;
