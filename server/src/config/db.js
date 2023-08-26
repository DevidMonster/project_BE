import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

const connecting = () => {
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to Mongoose server successfully");
    } catch (error) {
        console.log("Error connecting: ", error);
    }
}

export default connecting