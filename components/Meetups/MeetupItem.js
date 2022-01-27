import styles from "./MeetupItem.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

function MeetupItem(props) {
  return (
    <li className={styles["item"]}>
      <Card>
        <div className={styles["image"]}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styles["content"]}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={styles["actions"]}>
          <Button>Show Details</Button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
