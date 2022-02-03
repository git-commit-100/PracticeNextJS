import MeetupDetails from "../../components/Meetups/MeetupDetails";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
// import { useRouter } from "next/router";

function MeetupDetailPage(props) {
  const {
    meetupData: { id, title, image, description, address, dateOfEvent },
  } = props;

  /* fallback is set to true, so nextjs will pre-render pages at build timr
  for sure but when a new meetup is added it will set to fallback content
  while it pre-generates the same page on server, so displaying loading
  component while it does the same */
  // if (router.isFallback) {
  //   return <LoadingSpinner />;
  // }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta title={title} content={description} />
      </Head>
      <MeetupDetails
        id={id}
        image={image}
        title={title}
        description={description}
        address={address}
        dateOfEvent={dateOfEvent}
      />
    </>
  );
}

export const getStaticPaths = async () => {
  //db connection
  const client = await MongoClient.connect(
    "mongodb+srv://javaMonk:javaMonkCluster0%40123@cluster0.u42sx.mongodb.net/Meetups?retryWrites=true&w=majority"
  );
  const collection = client.db("Meetups").collection("MeetupsCollection");
  //fetching from db but only ids
  const meetupIds = await collection.find({}, { _id: 1 }).toArray();
  return {
    paths: meetupIds.map((meetup) => ({
      //params should match dynamic route
      params: { meetupId: meetup._id.toString() },
    })),
    //if route dont match above paths then display 404 => fallback: false
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const idFromParams = ctx.params.meetupId;
  //db connection
  const client = await MongoClient.connect(
    "mongodb+srv://javaMonk:javaMonkCluster0%40123@cluster0.u42sx.mongodb.net/Meetups?retryWrites=true&w=majority"
  );
  const collection = client.db("Meetups").collection("MeetupsCollection");
  //fetching single meetup from id
  const selectedMeetup = await collection.findOne({
    _id: ObjectId(idFromParams),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
        address: selectedMeetup.address,
        dateOfEvent: selectedMeetup.dateOfEvent,
      },
    },
  };
};

export default MeetupDetailPage;
