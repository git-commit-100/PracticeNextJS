import MeetupsList from "../components/Meetups/MeetupsList";
import { MongoClient } from "mongodb";
import Head from "next/head";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>Meetups Manager</title>
        <meta
          title="Meetups Manager with NextJS"
          content="Organize, plan and share your meetups or events with the world"
        />
      </Head>
      <MeetupsList meetups={props.meetups} />
    </>
  );
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
      dateOfEvent: meetup.dateOfEvent,
    };
  });
  return {
    props: {
      meetups: meetupArray,
    },
    revalidate: 1,
  };
};

export default HomePage;
