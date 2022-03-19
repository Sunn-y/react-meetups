import classes from './MeetupList.module.css';

import MeetupItem from './MeetupItem';

export default function MeetupList({ meetups }) {
  return (
    <div className={classes.list}>
      {meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          title={meetup.title}
          image={meetup.image}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </div>
  );
}
