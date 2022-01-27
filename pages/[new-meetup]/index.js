import MeetupForm from "../../components/Meetups/MeetupForm";

function NewMeetupPage() {
  function handleAddingNewMeetup(newMeetup) {
    console.log({ newMeetup });
  }

  return <MeetupForm onAddMeetup={handleAddingNewMeetup} />;
}

export default NewMeetupPage;
