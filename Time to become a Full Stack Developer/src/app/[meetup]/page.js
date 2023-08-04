
import mongoose from "mongoose";
import { Meetups } from "@/lib/model/meetups";

const Meetup = async(props)=>{
    console.log()
    const response = await fetch('http://localhost:3000/api/new-meetup');
    const data = await response.json();
    console.log(data)
    let meetup = data.result.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
    }))
    meetup=meetup.filter((meet)=> meet.id=== props.params.meetup)
    return <section style={{width:'500px',textAlign:'center'}}>
         <img
        src={meetup[0].image}
        alt={meetup[0].title}
        style={{width:'100%'}}
      />
      <h1>{meetup[0].title}</h1>
      <address>{meetup[0].address}</address>
      <p>{meetup[0].description}</p>
    </section>
}

export default Meetup;


