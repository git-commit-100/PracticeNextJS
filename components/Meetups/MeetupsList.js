import React from "react";
import MealItem from "./MeetupItem";
import styles from "./MeetupsList.module.css";

function MeetupsList(props) {
  return (
    <ul className={styles["meetups-list"]}>
      {props.meetups.map((meetup) => {
        return (
          <MealItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
          />
        );
      })}
    </ul>
  );
}

export default MeetupsList;
