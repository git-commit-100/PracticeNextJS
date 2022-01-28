import React from "react";
import styles from "./MeetupForm.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Input from "../UI/Input";
import useInput from "../../hooks/useInput";

function MeetupForm(props) {
  let isFormValid = false;
  const {
    inputValue: meetupTitle,
    isInputTouched: isMeetupTitleTouched,
    isInputValid: isMeetupTitleValid,
    handleInputChange: handleMeetupTitleChange,
    handleInputBlur: handleMeetupTitleBlur,
    resetInput: resetMeetupTitle,
  } = useInput((title) => title.trim() !== "");

  const {
    inputValue: meetupImage,
    isInputTouched: isMeetupImageTouched,
    isInputValid: isMeetupImageValid,
    handleInputChange: handleMeetupImageChange,
    handleInputBlur: handleMeetupImageBlur,
    resetInput: resetMeetupImage,
  } = useInput(
    (url) =>
      url.trim() !== "" &&
      url.includes("https://") &&
      (url.includes(".jpg") || url.includes(".png"))
  );

  const {
    inputValue: meetupAddress,
    isInputTouched: isMeetupAddressTouched,
    isInputValid: isMeetupAddressValid,
    handleInputChange: handleMeetupAddressChange,
    handleInputBlur: handleMeetupAddressBlur,
    resetInput: resetMeetupAddress,
  } = useInput((address) => address.trim() !== "");

  const {
    inputValue: meetupDescription,
    isInputTouched: isMeetupDescriptionTouched,
    isInputValid: isMeetupDescriptionValid,
    handleInputChange: handleMeetupDescriptionChange,
    handleInputBlur: handleMeetupDescriptionBlur,
    resetInput: resetMeetupDescription,
  } = useInput((desc) => desc.trim() !== "");

  if (
    isMeetupTitleValid &&
    isMeetupImageValid &&
    isMeetupAddressValid &&
    isMeetupDescriptionValid
  ) {
    isFormValid = true;
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const newMeetup = {
      id: new Date().getTime(),
      title: meetupTitle,
      address: meetupAddress,
      image: encodeURI(meetupImage),
      description: meetupDescription,
    };
    props.onAddMeetup(newMeetup);
  }

  return (
    <Card className={styles["form-card"]}>
      <form onSubmit={handleFormSubmit}>
        <Input
          type="input"
          label="Meetup Title"
          error="This field cannot be empty"
          inputConfig={{
            type: "text",
            id: "meetup-title",
            value: meetupTitle,
            onChange: handleMeetupTitleChange,
            onBlur: handleMeetupTitleBlur,
          }}
          whenError={isMeetupTitleTouched && !isMeetupTitleValid}
        />

        <Input
          type="input"
          label="Meetup Image"
          error="Please enter a valid URL of an image. Only jpg/png files are supported"
          inputConfig={{
            type: "url",
            id: "meetup-image",
            value: meetupImage,
            onChange: handleMeetupImageChange,
            onBlur: handleMeetupImageBlur,
          }}
          whenError={isMeetupImageTouched && !isMeetupImageValid}
        />

        <Input
          type="textarea"
          label="Meetup Address"
          error="This field cannot be empty"
          inputConfig={{
            type: "text",
            id: "meetup-address",
            value: meetupAddress,
            onChange: handleMeetupAddressChange,
            onBlur: handleMeetupAddressBlur,
          }}
          whenError={isMeetupAddressTouched && !isMeetupAddressValid}
        />

        <Input
          type="textarea"
          label="Meetup Description"
          error="This field cannot be empty"
          inputConfig={{
            type: "text",
            id: "meetup-description",
            value: meetupDescription,
            onChange: handleMeetupDescriptionChange,
            onBlur: handleMeetupDescriptionBlur,
          }}
          whenError={isMeetupDescriptionTouched && !isMeetupDescriptionValid}
        />

        <div className={styles["actions"]}>
          <Button type="submit" disabled={!isFormValid}>
            Add Meetup
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default MeetupForm;
