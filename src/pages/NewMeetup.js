import { useNavigate } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

export default function NewMeetupPage() {
  const navigate = useNavigate();

  function addMeetupHandeler(meetupData) {
    fetch('firebase-address/meetups.json/meetups.json', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: { 'Content-Type': 'application/json' },
    }).then(() => {
      navigate('/');
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandeler} />
    </section>
  );
}
