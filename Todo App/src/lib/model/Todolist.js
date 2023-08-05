import mongoose from "mongoose";

const  todolistModel = new mongoose.Schema({
    task: {
        type: String,
        required: true,
      },
})

export const Todolist= mongoose.models.todolist || mongoose.model("todolist",todolistModel)