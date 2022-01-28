import React from "react";
import styles from "./MeetupDetails.module.css";
import Card from "../UI/Card";

function MeetupDetails(props) {
  const { image, title, address, description } = props;
  return (
    <Card>
      <div className={styles["image"]}>
        <img src={image} alt={title} />
      </div>
      <div className={styles["content"]}>
        <h3>{title}</h3>
        <p className={styles["desc"]}>{description}</p>
        <address>{`Address:- ${address}`}</address>
      </div>
    </Card>
  );
}

export default MeetupDetails;
