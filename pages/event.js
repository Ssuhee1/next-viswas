import { useRouter } from 'next/router';
import { useState } from 'react';

const EventList = ({ eventList }) => {
  const router = useRouter();
  const [events, setEvents] = useState(eventList);
  const onSports = async () => {
    const response = await fetch(
      'http://localhost:4000/events?category=sports'
    );
    const data = await response.json();
    setEvents(data);
    router.push('/event?category=sports', undefined, { shallow: true });
  };
  return (
    <>
      <h1>Event List</h1>
      <button onClick={onSports}>Sports</button>
      {events.map((event) => (
        <div key={event.id}>
          <h2>
            {event.id} {event.title} {event.date} | {event.category}
          </h2>
          <p>{event.category}</p>
          <hr />
        </div>
      ))}
    </>
  );
};
export default EventList;
export const getServerSideProps = async (context) => {
  const { query } = context;
  const queryString = query.category ? 'category=sports' : '';
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();
  console.log('data', data, queryString);
  return { props: { eventList: data } };
};
