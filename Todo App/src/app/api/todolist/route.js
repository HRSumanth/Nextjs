
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { Todolist } from "@/lib/model/Todolist";

export async function GET(){
  await mongoose.connect('mongodb+srv://hrsumanth1998:e3yWlf61PXzcQOQW@cluster0.fxrlcwb.mongodb.net/todolist?retryWrites=true&w=majority')
  const data= await Todolist.find();
  console.log(data)
  return NextResponse.json({result:data})
}

export async function POST(req, res){
  await mongoose.connect('mongodb+srv://hrsumanth1998:e3yWlf61PXzcQOQW@cluster0.fxrlcwb.mongodb.net/todolist?retryWrites=true&w=majority')
  const data= await req.json();
  let todolist = new Todolist(data);
  const result = await todolist.save();
  console.log(result)
  return NextResponse.json({result})
}

export async function DELETE(req, res){
  await mongoose.connect('mongodb+srv://hrsumanth1998:e3yWlf61PXzcQOQW@cluster0.fxrlcwb.mongodb.net/todolist?retryWrites=true&w=majority')
  const data= await req.json();
 const _id= {_id:data}
  const result = await Todolist.deleteOne(_id)
  console.log(result)
  return NextResponse.json({result})
}

