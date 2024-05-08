import mongoose from "mongoose";


export const dbConnect = async () => {
    try{
        const connectionInstance = await mongoose.connect("mongodb://localhost:27017", {
            dbName: "test"
        })
        console.log(connectionInstance.connection.host);
    }catch(err) {
        console.log(err);
    }
}

// export default dbConnect
