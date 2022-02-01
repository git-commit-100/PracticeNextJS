import { useEffect, useState } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/useHttp";
import MeetupsList from "../components/Meetups/MeetupsList";
import { MongoClient } from "mongodb";

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

function HomePage(props) {
  return <MeetupsList meetups={props.meetups} />;
}

//constructs props for component on server to enhance pre-rendering or for SEO
//not visible to client
export const getStaticProps = async () => {
  //db connection
  const client = await MongoClient.connect(
    "mongodb+srv://javaMonk:javaMonkCluster0%40123@cluster0.u42sx.mongodb.net/Meetups?retryWrites=true&w=majority"
  );
  const collection = client.db("Meetups").collection("MeetupsCollection");
  const result = await collection.find().toArray();
  client.close();

  //transform array to custom props
  const meetupArray = result.map((meetup) => {
    return {
      id: meetup._id.toString(),
      image: meetup.image,
      title: meetup.title,
      address: meetup.address,
      description: meetup.description,
    };
  });
  return {
    props: {
      meetups: meetupArray,
    },
    revalidate: 10,
  };
};

export default HomePage;
