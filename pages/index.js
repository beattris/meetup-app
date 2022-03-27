import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "DevFest",
    image:
      "https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    address: "123 street",
    description: "A description about the DevFest",
  },
  {
    id: "m2",
    title: "BizFest",
    image:
      "https://images.pexels.com/photos/161039/panorama-roppen-village-mountains-161039.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    address: "1234 street",
    description: "A description about the BizFest",
  },
];

function HomePage(props) {   
  return (
      <MeetupList meetups={props.meetups} />
  );
}

// used getStaticProps() to move the data fetching awasy from the client
export async function getStaticProps(){
  return{
    props: {
      meetups: DUMMY_MEETUPS
    }
  }
}

export default HomePage;
