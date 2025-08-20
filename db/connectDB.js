import mongoose from "mongoose";

export async function connectDB(uri) {
    if(mongoose.connection.readyState >= 1) return;
    mongoose.set('strictQuery',true);
    await mongoose.connect(uri,{
        dbName:'MONGO_GENERAL_DB',
    });
}