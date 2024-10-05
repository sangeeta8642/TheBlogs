import mongoose from 'mongoose'

const connection = {}

export const connectToDb = async () => {
    try {
        if (connection.isConnected) {
            console.log("using exixting connection");
            return
        }
        const db = await mongoose.connect(process.env.MONGO).then(()=>{
            console.log("mongodb connected");  
        })
        connection.isConnected = db.connections[0].readyState
        console.log(connection);

    } catch (error) {
        console.log(error);
        throw new Error(error);

    }
}