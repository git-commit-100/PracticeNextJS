import MeetupForm from "../../components/Meetups/MeetupForm";
import useHttp from "../../hooks/useHttp";
import Notification from "../../components/UI/Notification";
import { useEffect, useState } from "react";

function NewMeetupPage() {
  const [notification, setNotification] = useState(null);
  const { data, status, sendRequest, error } = useHttp();

  function handleHidingNotification() {
    setNotification(null);
  }

  useEffect(() => {
    if (status === "completed" && error) {
      setNotification(
        <Notification
          heading="Error"
          message={error}
          type="error"
          hideNotification={handleHidingNotification}
        />
      );
    }

    if (status === "completed" && !error && data) {
      console.log(data);
      setNotification(
        <Notification
          heading="Success"
          message="Meetup successfully inserted"
          type="success"
          hideNotification={handleHidingNotification}
        />
      );
    }
  }, [data, error, status]);

  function handleAddingNewMeetup(newMeetup) {
    sendRequest({
      url: "/api/new-meetup",
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: newMeetup,
    });
  }

  return (
    <>
      {notification}
      <MeetupForm
        onAddMeetup={handleAddingNewMeetup}
        isLoading={status === "pending"}
      />
    </>
  );
}

export default NewMeetupPage;
