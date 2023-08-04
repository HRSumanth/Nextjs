
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { Meetups } from "@/lib/model/meetups";

export async function GET(){
  await mongoose.connect('mongodb+srv://hrsumanth1998:xO1aSLHD69pg0H7Z@cluster0.fxrlcwb.mongodb.net/meetups?retryWrites=true&w=majority')
  const data= await Meetups.find();
  console.log(data)
  return NextResponse.json({result:data})
}

export async function POST(req, res){
  await mongoose.connect('mongodb+srv://hrsumanth1998:xO1aSLHD69pg0H7Z@cluster0.fxrlcwb.mongodb.net/meetups?retryWrites=true&w=majority')
  const data= await req.json();
  let meetups = new Meetups(data);
  const result = await meetups.save();
  console.log(result)
  return NextResponse.json({result})
}

