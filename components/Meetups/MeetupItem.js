import styles from "./MeetupItem.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useRouter } from "next/router";

function MeetupItem(props) {
  const router = useRouter();
  function navigateToMeetupDetail() {
    router.push(`/${props.id}`);
  }

  return (
    <li className={styles["item"]}>
      <Card>
        <div className={styles["image"]}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styles["content"]}>
          <h3>{props.title}</h3>
          <p className={styles["desc"]}>{props.description}</p>
          <address>{`Address:- ${props.address}`}</address>
        </div>
        <div className={styles["actions"]}>
          <Button onClick={navigateToMeetupDetail}>Show Details</Button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
