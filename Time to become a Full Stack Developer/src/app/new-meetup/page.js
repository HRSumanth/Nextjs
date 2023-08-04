"use client"
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    console.log(data);
  }

  const handleFormSubmit = (enteredMeetupData) => {
    addMeetupHandler(enteredMeetupData);
  };


  return <NewMeetupForm onAddMeetup={handleFormSubmit} /> 

}

export default NewMeetupPage;
