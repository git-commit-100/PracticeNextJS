import React from "react";
import styles from "./Input.module.css";

function Input(props) {
  /* hooks must be used in parent component 
     props must have
        type => input or textarea
        label
        error
        inputConfig => all input info from hooks and input/textarea attributes
        whenError => hooks => whenTouched && notValid
    */
  const { type } = props;
  return (
    <section className={styles["input-section"]}>
      <label htmlFor={props.inputConfig.id} className={styles["input-label"]}>
        {props.label}
      </label>
      {type === "input" && <input {...props.inputConfig} />}
      {type === "textarea" && <textarea {...props.inputConfig}></textarea>}
      {props.whenError && (
        <p className={styles["input-error"]}>{props.error}</p>
      )}
    </section>
  );
}

export default Input;
