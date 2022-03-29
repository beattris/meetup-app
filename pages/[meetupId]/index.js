import React, { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      title="DevFest"
      address="123 street"
      description="A description about the DevFest"
    />
  );
}

export async function getStaticProps(context){
  const meetupId = context.params.meetupId;
  return{
    props: {
      meetupData: {
        image: "https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        id: meetupId,
        title: "DevFest",
        address: "123 street",
        description: "A description about the DevFest"
      }
    }
  }
}

export default MeetupDetails;
