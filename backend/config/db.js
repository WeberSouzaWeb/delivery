import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://websette:11237594@cluster-food.uhtju.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}