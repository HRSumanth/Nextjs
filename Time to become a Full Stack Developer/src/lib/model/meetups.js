import mongoose from "mongoose";

const  meetupModel = new mongoose.Schema({
    title: String,
    image: String,
    address: String,
    description:String,
})

export const Meetups= mongoose.models.meetups || mongoose.model("meetups",meetupModel)