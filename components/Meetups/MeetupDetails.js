import React from "react";
import styles from "./MeetupDetails.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useRouter } from "next/router";

function MeetupDetails(props) {
  const router = useRouter();
  const { image, title, address, description, dateOfEvent } = props;

  return (
    <Card>
      <div className={styles["image"]}>
        <img src={image} alt={title} />
      </div>
      <div className={styles["content"]}>
        <h4>
          Title: <p>{title}</p>
        </h4>
        <h4 className={styles["date"]}>
          Date Of Meetup: <p>{dateOfEvent}</p>
        </h4>
        <h4 className={styles["desc"]}>
          Description: <p>{description}</p>
        </h4>
        <h4 className={styles["address"]}>
          Address: <address>{address}</address>
        </h4>
      </div>
      <div className={styles["action"]}>
        <Button onClick={() => router.back()}>Go Back</Button>
      </div>
    </Card>
  );
}

export default MeetupDetails;
