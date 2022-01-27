import MeetupsList from "../components/Meetups/MeetupsList";

const DUMMY_MEETUPS = [
  {
    id: 1,
    title: "Meetup 1",
    image:
      "https://s3.india.com/travel/wp-content/uploads/2016/05/Kitty-Su.jpg",
    address: "Behind India Gate",
    description: "Best Clubs of India",
  },
  {
    id: 2,
    title: "Meetup 2",
    image: "https://s3.india.com/travel/wp-content/uploads/2016/05/Shiro.jpg",
    address: "In Mumbai",
    description: "Best Clubs of Mumbai",
  },
];

function HomePage() {
  return <MeetupsList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
