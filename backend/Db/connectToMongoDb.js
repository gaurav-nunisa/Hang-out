import mongoose from "mongoose"


const connectToMongoDb = async ()=>{
    try{
        mongoose.connect(process.env.MONGO_DB_URL)
        console.log("Connected To MongoDb")

    }catch(err){  
        console.log("cannot connect to mongoDB",err.message)  

    }

}
export default connectToMongoDb