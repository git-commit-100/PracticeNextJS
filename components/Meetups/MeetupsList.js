import React from "react";
import MeetupItem from "./MeetupItem";
import styles from "./MeetupsList.module.css";

function MeetupsList(props) {
  return (
    <ul className={styles["meetups-list"]}>
      {props.meetups.map((meetup) => {
        return (
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
            dateOfEvent={meetup.dateOfEvent}
          />
        );
      })}
    </ul>
  );
}

export default MeetupsList;
