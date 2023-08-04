import MeetupList from './components/meetups/MeetupList'
import mongoose from "mongoose";
import { Meetups } from "@/lib/model/meetups";


export default async function Home(props) {
  const response = await fetch('http://localhost:3000/api/new-meetup');
  const data = await response.json();
  console.log(data)
  const meetups = data.result.map((meetup) => ({
    title: meetup.title,
    address: meetup.address,
    image: meetup.image,
    id: meetup._id.toString(),
  }))
  
  return (
    <MeetupList meetups={meetups} ></MeetupList>
  )
}


